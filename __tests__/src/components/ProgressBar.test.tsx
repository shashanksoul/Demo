import React from 'react';
import {render} from '@testing-library/react-native';
import ProgressBar from '../../../src/components/ProgressBar';

describe('ProgressBar component', () => {
  it('render', () => {
    const pBar = render(<ProgressBar />);
    expect(pBar).toMatchSnapshot();
  });
});
