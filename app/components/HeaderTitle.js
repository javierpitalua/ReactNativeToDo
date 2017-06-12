import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <View style={HeaderStyles.mainContainer}>
        <Text style={HeaderStyles.title}>Welcome [Username]!</Text>
      </View>
    );
  }
}

const HeaderStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
