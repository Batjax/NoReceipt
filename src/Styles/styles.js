import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 1,
        //backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    logo: {
        height: 200,
        width: 200,
        //backgroundColor: '#679967',
    },
    formContainer: {
        flex: 1,
        //backgroundColor: 'blue',
    },
    inputContainer: {
        width: 300,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#6ab04c'
    },
    inputText: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        color: '#535c68',
    },
    button: {
        width: 300,
        backgroundColor: '#6ab04c',
        height: 50,
        marginTop: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    },
    buttonText: {
        fontFamily: 'Montserrat-Regular',
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    registrationContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    registrationButton: {
        fontWeight: '600',
        paddingHorizontal: 10,
        color: '#6ab04c',
    },
    basicText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#535c68',
    },
    
});

export default styles