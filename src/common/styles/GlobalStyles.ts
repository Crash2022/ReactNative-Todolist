import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    border: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
    },
    input: {
        padding: 20,
        backgroundColor: 'green',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
    }
});