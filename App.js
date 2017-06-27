import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/src/views/LoginScreen';
import ProjectScreen from './app/src/views/ProjectScreen';
import MoreScreen from './app/src/views/MoreScreen';
import TaskDetailScreen from './app/src/views/TaskDetailScreen';

const ReactNativeToDo = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  ProjectScreen: { screen: ProjectScreen },
  MoreScreen: { screen: MoreScreen },
  TaskDetailScreen: { screen: TaskDetailScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <ReactNativeToDo />
    );
  }
}
