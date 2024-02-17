import {MovieActionTypes, MovieActions} from '../../../../src/data/redux';

describe('Movie Actions', () => {
  it('movie request action', () => {
    const result = MovieActions.popularMoviesRequest();
    expect(result.type).toEqual(MovieActionTypes.MOVIE_REQ);
    expect(result.payload).toEqual(1);
  });

  it('movie request successful action', () => {
    const result = MovieActions.popularMovieSuccess([], 0);
    expect(result.type).toEqual(MovieActionTypes.MOVIE_REQ_SUCCESS);
    expect(result.payload.movies).toEqual([]);
  });

  it('movie request failure action', () => {
    const error = 'request failed';
    const result = MovieActions.popularMovieFailure(error);
    expect(result.type).toEqual(MovieActionTypes.MOVIE_REQ_FAIL);
    expect(result.payload).toEqual(error);
  });
});
