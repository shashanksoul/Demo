import {fireEvent, render} from '@testing-library/react-native';
import {HomeScreen} from '../../../src/screens';
import React from 'react';

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
jest.mock('react-redux', () => ({
  useSelector: jest
    .fn()
    .mockImplementationOnce(() => ({
      isLoading: false,
      movies: [],
      error: undefined,
      currentPage: 1,
      totalPages: 10,
    }))
    .mockReturnValueOnce({
      isLoading: true,
      movies: [],
      error: undefined,
      currentPage: 1,
      totalPages: 10,
    })
    .mockReturnValueOnce({
      isLoading: true,
      movies: [],
      error: 'service down',
      currentPage: 1,
      totalPages: 10,
    })
    .mockReturnValue({
      isLoading: false,
      movies: [{poster_path: 'image', title: 'name'}],
      error: undefined,
      currentPage: 1,
      totalPages: 10,
    }),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Home Screen', () => {
  it('renders correctly', () => {
    const loginUI = render(<HomeScreen />);
    expect(loginUI).toMatchSnapshot();
  });
  it('progress bar visible', () => {
    const {getByTestId} = render(<HomeScreen />);
    const progressBar = getByTestId('progress-bar');
    expect(progressBar).toBeTruthy();
  });
  it('error from api', () => {
    const {getByTestId} = render(<HomeScreen />);
    const errorText = getByTestId('error-text');
    expect(errorText.children).toEqual(['service down']);
  });
  it('renders all items in flat list', () => {
    const {getAllByTestId} = render(<HomeScreen />);
    const movieItems = getAllByTestId('movie-item');
    expect(movieItems.length).toEqual(1);
  });
  it('triggers when reached end of flat list', () => {
    useStateSpy.mockImplementation(() => [1, setState]);
    const {getByTestId} = render(<HomeScreen />);
    const flatList = getByTestId('flat-list');
    fireEvent(flatList, 'onEndReached');
    expect(setState).toHaveBeenCalledWith(2);
  });
});
