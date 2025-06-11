import axios from 'axios';
import {TMDB_ACCESS_TOKEN, TMDB_BASE_URL} from '@env';

export async function getPopularMovies() {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error obtaining popular movies: ', error);
  }
}

export function getImagePath(path: string) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}
