import React, { Component } from 'react'
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class TicketSortButtons extends Component {
   render() {
       return (
           <View style={{flexDirection: 'row', paddingRight: 15}}>
               <Icon iconStyle={{padding: 15}} size={30} name='sort' color={'#535c68'} type='material'/>
               <Icon iconStyle={{padding: 15}} size={30} name='add-circle-outline' color={'#535c68'} type='material'/>
           </View>
       )
   }
};
