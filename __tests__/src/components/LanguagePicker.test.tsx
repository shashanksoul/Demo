import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LanguagePicker from '../../../src/components/LanguagePicker';
import i18next from 'i18next';

describe('Language Picker component', () => {
  it('render', () => {
    const picker = render(<LanguagePicker />);
    expect(picker).toMatchSnapshot();
  });

  it('change language', () => {
    const {getByTestId} = render(<LanguagePicker />);
    const picker = getByTestId('picker');
    fireEvent(picker, 'setValue', () => 'hi');
    expect(i18next.language).toEqual('hi');
  });
});
