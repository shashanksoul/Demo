import {Movie} from '../api/types';

export interface AppState {
  movies: Movie[];
  currentMoviePage?: number;
  totalPages?: number;
  isLoading: boolean;
  error?: string;
}
