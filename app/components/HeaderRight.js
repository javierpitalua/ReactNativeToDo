import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class HeaderRight extends React.Component {
  render() {
    return (
      <View style={HeaderStyles.mainContainer}>
        <Button color='skyblue' title='LOG OUT' onPress={() => {}} />
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
