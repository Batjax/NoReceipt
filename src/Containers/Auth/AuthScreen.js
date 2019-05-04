import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Image, Dimensions } from 'react-native';
import styles from '../../Styles/styles';
import AuthForm from '../../Components/AuthForm';

class AuthScreen extends Component {

  static navigationOptions = {
    headerStyle: { backgroundColor: 'transparent' },
  };

  //Redirection to Registration screen
  _signUpRedirection = () => {
    this.props.navigation.navigate('RegistrationScreen');
  };

  _loginRedirection = () => {
    this.props.navigation.navigate('ContentStack');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{uri: 'http://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png'}}
          />
        </View>
        <AuthForm signUpRedirection={this._signUpRedirection} loginRedirection={this._loginRedirection}/>
      </View>

      
    )
  }
}

export default AuthScreen
