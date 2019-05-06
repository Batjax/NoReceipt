import { Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
    cardPadding: {
        width: width,
        paddingHorizontal: 20
    },
    cardContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 40,
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
