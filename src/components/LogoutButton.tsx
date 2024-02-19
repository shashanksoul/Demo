import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../data/redux';

const LogoutButton = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(AuthActions.logOut());
  };
  return (
    <TouchableOpacity testID="logout-button" onPress={() => logOut()}>
      <Text>{t('home.logout')}</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
