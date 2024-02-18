import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const ProgressBar: React.FC = () => {
  const {t} = useTranslation();
  return (
    <View testID="progress-bar" style={style.container}>
      <ActivityIndicator color="white" animating={true} size="small" />
      <Text style={style.label}>{t('home.progress-message')}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF80',
    padding: 10,
  },
  label: {color: 'white', paddingLeft: 10},
});
export default ProgressBar;
