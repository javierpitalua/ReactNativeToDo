import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class TaskDetailScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#2f323e' },
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
        <Text style={TaskDetailStyles.titleText}>Project name</Text>
        <Text style={TaskDetailStyles.innerText}>My project name{"\n"}</Text>
        <Text style={TaskDetailStyles.titleText}>Project description</Text>
        <Text style={TaskDetailStyles.innerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et bibendum magna. Proin vehicula justo nisl, at convallis libero egestas id. Quisque ac quam vitae urna luctus interdum tempus in turpis. Phasellus scelerisque ut lectus et vulputate. Sed tincidunt, dui non tempus lobortis, libero orci egestas dolor, et dignissim purus est convallis turpis. Fusce dapibus commodo malesuada. Nunc hendrerit tempor erat, sit amet pellentesque arcu consequat id. Proin feugiat, ipsum a congue vestibulum, augue tortor mollis ligula, sit amet ornare sem purus a erat. Integer vitae massa enim. Sed finibus lacinia lacus in fermentum. Nulla nec leo eu sem sodales sagittis eu ac risus. Nullam at orci ut tortor commodo fringilla vitae id dui. Nulla velit lectus, viverra vel est nec, fringilla accumsan eros. Sed interdum ullamcorper enim, ac pulvinar lacus sagittis non.{"\n"}</Text>
        <Text style={TaskDetailStyles.titleText}>Notes</Text>
        <Text style={TaskDetailStyles.innerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et bibendum magna. Proin vehicula justo nisl, at convallis libero egestas id. Quisque ac quam vitae urna luctus interdum tempus in turpis. Phasellus scelerisque ut lectus et vulputate. Sed tincidunt, dui non tempus lobortis, libero orci egestas dolor, et dignissim purus est convallis turpis. Fusce dapibus commodo malesuada. Nunc hendrerit tempor erat, sit amet pellentesque arcu consequat id. Proin feugiat, ipsum a congue vestibulum, augue tortor mollis ligula, sit amet ornare sem purus a erat. Integer vitae massa enim. Sed finibus lacinia lacus in fermentum. Nulla nec leo eu sem sodales sagittis eu ac risus. Nullam at orci ut tortor commodo fringilla vitae id dui. Nulla velit lectus, viverra vel est nec, fringilla accumsan eros. Sed interdum ullamcorper enim, ac pulvinar lacus sagittis non.</Text>
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
    textAlign: 'left',
  },
  innerText: {
    fontSize: 40,
    width: '100%',
    textAlign: 'left',
  }
});
