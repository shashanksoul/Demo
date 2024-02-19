import {Movie} from '../api/types';

export interface MovieState {
  movies: Movie[];
  currentMoviePage?: number;
  totalPages?: number;
  isLoading: boolean;
  error?: string;
}

export interface AuthState {
  isLoggedIn: boolean;
}
