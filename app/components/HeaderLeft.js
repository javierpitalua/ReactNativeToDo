import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class HeaderLeft extends React.Component {
  render() {
    return (
      <View style={HeaderStyles.mainContainer}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require('../../app/img/userDefault.png')}
        />
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
    width: '100%',
    paddingLeft: 10
  },
});
