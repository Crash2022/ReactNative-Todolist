import {StyleSheet} from 'react-native'

export const addItemFormStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: '100%',
    },
    inputBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 5,
    },
    input: {
        minWidth: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    textLength: {
        textAlign: 'center'
    },
})