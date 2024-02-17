import {AppState} from './types';
import movieReducer from './reducer';
import MovieActions from './actions';
import MovieThunks from './thunks';

export const initialState: AppState = {
  movies: [],
  error: undefined,
  isLoading: false,
};

const MovieActionTypes = {
  MOVIE_REQ: 'MOVIE_REQ',
  MOVIE_REQ_SUCCESS: 'MOVIE_REQ_SUCCESS',
  MOVIE_REQ_FAIL: 'MOVIE_REQ_FAIL',
};

export {movieReducer, MovieActionTypes, MovieActions, MovieThunks};
