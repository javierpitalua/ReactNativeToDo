import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

export default class HeaderLeft extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._doOpenProfile = this._doOpenProfile.bind(this);
  }

  _doOpenProfile() {
  }

  render() {
    return (
      <View style={HeaderStyles.mainContainer}>
        <TouchableHighlight underlayColor='transparent' onPress={this._doOpenProfile}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../../app/img/userDefault.png')}
            onPre
          />
        </TouchableHighlight>
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
