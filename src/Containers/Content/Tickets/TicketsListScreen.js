import React, { Component } from 'react'
import {Text, View, Dimensions} from 'react-native'
import TicketsSortButtons from '../../../Components/TicketSortButtons'
import TicketCard from '../../../Components/TicketCard'
import styles from '../../../Styles/styles'

const { height, width } = Dimensions.get('window');


export default class TicketsListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Tickets',
      headerTitleStyle : styles.headerTitle,
      headerRight: (
         <TicketsSortButtons/>
      ),
      /*headerLeft: (
          <Icon iconStyle={{padding: 10}} name='person' type='material'/>
      )*/
      //headerStyle: { backgroundColor: 'transparent' }
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TicketCard/>
      </View>
    )
  }
}
