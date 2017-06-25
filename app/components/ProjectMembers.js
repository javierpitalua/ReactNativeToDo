import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native';
import MoreScreen from '../../app/src/views/MoreScreen';

export default class DetailScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._doTaskFilterByMember = this._doTaskFilterByMember.bind(this);
  }

  _doTaskFilterByMember() {
    // const { navigate } = this.props.navigation;
    // navigate('MoreScreen');
  }

  render() {
    return (
      <View style={DetailStyles.mainContainer}>
        <TouchableHighlight underlayColor='transparent' style={DetailStyles.touchableHighlight} onPress={this._doTaskFilterByMember}>
          <Image
            style={DetailStyles.imageMember}
            source={require('../../app/img/userDefault.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='transparent' style={DetailStyles.touchableHighlight} onPress={this._doTaskFilterByMember}>
          <Image
            style={DetailStyles.imageMember}
            source={require('../../app/img/userDefault.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='transparent' style={DetailStyles.touchableHighlight} onPress={this._doTaskFilterByMember}>
          <Image
            style={DetailStyles.imageMember}
            source={require('../../app/img/userDefault.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const DetailStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  touchableHighlight: {
  },
  imageMember: {
    width: 50,
    height: 50,
  }
});
