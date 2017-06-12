import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  StatusBar
} from 'react-native';

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
          <Button style={LoginStyles.button} color='skyblue' title='LOG IN' onPress={this._doLogin} />
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
    width: '100%'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 50
  },
  textInput: {
    width: '75%',
    height: 50
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    height: 50
  },
});
