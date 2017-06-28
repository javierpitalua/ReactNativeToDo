import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native';
import MoreScreen from '../../../app/src/views/MoreScreen';
import ProjectMembers from '../../../app/components/ProjectMembers';
import TaskList from '../../../app/components/TaskList';

export default class DetailScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._doMore = this._doMore.bind(this);
    this.props = props;
  }

  _doMore() {
    const { navigate } = this.props.navigation;
    navigate('MoreScreen');
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={DetailStyles.mainContainer}>
        <Text style={DetailStyles.textMore} onPress={this._doMore}>More</Text>
        <ProjectMembers />
        <TaskList navigation={navigation} />
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
    color: '#337ab7',
    paddingRight: 10
  }
});
