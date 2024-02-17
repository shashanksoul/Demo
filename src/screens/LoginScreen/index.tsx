import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from './styles';
import {isValidEmail, isValidPassword} from '../../utils/isValid';
import {LoginScreenProps} from './types';

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoginEnabled = () => isValidEmail(email) && isValidPassword(password);
  return (
    <View style={style.container}>
      <Image
        style={style.backgroundImage}
        source={require('../../assets/images/home-bg.jpg')}
      />
      <Text style={style.title}>Demo App</Text>
      <TextInput
        testID="email-input"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={style.input}
        placeholder="User name"
      />
      <TextInput
        testID="password-input"
        value={password}
        onChangeText={setPassword}
        keyboardType="visible-password"
        style={style.input}
        placeholder="Password"
      />
      <TouchableOpacity
        testID="login-button"
        disabled={!isLoginEnabled()}
        activeOpacity={0.8}
        style={
          isLoginEnabled() ? style.button : [style.button, style.buttonDisabled]
        }
        onPress={() => navigation.replace('Home')}>
        <Text
          style={
            isLoginEnabled()
              ? style.buttonText
              : [style.buttonText, style.buttonDisabledText]
          }>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
