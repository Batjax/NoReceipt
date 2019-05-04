import React, { Component } from 'react'
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';


export default class RegistrationScreen extends Component {
  static navigationOptions = {
    headerTitleStyle : {width : Dimensions.get('window').width},
    headerStyle: { backgroundColor: 'transparent' }
  };

  render() {
    return (
      <View>
        <Text>RegistrationScreen</Text>
      </View>
    )
  }
}
