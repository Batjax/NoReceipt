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
        const { cardTitle } = this.props;
        return (
            <View style={card.cardPadding}>
                <View style={card.cardContainer}>
                    <Image
                        style={card.cardImage}
                        source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg'}}
                    />
                    <Ripple>
                        <View style={card.cardContent}>
                            <View style={card.cardHeader}>
                                <Text style={[styles.titleText, {flex: 1}]}>Restaurant name</Text>
                                <Icon reverse name={'silverware'} type={'material-community'} color={'lightblue'} size={15}/>
                            </View>
                            <Divider style={styles.divider}/>
                            <View style={card.cardDetails}>
                                <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                                    <Icon name={'map-marker'} type={'material-community'}/>
                                    <Text style={[styles.basicText, {paddingHorizontal: 5}]}>City</Text>
                                </View>
                                <View style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
                                    <Icon name={'calendar'} type={'material-community'}/>
                                    <Text style={[styles.basicText, {paddingHorizontal: 5}]}>02/05/2019</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end'}}>
                                    <Text style={[styles.titleText]}>18.53€</Text>
                                </View>
                            </View>
                        </View>
                    </Ripple>
                </View>
            </View>
        )
    }
}
