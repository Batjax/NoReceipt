import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../Styles/styles';
import Ripple from 'react-native-material-ripple';


export default class AuthForm extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const { signUpRedirection, loginRedirection, navigation } = this.props;
        console.log(this.props);
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Icon iconStyle={{padding: 10}} name={'account'} type={'material-community'} color={'darkslategray'}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Identifiant'}
                        selectionColor='darkslategray'
                        placeholderTextColor='darkslategray'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({login: text})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon iconStyle={{padding: 10}} name={'lock'} type={'material-community'} color={'darkslategray'}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Mot de passe'}
                        placeholderTextColor='darkslategray'
                        secureTextEntry
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(text) => this.setState({login: text})}
                    />
                </View>
                <Ripple
                    rippleContainerBorderRadius={25}
                    onPress={() => loginRedirection()}
                    style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Connexion</Text>
                    </TouchableOpacity>
                </Ripple>
                <View style={styles.registrationContainer}>
                    <Text style={styles.basicText}>Aucun compte ?</Text>
                    <TouchableOpacity
                        onPress={() => signUpRedirection()}
                        hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
                        <Text style={[styles.basicText, styles.registrationButton]}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
