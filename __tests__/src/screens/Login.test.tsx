import {fireEvent, render} from '@testing-library/react-native';
import {LoginScreen} from '../../../src/screens';
import React from 'react';

const mockNavigation: any = {
  replace: jest.fn(),
};
const mockRoute: any = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('Login Screen', () => {
  it('renders correctly', () => {
    const loginUI = render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />,
    );
    const button = loginUI.getByTestId('login-button');
    fireEvent(button, 'press');
    expect(mockDispatch).not.toHaveBeenCalled();
    expect(loginUI.toJSON()).toMatchSnapshot();
  });

  it('when username not valid', () => {
    const {getByTestId} = render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />,
    );
    const passwordInput = getByTestId('password-input');
    const emailInput = getByTestId('email-input');
    fireEvent.changeText(passwordInput, 'Kuy@1298h9');
    fireEvent.changeText(emailInput, 'skumargmail.com');
    const button = getByTestId('login-button');
    fireEvent(button, 'press');
    expect(passwordInput.props.value).toBe('Kuy@1298h9');
    expect(emailInput.props.value).toBe('skumargmail.com');
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('when password not valid', () => {
    const {getByTestId} = render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />,
    );
    const passwordInput = getByTestId('password-input');
    const emailInput = getByTestId('email-input');
    fireEvent.changeText(passwordInput, 'asf345fa');
    fireEvent.changeText(emailInput, 'skumar@gmail.com');
    const button = getByTestId('login-button');
    fireEvent(button, 'press');
    expect(passwordInput.props.value).toBe('asf345fa');
    expect(emailInput.props.value).toBe('skumar@gmail.com');
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('when email & password valid', () => {
    const {getByTestId} = render(
      <LoginScreen navigation={mockNavigation} route={mockRoute} />,
    );
    const passwordInput = getByTestId('password-input');
    const emailInput = getByTestId('email-input');
    fireEvent.changeText(passwordInput, 'Kuy@1298h9');
    fireEvent.changeText(emailInput, 'skumar@gmail.com');
    const button = getByTestId('login-button');
    fireEvent(button, 'press');
    expect(mockDispatch).toHaveBeenCalledWith({type: 'LOG_IN'});
  });
});
