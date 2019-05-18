import React, { Component } from 'react'
import {View, Dimensions, ScrollView, TextInput} from 'react-native'
import TicketsSortButtons from '../../../Components/TicketSortButtons'
import TicketCard from '../../../Components/TicketCard'
import styles from '../../../Styles/styles'
import {Icon, ListItem} from "react-native-elements";
import Ripple from "react-native-material-ripple";

const { height, width } = Dimensions.get('window');

let tickets = [
  {id: 0, title: 'Zappo', city: 'Lyon', date: '19/05/2019', price: '16.50€', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/16/0b/ef/zappo.jpg', logo: {icon: 'silverware', color: 'lightblue'}},
  {id: 1, title: 'Intermarché', city: 'Lyon', date: '08/05/2019', price: '67.39€', image: 'https://www.observatoiredelafranchise.fr/images/enseignes/1537/im-express-tours-petit.jpg', logo: {icon: 'cart', color: 'sandybrown'}},
  {id: 2, title: '405 Bar à bières', city: 'Lyon', date: '28/04/2019', price: '12.20€', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/87/61/19/405-bar-a-bieres.jpg', logo: {icon: 'glass-cocktail', color: 'violet'}},
];

let ticketsList = [];

ticketsList = tickets.map(ticketItem => (
  <TicketCard key={ticketItem.id} details={ticketItem}/>
));

export default class TicketsListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Tickets',
      headerTitleStyle : styles.headerTitle,
    };
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
            {ticketsList}
        </ScrollView>
      </View>
    )
  }
}
