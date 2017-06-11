import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import LoginScreen from './app/src/views/LoginScreen';
import HomeScreen from './app/src/views/HomeScreen';

const ReactNativeToDo = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <ReactNativeToDo />
    );
  }
}
