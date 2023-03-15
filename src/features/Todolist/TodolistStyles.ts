import {StyleSheet} from 'react-native'

export const todolistStyles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
    },
    addItemBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
    },
    editableSpan: {
        marginBottom: 20,
    },
    deleteIcon: {
        // paddingLeft: 10,
    },
    addItemForm: {
        marginBottom: 10,
    },
    filterButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    tasksList: {

    },
    taskMessage: {
        alignItems: 'center',
    }
})