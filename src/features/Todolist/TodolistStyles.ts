import {StyleSheet} from 'react-native'

export const todolistStyles = StyleSheet.create({
    containerOld: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
    },
    container: {
        marginHorizontal: 15,
    },
    addItemBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
    },
    editableSpan: {
        // marginBottom: 20,
    },
    deleteIcon: {
        //
    },
    addItemForm: {
        marginBottom: 10,
        alignItems: 'center',
        // minWidth: '100%',
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