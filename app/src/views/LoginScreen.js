import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, StatusBar, Image } from 'react-native';

const usernamePlaceholder = 'Username';
const passwordPlaceholder = 'Password';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props, context) {
    super(props, context);
    this._doLogin = this._doLogin.bind(this);
  }

  _doLogin() {
    const { navigate } = this.props.navigation;
    navigate('ProjectScreen', {navigation: this.props.navigation});
  }

  render() {
    return (
      <View style={LoginStyles.mainContainer}>
        <StatusBar hidden />
        <View style={LoginStyles.inputContainer}>
          <Text style={LoginStyles.title}>Welcome!</Text>
          <Text style={LoginStyles.title}>Come and join us!</Text>
        </View>
        <View style={LoginStyles.inputContainer}>
          <TextInput style={LoginStyles.textInput}
            placeholder={usernamePlaceholder}
            ref={(el) => { this.username = el; }}
            onChangeText={(username) => this.setState({ username })}></TextInput>
          <TextInput style={LoginStyles.textInput}
            secureTextEntry={true}
            placeholder={passwordPlaceholder}
            ref={(el) => { this.password = el; }}
            onChangeText={(password) => this.setState({ password })}></TextInput>
        </View>
        <View style={LoginStyles.buttonContainer}>
          <Button style={LoginStyles.button} color='#707cd2' title='LOG IN' onPress={this._doLogin} />
        </View>
      </View>
    );
  }
}

const LoginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 25,
  },
  textInput: {
    width: '75%',
    height: 50,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 100,
    width: '70%',
  },
});
