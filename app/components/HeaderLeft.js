import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';

export default class HeaderLeft extends React.Component {
  render() {
    return (
      <View style={HeaderTitleStyles.mainContainer}>
        <Text style={HeaderTitleStyles.title}>[Profile Picture]</Text>
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
