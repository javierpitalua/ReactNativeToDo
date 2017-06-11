import React from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import MainStyles from '../../../app/css/MainStyles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={MainStyles.mainContainer}>
        <Text style={MainStyles.title}>Home Screen!</Text>
      </View>
    );
  }
}
