import React, { Component } from 'react'
import {Dimensions, Text, View} from 'react-native'
import styles from '../../../Styles/styles'

export default class TicketsListScreen extends Component {
  static navigationOptions = {
    title: 'Tickets',
    headerTitleStyle : styles.headerTitle,
    //headerStyle: { backgroundColor: 'transparent' }
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
