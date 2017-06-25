import React from 'react';
import { Text, View, ListView, StyleSheet } from 'react-native';
import HeaderTitle from '../../../app/components/HeaderTitle';
import HeaderLeft from '../../../app/components/HeaderLeft';
import HeaderRight from '../../../app/components/HeaderRight';
import DetailScreen from '../../../app/src/views/DetailScreen';
var Accordion = require('react-native-accordion');

export default class ProjectScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle />,
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />,
  };

  constructor(props, context) {
    super(props, context);
    const listViewDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: listViewDataSource.cloneWithRows(['row 1', 'row 2', 'row 3']),
    };
  }

  _renderRow() {
    return (
      <Accordion
        header={
          <View style={ProjectStyles.mainContainer}>
            <Text style={ProjectStyles.textProject}>This is my project's full name!</Text>
          </View>
        }
        content={
          <DetailScreen />
        }
        easing="easeInOutElastic"
        underlayColor='#fff'
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}

const ProjectStyles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white'
  },
  textProject: {
    fontSize: 25,
    textAlign: 'left',
    width: '100%',
    padding: 10,
    color: 'skyblue'
  },
});