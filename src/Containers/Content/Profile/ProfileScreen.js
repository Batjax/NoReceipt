import React, {Component} from 'react'
import {Dimensions, View, Text} from 'react-native'
import styles from "../../../Styles/styles";
import ProfilForm from "../../../Components/ProfilForm";


export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profil',
        headerTitleStyle : styles.headerTitle,
        //headerStyle: { backgroundColor: 'transparent' }
    };

    render() {
        return (
        <View style={styles.container}>
            <ProfilForm/>
        </View>
        )
    }
}
