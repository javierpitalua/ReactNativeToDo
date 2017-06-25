import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  StatusBar,
  Image
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
    navigate('ProjectScreen');
  }

  render() {
    return (
      <View style={LoginStyles.mainContainer}>
        <StatusBar hidden />
        <View style={LoginStyles.inputContainer}>
          <Image
            style={{ width: '75%', height: 70 }}
            source={require('../../../app/img/genericLogo.png')}
          />
          <Text style={LoginStyles.title}>Come and join us!</Text>
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
    width: '100%',
    paddingTop: 20,
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
    fontSize: 25,
    fontStyle: 'italic'
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
    height: 100,
    width: '70%'
  },
});
