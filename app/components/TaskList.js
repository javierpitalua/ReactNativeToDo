import React from 'react';
import { Text, View, ListView, StyleSheet, Image, Alert, TouchableHighlight } from 'react-native';
import MoreScreen from '../../app/src/views/MoreScreen';

export default class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);
    const listViewDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: listViewDataSource.cloneWithRows(['row 1', 'row 2', 'row 3']),
    };

    this._doTaskDetail = this._doTaskDetail.bind(this);
    this.props = props;
  }

  _doTaskDetail(rowData) {
    const { navigate } = this.props.navigation;
    navigate('TaskDetailScreen');
  }

  _renderRow(rowData) {
    return (
      <TouchableHighlight underlayColor='transparent' onPress={() => this._doTaskDetail(rowData)}>
        <Text style={DetailStyles.textRow}>Project's task long test name!</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={DetailStyles.mainStyles}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
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
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
});
