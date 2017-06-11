import React from 'react';
import { Text, TextInput, View, Button, Alert, StatusBar, Navi } from 'react-native';
import LoginStyles from '../../../app/css/LoginStyles';

const usernamePlaceholder = 'Username';
const passwordPlaceholder = 'Password';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props, context) {
    super(props, context);
    this._doLogin = this._doLogin.bind(this);
  }

  _doLogin() {
    const { navigate } = this.props.navigation;
    navigate('HomeScreen');
  }
  
  render() {
    return (
      <View style={LoginStyles.mainContainer}>
        <StatusBar hidden />
        <View style={LoginStyles.inputContainer}>
          <Text style={LoginStyles.title}>Welcome!</Text>
        </View>
        <View style={LoginStyles.inputContainer}>
          <TextInput style={LoginStyles.textInput} placeholder={usernamePlaceholder}></TextInput>
          <TextInput style={LoginStyles.textInput} placeholder={passwordPlaceholder}></TextInput>
        </View>
        <View style={LoginStyles.buttonContainer}>
          <Button style={LoginStyles.button} color='skyblue' title='Login' onPress={this._doLogin} />
        </View>
      </View>
    );
  }
}
