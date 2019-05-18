import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Divider, Icon } from 'react-native-elements';
import Ripple from "react-native-material-ripple";

import styles from '../Styles/styles'
import card from '../Styles/card'

export default class TicketCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { details } = this.props;
        console.log(details.logo);
        return (
            <View style={card.cardPadding}>
                <View style={card.cardContainer}>
                    <Image
                        style={card.cardImage}
                        source={{uri: details.image}}
                    />
                    <Ripple>
                        <View style={card.cardContent}>
                            <View style={card.cardHeader}>
                                <Text style={[styles.titleText, {flex: 1}]}>{details.title}</Text>
                                <Icon reverse name={details.logo.icon} type={'material-community'} color={details.logo.color} size={15}/>
                            </View>
                            <Divider style={styles.divider}/>
                            <View style={card.cardDetails}>
                                <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                                    <Icon name={'map-marker'} type={'material-community'}/>
                                    <Text style={[styles.basicText, {paddingHorizontal: 5}]}>{details.city}</Text>
                                </View>
                                <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                                    <Icon name={'calendar'} type={'material-community'}/>
                                    <Text style={[styles.basicText, {paddingHorizontal: 5}]}>{details.date}</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end'}}>
                                    <Text style={[styles.titleText]}>{details.price}</Text>
                                </View>
                            </View>
                        </View>
                    </Ripple>
                </View>
            </View>
        )
    }
}
