import {render} from '@testing-library/react-native';
import {LoginScreen} from '../../../src/screens';
import React from 'react';

describe('Login Screen', () => {
  it('renders correctly', () => {
    const loginUI = render(<LoginScreen />);
    expect(loginUI).toMatchSnapshot();
  });
});
