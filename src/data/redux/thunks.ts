import {Dispatch, UnknownAction} from 'redux';
import {MovieActions} from '.';
import {getPopularMovies} from '../api';

const getMovies = (page: number) => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    dispatch(MovieActions.popularMoviesRequest(page));
    try {
      const {data} = await getPopularMovies(page);
      dispatch(
        MovieActions.popularMovieSuccess(data.results, data.total_pages),
      );
    } catch (error) {
      const apiError = error as Error;
      dispatch(MovieActions.popularMovieFailure(apiError.message));
    }
  };
};

const MovieThunks = {
  getMovies,
};

export default MovieThunks;
