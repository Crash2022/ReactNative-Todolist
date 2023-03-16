import {StyleSheet} from "react-native"

export const todolistItemStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: 80,
        wordBreak: 'break-word'
    },
})