import {MovieActions, movieReducer} from '../../../../src/data/redux';
import {AppState} from '../../../../src/data/redux/types';

const initialState: AppState = {
  movies: [],
  error: undefined,
  isLoading: false,
};

describe('movie reducer', () => {
  it('movie requested action', () => {
    const newState = movieReducer(
      initialState,
      MovieActions.popularMoviesRequest(5),
    );

    expect(newState.isLoading).toEqual(true);
    expect(newState.currentMoviePage).toEqual(5);
  });

  it('movie request failed action', () => {
    const newState = movieReducer(
      initialState,
      MovieActions.popularMovieFailure('request failed'),
    );
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toEqual('request failed');
  });

  it('movie request success action', () => {
    const newState = movieReducer(
      initialState,
      MovieActions.popularMovieSuccess([], 1),
    );
    expect(newState.isLoading).toEqual(false);
    expect(newState.totalPages).toEqual(1);
  });

  it('invalid action type', () => {
    const newState = movieReducer(undefined, '');
    expect(newState).toEqual(initialState);
  });
});
