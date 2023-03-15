import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFlexBetween: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerFlexEvenly: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    border: {
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: 'black',
        borderRadius: 10,
        padding: 20,
    },
});