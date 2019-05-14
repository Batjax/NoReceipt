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
                <View style={styles.inputContainer}>
                    <Icon iconStyle={{padding: 10}} name={'at'} type={'material-community'} color={'darkslategray'}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Email'}
                        placeholderTextColor='darkslategray'
                        onChangeText={(text) => this.setState({login: text})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon iconStyle={{padding: 10}} name={'cake'} type={'material-community'} color={'darkslategray'}/>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Date de naissance'}
                        placeholderTextColor='darkslategray'
                        onChangeText={(text) => this.setState({login: text})}
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