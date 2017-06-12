import React from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import HeaderTitle from '../../../app/components/HeaderTitle';
import HeaderLeft from '../../../app/components/HeaderLeft';
import HeaderRight from '../../../app/components/HeaderRight';
import MainStyles from '../../../app/css/MainStyles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle />,
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />,
  };

  render() {
    return (
      <View style={MainStyles.mainContainer}>
        <Text style={MainStyles.title}>Home Screen!</Text>
      </View>
    );
  }
}
