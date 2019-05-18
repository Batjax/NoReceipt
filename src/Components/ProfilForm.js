import React, {Component} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../Styles/styles';
import Ripple from "react-native-material-ripple";

export default class ProfilForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                        onSubmitEditing={() => this.emailInput.focus()}
                        secureTextEntry
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(text) => this.setState({password: text})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon iconStyle={{padding: 10}} name={'at'} type={'material-community'} color={'darkslategray'}/>
                    <TextInput
                        style={styles.inputText}
                        keyboardType={'email-address'}
                        placeholder={'Email'}
                        placeholderTextColor='darkslategray'
                        onSubmitEditing={() => this.birthdayInput.focus()}
                        ref={(input) => this.emailInput = input}
                        onChangeText={(text) => this.setState({email: text})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon iconStyle={{padding: 10}} name={'cake'} type={'material-community'} color={'darkslategray'}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Date de naissance'}
                        placeholderTextColor='darkslategray'
                        ref={(input) => this.birthdayInput = input}
                        onChangeText={(text) => this.setState({birthday: text})}
                    />
                </View>
                <Ripple
                    rippleContainerBorderRadius={25}
                    style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Modifier</Text>
                    </TouchableOpacity>
                </Ripple>
            </View>
        )
    }
}
