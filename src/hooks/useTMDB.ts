import {TMDB_ACCESS_TOKEN, TMDB_BASE_URL} from '@env';
import axios from 'axios';
import {useReducer, useEffect} from 'react';
import {ApiPath} from '../interfaces/Movie';

type State<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

type Action<T> =
  | {type: 'LOADING'}
  | {type: 'SUCCESS'; payload: T}
  | {type: 'ERROR'; payload: Error};

const dataFetchReducer = <T>(state: State<T>, action: Action<T>) => {
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

type UseTMDBProps<T> = {
  pathData: ApiPath;
  initialStateData?: T;
};

const useTMDB = <T>({pathData, initialStateData}: UseTMDBProps<T>) => {
  const [state, dispatch] = useReducer(dataFetchReducer<T>, {
    data: initialStateData ? initialStateData : null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      dispatch({type: 'LOADING'});

      try {
        console.log(`${TMDB_BASE_URL}${pathData.path}`);
        const response = await axios.get(`${TMDB_BASE_URL}${pathData.path}`, {
          headers: {
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          params: {
            ...pathData.params,
          },
        });
        if (!didCancel) {
          dispatch({type: 'SUCCESS', payload: response.data.results});
        }
      } catch (error) {
        if (!didCancel) {
          if (error instanceof Error) dispatch({type: 'ERROR', payload: error});
          else dispatch({type: 'ERROR', payload: new Error(String(error))});
        }
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [pathData.path]);

  return {...state};
};

export default useTMDB;
