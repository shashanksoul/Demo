import {
  AuthActionTypes,
  MovieActionTypes,
  initialAuthState,
  initialState,
} from '.';
import {AppState} from './types';

const movieReducer = (
  state: AppState = initialState,
  action: any,
): AppState => {
  switch (action.type) {
    case MovieActionTypes.MOVIE_REQ:
      return {
        ...state,
        isLoading: true,
        currentMoviePage: action.payload,
      };
    case MovieActionTypes.MOVIE_REQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: [...state.movies, ...action.payload.movies],
        totalPages: action.payload.totalPages,
        error: undefined,
      };
    case MovieActionTypes.MOVIE_REQ_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const authReducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    case AuthActionTypes.LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AuthActionTypes.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export {movieReducer, authReducer};
