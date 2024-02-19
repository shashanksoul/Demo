import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LogoutButton from '../../../src/components/LogoutButton';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('Logout Button', () => {
  it('render', () => {
    const button = render(<LogoutButton />);
    expect(button.toJSON()).toMatchSnapshot();
  });
  it('on press', () => {
    const {getByTestId} = render(<LogoutButton />);
    const button = getByTestId('logout-button');
    fireEvent(button, 'onPress');
    expect(mockDispatch).toHaveBeenCalledWith({type: 'LOG_OUT'});
  });
});
