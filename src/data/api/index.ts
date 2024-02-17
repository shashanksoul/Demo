import axios, {AxiosResponse} from 'axios';
import token from '../../../.key.js';
import {PopularMoviesResponse} from './types.js';

const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getPopularMovies = (
  page = 1,
): Promise<AxiosResponse<PopularMoviesResponse>> => {
  const params = {
    include_adult: false,
    sort_by: 'popularity.desc',
    include_video: false,
    language: 'en-US',
    page: page,
  };
  return axios.get(BASE_URL + 'discover/movie', {params});
};
