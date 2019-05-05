import React, { Component } from 'react'
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Ripple from 'react-native-material-ripple';

export default class TicketSortButtons extends Component {
   render() {
       return (
           <View style={{flexDirection: 'row', paddingRight: 15}}>
               <Ripple
                   rippleCentered={true}
                   rippleOpacity={1}
                   rippleDuration={200}
                   rippleSize={40}>
                   <Icon iconStyle={{padding: 15}} size={30} name='sort' color={'darkslategray'} type='material'/>
               </Ripple>
               <Ripple
                   rippleCentered={true}
                   rippleOpacity={1}
                   rippleDuration={200}
                   rippleSize={40}>
                   <Icon iconStyle={{padding: 15}} size={30} name='add-circle-outline' color={'darkslategray'} type='material'/>
               </Ripple>
           </View>
       )
   }
};
