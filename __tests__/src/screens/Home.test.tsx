import {render} from '@testing-library/react-native';
import {HomeScreen} from '../../../src/screens';
import React from 'react';

describe('Home Screen', () => {
  it('renders correctly', () => {
    const loginUI = render(<HomeScreen />);
    expect(loginUI).toMatchSnapshot();
  });
});
