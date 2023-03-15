import {StyleSheet} from 'react-native'

export const taskStyles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    checkbox: {
        // marginLeft: 10,
    }
})