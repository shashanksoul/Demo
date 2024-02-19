import {AuthActionTypes, MovieActionTypes} from '.';
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

const logIn = () => {
  return {
    type: AuthActionTypes.LOG_IN,
  };
};
const logOut = () => {
  return {
    type: AuthActionTypes.LOG_OUT,
  };
};

const MovieActions = {
  popularMoviesRequest,
  popularMovieSuccess,
  popularMovieFailure,
};

const AuthActions = {
  logIn,
  logOut,
};
export {AuthActions, MovieActions};
