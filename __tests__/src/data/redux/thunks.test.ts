import configureMockStore from 'redux-mock-store';
import {thunk} from 'redux-thunk';
import {MovieThunks, initialState} from '../../../../src/data/redux';
import * as Api from '../../../../src/data/api';

const middleWares = [thunk];

const mockStore = configureMockStore(middleWares);
jest
  .spyOn(Api, 'getPopularMovies')
  .mockRejectedValueOnce(new Error('service down'))
  .mockResolvedValueOnce({
    data: {
      results: [],
      total_pages: 0,
      total_results: 0,
      page: 0,
    },
  } as any);

describe('movie thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('get movie request fails', () => {
    const expectedActions = [
      {type: 'MOVIE_REQ', payload: 1},
      {type: 'MOVIE_REQ_FAIL', payload: 'service down'},
    ];
    const store = mockStore(initialState);
    store.dispatch(MovieThunks.getMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('get movie request success', () => {
    const expectedActions = [
      {type: 'MOVIE_REQ', payload: 1},
      {
        type: 'MOVIE_REQ_SUCCESS',
        payload: {movies: [], totalPages: 0},
      },
    ];
    const store = mockStore(initialState);
    store.dispatch(MovieThunks.getMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
