import {Dimensions, StyleSheet} from 'react-native'

// функция отдаёт значения размера экрана
export const {width, height} = Dimensions.get('screen')
export const WIDTH = width
export const HEIGHT = height

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
        justifyContent: 'center',
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
    todolistList: {
        justifyContent: 'center',
        // 10*2 - отнимаем паддинг с двух сторон
        // 5*2 - и ещё отнимаем марджин с двух сторон
        width: (WIDTH - 20 - 10) / 2,
        // height: ((WIDTH - 10 * 2) - (5*2)) / 2,
        height: 100,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f1eb84',
        // backgroundColor: '#3598fd',
        // backgroundColor: '#5772ff',
        // backgroundColor: '#614dff',
        borderRadius: 10,
    },
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