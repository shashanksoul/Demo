import {MovieActionTypes} from '.';
import {Movie} from '../api/types';

const popularMoviesRequest = (page = 1) => {
  return {
    type: MovieActionTypes.MOVIE_REQ,
    payload: page,
  };
};

const popularMovieSuccess = (movies: Movie[], totalPages: number) => {
  return {
    type: MovieActionTypes.MOVIE_REQ_SUCCESS,
    payload: {
      movies,
      totalPages,
    },
  };
};

const popularMovieFailure = (error: string) => {
  return {
    type: MovieActionTypes.MOVIE_REQ_FAIL,
    payload: error,
  };
};

const MovieActions = {
  popularMoviesRequest,
  popularMovieSuccess,
  popularMovieFailure,
};

export default MovieActions;
