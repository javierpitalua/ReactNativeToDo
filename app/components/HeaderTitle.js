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
        <Text style={HeaderStyles.title}>Projects</Text>
        <Text style={HeaderStyles.badgeText}>3</Text>
      </View>
    );
  }
}

const HeaderStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 25,
    color: 'white',
  },
  badgeText: {
    fontSize: 20,
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    textAlign: 'center',
    color: 'white',
  },
});
