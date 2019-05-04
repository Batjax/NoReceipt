import React, {Component} from 'react'
import {Dimensions, View, Text} from 'react-native'
import styles from "../../../Styles/styles";


export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profil',
        headerTitleStyle : styles.headerTitle,
        //headerStyle: { backgroundColor: 'transparent' }
    };

    render() {
        return (
        <View>
            <Text>zefzef</Text>
        </View>
        )
    }
}
