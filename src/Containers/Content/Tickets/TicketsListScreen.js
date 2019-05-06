import React, { Component } from 'react'
import {View, Dimensions, ScrollView, TextInput} from 'react-native'
import TicketsSortButtons from '../../../Components/TicketSortButtons'
import TicketCard from '../../../Components/TicketCard'
import styles from '../../../Styles/styles'
import {Icon} from "react-native-elements";
import Ripple from "react-native-material-ripple";

const { height, width } = Dimensions.get('window');


export default class TicketsListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Tickets',
      headerTitleStyle : styles.headerTitle,
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginVertical: 20}}>
          <Ripple
              rippleCentered={true}
              rippleOpacity={1}
              rippleDuration={200}
              rippleSize={40}>
            <Icon size={30} name='sort-descending' color={'darkslategray'} type={'material-community'} />
          </Ripple>
          <View style={styles.searchBar}>
            <Icon iconStyle={{marginHorizontal: 20}} name={'magnify'} type={'material-community'} color={'darkslategray'}/>
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
          <Ripple
              rippleCentered={true}
              rippleOpacity={1}
              rippleDuration={200}
              rippleSize={40}>
            <Icon size={30} name='plus' color={'darkslategray'} type={'material-community'}/>
          </Ripple>
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
