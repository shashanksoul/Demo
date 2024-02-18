import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const ProgressBar: React.FC = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator color="white" animating={true} size="small" />
      <Text style={style.label}>Loading More Movies...</Text>
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
