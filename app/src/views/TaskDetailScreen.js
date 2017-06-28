import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default class TaskDetailScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#2f323e' },
    headerTintColor: '#ffffff',
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ScrollView style={TaskDetailStyles.mainContainer}>
        <Text style={TaskDetailStyles.titleText}>Title</Text>
        <Text style={TaskDetailStyles.innerText}>My new task 1{'\n'}</Text>
        <Text style={TaskDetailStyles.titleText}>Description</Text>
        <Text style={TaskDetailStyles.innerText}>My new task description. Some longer text to show some wrapping action for this element.{'\n'}</Text>
        <Text style={TaskDetailStyles.titleText}>Start date</Text>
        <Text style={TaskDetailStyles.innerText}>2017/01/01{'\n'}</Text>
        <Text style={TaskDetailStyles.titleText}>Due date</Text>
        <Text style={TaskDetailStyles.innerText}>2017/01/01{'\n'}</Text>
        <Text style={TaskDetailStyles.titleText}>Hours</Text>
        <Text style={TaskDetailStyles.innerText}>5{'\n'}</Text>
        <Text style={TaskDetailStyles.titleText}>Cost</Text>
        <Text style={TaskDetailStyles.innerText}>500.55{'\n'}</Text>
        <Text style={TaskDetailStyles.titleText}>User</Text>
        <Text style={TaskDetailStyles.innerText}>My user name{'\n'}</Text>
        <Text style={TaskDetailStyles.titleText}>Task status</Text>
        <Text style={TaskDetailStyles.innerText}>My task status{'\n'}</Text>
      </ScrollView>
    );
  }
}

const TaskDetailStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee',
    width: '100%',
    padding: 5
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
  },
  innerText: {
    width: '100%',
    textAlign: 'left',
  }
});
