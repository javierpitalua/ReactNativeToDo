import React from 'react';
import { Text, TextInput, View, Button, Alert, ListView } from 'react-native';
var Accordion = require('react-native-accordion');
import HeaderTitle from '../../../app/components/HeaderTitle';
import HeaderLeft from '../../../app/components/HeaderLeft';
import HeaderRight from '../../../app/components/HeaderRight';

export default class MoreScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle />,
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />,
  };

  constructor() {
    super();
    const listViewDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource:listViewDataSource.cloneWithRows(['row 1', 'row 2']),
    };
  }

  _renderRow() {
    var header = (
      <View>
        <Text>Click to Expand</Text>
      </View>
    );

    var content = (
      <View>
        <Text>This content is hidden in the accordion</Text>
      </View>
    );

    return (
      <Accordion
        header={header}
        content={content}
        easing="easeOutCubic"
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
