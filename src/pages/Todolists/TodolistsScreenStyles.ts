import {StyleSheet} from 'react-native'

export const todolistsScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#242132',
    },
    userBlock: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    userInfo: {
        gap: 10,
    },
    userNameStyle: {
        fontSize: 24,
        color: 'white'
    },
    userPhoto: {
        width: 150,
        height: 150,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
    },
    taskInfoBlock: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40,
        paddingVertical: 10,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    taskNumber: {
        fontSize: 30,
        color: 'white'
    },
    taskText: {
        color: 'white'
    },
    addTodoBlock: {
        alignItems: 'center',
        marginBottom: 30,
    },
    addTodoBlockTitle: {
        marginVertical: 10,
    },
    addTodoBlockText: {
        fontSize: 20,
    },
    // todolistList: {
    //     height: 100,
    //     // width: WIDTH / 2,
    //     borderRadius: 10,
    //     padding: 10,
    //     marginVertical: 5,
    //     backgroundColor: '#f1eb84',
    //     justifyContent: 'center'
    // },
    noTodolists: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noTodolistsText: {
        color: 'white',
        fontSize: 30,
    },
})