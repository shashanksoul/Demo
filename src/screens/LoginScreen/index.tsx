import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from './styles';

const LoginScreen: React.FC = () => {
  return (
    <View style={style.container}>
      <Image
        style={style.backgroundImage}
        source={require('../../assets/images/home-bg.jpg')}
      />
      <Text style={style.title}>Demo App</Text>
      <TextInput
        keyboardType="email-address"
        style={style.input}
        placeholder="User name"
      />
      <TextInput
        keyboardType="visible-password"
        style={style.input}
        placeholder="Password"
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={style.button}
        onPress={() => {}}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
