import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
  };

  constructor(props, context) {
    super(props, context);
    this._doMore = this._doMore.bind(this);
  }

  _doMore() {
  }

  render() {
    return (
      <View style={TaskDetailStyles.mainContainer}>
        <Text style={TaskDetailStyles.titleText}>Task detail screen!</Text>
      </View>
    );
  }
}

const TaskDetailStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 45,
    width: '100%',
    textAlign: 'center',
  }
});
