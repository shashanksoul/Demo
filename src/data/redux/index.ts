import {AppState, AuthState} from './types';
import {movieReducer, authReducer} from './reducer';
import {MovieActions, AuthActions} from './actions';
import MovieThunks from './thunks';

export const initialState: AppState = {
  movies: [],
  error: undefined,
  isLoading: false,
};

export const initialAuthState: AuthState = {
  isLoggedIn: false,
};

const MovieActionTypes = {
  MOVIE_REQ: 'MOVIE_REQ',
  MOVIE_REQ_SUCCESS: 'MOVIE_REQ_SUCCESS',
  MOVIE_REQ_FAIL: 'MOVIE_REQ_FAIL',
};

const AuthActionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
};

export {
  movieReducer,
  authReducer,
  MovieActionTypes,
  MovieActions,
  AuthActions,
  MovieThunks,
  AuthActionTypes,
};
