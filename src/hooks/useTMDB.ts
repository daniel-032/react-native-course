import { TMDB_ACCESS_TOKEN, TMDB_BASE_URL } from '@env';
import axios from 'axios';
import {useReducer, useEffect} from 'react';

const useTMDB = <T>({ path, initialStateData }: { path: string, initialStateData?: T }) => {
  type State = {
    data: T | null;
    loading: boolean;
    error: Error | null;
  };

  type Action =
    | {type: 'LOADING'}
    | {type: 'SUCCESS'; payload: T}
    | {type: 'ERROR'; payload: Error };

  const dataFetchReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'LOADING':
        return {...state, loading: true};
      case 'SUCCESS':
        return {...state, data: action.payload, loading: false};
      case 'ERROR':
        return {...state, error: action.payload, loading: false};
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(dataFetchReducer, {
    data: initialStateData? initialStateData : null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      dispatch({type: 'LOADING'});

      try {
        const response = await axios.get(`${TMDB_BASE_URL}/movie/${path}`, {
        headers: {
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        params: {
          language: 'en-US',
          page: 1,
        },
      });
        if (!didCancel) {
          dispatch({type: 'SUCCESS', payload: response.data.results});
        }
      } catch (error) {
        if (!didCancel) {
          if (error instanceof Error) 
            dispatch({type: 'ERROR', payload: error});
          else
            dispatch({type: 'ERROR', payload: new Error(String(error))})
        }
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [path]);

  return {...state};
};

export default useTMDB;
