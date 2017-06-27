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
    headerStyle: { backgroundColor: '#2f323e' },
  };

  constructor(props, context) {
    super(props, context);

    const listViewDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: listViewDataSource.cloneWithRows(['row 1', 'row 2', 'row 3']),
    };

    this.props = props;
  }
  
  _renderRow(navigation) {
    return (
      <Accordion
        header={
          <View style={ProjectStyles.accordionElement}>
            <Text style={ProjectStyles.textProject}>This is my project's full name!</Text>
          </View>
        }
        content={
          <DetailScreen navigation={navigation} />
        }
        easing="easeInOutElastic"
        underlayColor='white'
      />
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={() => this._renderRow(navigation)}
        style={ ProjectStyles.mainContainer }
      />
    );
  }
}

const ProjectStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#eeeeee',
  },
  accordionElement:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: 'black',
    backgroundColor: 'white',
  },
  textProject: {
    fontSize: 25,
    textAlign: 'left',
    width: '100%',
    padding: 10,
    color: '#337ab7',
  },
});