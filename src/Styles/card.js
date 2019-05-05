import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginVertical: 100,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 8,
        overflow: 'hidden'
    },
    cardImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    cardContent: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardDetails: {
        flexDirection: 'column',
    }
});

export default styles
