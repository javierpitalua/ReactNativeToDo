import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Welcome!</Text>
        <TextInput style={{width:'75%'}}>Username</TextInput>
        <TextInput style={{width:'75%'}}>Password</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
