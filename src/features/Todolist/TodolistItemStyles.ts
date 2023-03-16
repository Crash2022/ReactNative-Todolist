import {StyleSheet} from "react-native"

export const todolistItemStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // gap: 10,
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: 120,
        wordBreak: 'break-word'
    },
})