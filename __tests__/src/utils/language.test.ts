import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveCurrentLng, updateSavedLng} from '../../../src/utils/language';
import i18next from 'i18next';
import React from 'react';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest
    .fn()
    .mockReturnValueOnce('hi')
    .mockRejectedValueOnce('reading error'),
  setItem: jest.fn().mockReturnValueOnce('').mockRejectedValueOnce('error'),
}));

const mockConsole = jest.spyOn(console, 'log');

describe('app language utils', () => {
  afterEach(() => jest.clearAllMocks());
  it('get saved lng success', async () => {
    await updateSavedLng();
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('settings.lang');
    expect(i18next.language).toEqual('hi');
  });
  it('get saved lng error', async () => {
    await updateSavedLng();
    expect(mockConsole).toHaveBeenCalledWith(
      'Language reading error: reading error',
    );
  });
  it('save app lng success', async () => {
    await saveCurrentLng('hi');
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('settings.lang', 'hi');
    expect(mockConsole).not.toHaveBeenCalled();
  });
  it('save app lng error', async () => {
    await saveCurrentLng('hi');
    expect(mockConsole).toHaveBeenCalledWith('Language saving error: error');
  });
});
