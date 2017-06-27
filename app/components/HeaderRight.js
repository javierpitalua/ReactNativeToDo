import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class HeaderRight extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._doLogout = this._doLogout.bind(this);
  }

  _doLogout() {
  }

  render() {
    return (
      <View style={HeaderStyles.mainContainer}>
        <Button color='#707cd2' title='LOG OUT' onPress={this._doLogout} />
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
    paddingRight: 10,
  },
});
