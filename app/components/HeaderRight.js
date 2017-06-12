import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';

export default class HeaderRight extends React.Component {
  render() {
    return (
      <View style={HeaderTitleStyles.mainContainer}>
        <Text style={HeaderTitleStyles.title}>LOG OUT</Text>
      </View>
    );
  }
}

const HeaderTitleStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
