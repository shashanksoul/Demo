import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from './styles';
import {isValidEmail, isValidPassword} from '../../utils/isValid';
import {LoginScreenProps} from './types';
import {useTranslation} from 'react-i18next';
import LanguagePicker from '../../components/LanguagePicker';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../../data/redux';

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();
  const dispatch = useDispatch();

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
        placeholder={t('login.user-name')}
      />
      <TextInput
        testID="password-input"
        value={password}
        onChangeText={setPassword}
        keyboardType="visible-password"
        style={style.input}
        placeholder={t('login.password')}
      />
      <TouchableOpacity
        testID="login-button"
        disabled={!isLoginEnabled()}
        activeOpacity={0.8}
        style={
          isLoginEnabled() ? style.button : [style.button, style.buttonDisabled]
        }
        onPress={() => {
          dispatch(AuthActions.logIn());
          //navigation.replace('Home');
        }}>
        <Text
          style={
            isLoginEnabled()
              ? style.buttonText
              : [style.buttonText, style.buttonDisabledText]
          }>
          {t('login.login')}
        </Text>
      </TouchableOpacity>
      <View style={style.dropDown}>
        <LanguagePicker />
      </View>
    </View>
  );
};

export default LoginScreen;
