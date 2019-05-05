import React, { Component } from 'react'
import {View, Dimensions, ScrollView, TextInput} from 'react-native'
import TicketsSortButtons from '../../../Components/TicketSortButtons'
import TicketCard from '../../../Components/TicketCard'
import styles from '../../../Styles/styles'
import {Icon} from "react-native-elements";

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
        <View style={styles.searchBar}>
          <Icon iconStyle={{paddingHorizontal: 20}} name='search' type='material' color={'darkslategray'}/>
          <TextInput
              style={styles.inputText}
              placeholder={'Rechercher un ticket ...'}
              selectionColor='darkslategray'
              placeholderTextColor='darkslategray'
              //onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize='none'
              autoCorrect={false}
              //onChangeText={(text) => this.setState({login: text})}
          />
        </View>
        <ScrollView
            horizontal={true}
            pagingEnabled={true}>
          <TicketCard/>
          <TicketCard/>
          <TicketCard/>
        </ScrollView>
      </View>
    )
  }
}
