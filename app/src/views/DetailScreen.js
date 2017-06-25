import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native';
import MoreScreen from '../../../app/src/views/MoreScreen';
import ProjectMembers from '../../../app/components/ProjectMembers';
import TaskList from '../../../app/components/TaskList';

export default class DetailScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._doMore = this._doMore.bind(this);
  }

  _doMore() {
    // const { navigate } = this.props.navigation;
    // navigate('MoreScreen');
  }

  render() {
    return (
      <View style={DetailStyles.mainContainer}>
        <Text style={DetailStyles.textMore} onPress={this._doMore}>More</Text>
        <ProjectMembers />
        <TaskList />
      </View>
    );
  }
}

const DetailStyles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    marginBottom: 10,
    height: 'auto'
  },
  textMore: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
    width: '100%',
    color: 'skyblue',
    paddingRight: 10
  }
});
