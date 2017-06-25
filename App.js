import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/src/views/LoginScreen';
import ProjectScreen from './app/src/views/ProjectScreen';
import DetailScreen from './app/src/views/DetailScreen';
import MoreScreen from './app/src/views/MoreScreen';

const ReactNativeToDo = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  ProjectScreen: { screen: ProjectScreen },
  DetailScreen: { screen: DetailScreen },
  MoreScreen: { screen: MoreScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <ReactNativeToDo />
    );
  }
}
