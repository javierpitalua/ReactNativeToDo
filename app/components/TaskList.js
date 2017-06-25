import React from 'react';
import { Text, View, ListView, StyleSheet, Image } from 'react-native';
import MoreScreen from '../../app/src/views/MoreScreen';

export default class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);
    const listViewDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: listViewDataSource.cloneWithRows(['row 1', 'row 2', 'row 3']),
    };
    this._doTaskDetail = this._doTaskDetail.bind(this);
  }

  _doTaskDetail() {
    // const { navigate } = this.props.navigation;
    // navigate('MoreScreen');
  }

  _renderRow() {
    return (
      <Text style={DetailStyles.textRow} onPress={this._doTaskDetail}>Project's task long test name!</Text>
    );
  }

  render() {
    return (
      <View style={DetailStyles.mainStyles}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    );
  }
}

const DetailStyles = StyleSheet.create({
  mainStyles: {
    width: '100%',
    marginTop: 10,
    paddingTop: 10,
  },
  textRow: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 5
  }
});
