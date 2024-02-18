import React from 'react';
import {render} from '@testing-library/react-native';
import MovieItem from '../../../src/components/MovieItem';

describe('MovieItem', () => {
  it('render', () => {
    const mockMovie = {
      poster_path: 'moviePath',
      title: 'mockTitle',
    };
    const {getByTestId} = render(<MovieItem movieDetail={mockMovie} />);
    const titleText = getByTestId('movie-title');
    const movieImage = getByTestId('movie-image');
    expect(movieImage.props.source.uri).toEqual(
      'https://image.tmdb.org/t/p/w500/moviePath',
    );
    expect(titleText.children).toEqual(['mockTitle']);
  });
});
