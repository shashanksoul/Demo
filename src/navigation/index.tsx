import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, LoginScreen} from '../screens';
import {RootStackParamList} from './types';
import {useSelector} from 'react-redux';
import LogoutButton from '../components/LogoutButton';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  const {t} = useTranslation();
  const isLoggedIn = useSelector((state: any) => state.authReducer.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isLoggedIn ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerRight: LogoutButton, title: t('home.title')}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
