import React, {useCallback, useEffect} from 'react'
import {SaveAreaViewWrapper} from '../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper'
import {ScrollView, View, Text, FlatList, Image, ListRenderItem,
    TouchableOpacity, Button, Dimensions, StyleSheet} from 'react-native'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectTodolists} from '../../state/selectors'
import {AddItemForm} from '../../common/components/AddItemForm/AddItemForm'
import {createTodolistTC, getTodolistsTC, TodolistDomainType} from '../../state/todolists-reducer'
import {v1} from 'react-native-uuid/dist/v1'
import {globalStyles} from '../../common/styles/GlobalStyles'
import {todolistsScreenStyles} from './TodolistsScreenStyles'
import {Todolist} from '../../features/Todolist/Todolist'
import {TodolistItem} from "../../features/Todolist/TodolistItem"
// import {UserPhoto} from '../../common/assets/images/user-photo.jpg'

// функция отдаёт значения размера экрана
export const {width, height} = Dimensions.get('screen')
export const WIDTH = width
export const HEIGHT = height

export const TodolistsScreen = () => {

    const MESSAGE_TODOS_END = 'No todolists'

    const dispatch = useAppDispatch()
    const todolists = useAppSelector(selectTodolists)

    const addNewTodoList = useCallback((title: string) => {
        dispatch(createTodolistTC({
            id: v1(), title: title, filter: 'all',
            entityStatus: 'idle', addedDate: '', order: 0
        }))
    }, [dispatch])

    // map todolists with render function
    const render: ListRenderItem<TodolistDomainType> = ({item}) => {
        return (
            <TouchableOpacity>
                <View style={todolistListStyles.todolistList}>
                    {/*<Todolist todolist={item}/>*/}
                    <TodolistItem todolist={item}/>
                </View>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        dispatch(getTodolistsTC())
    }, [])

    return (
        <SaveAreaViewWrapper>
            <View style={todolistsScreenStyles.container}>
                {/*<ScrollView>*/}
                <View style={todolistsScreenStyles.userBlock}>
                    <View style={todolistsScreenStyles.userInfo}>
                        <Text style={todolistsScreenStyles.userNameStyle}>UserName</Text>
                        {/*<Text>*/}
                        {/*    You have 10 tasks in <Text style={{fontWeight: 'bold'}}>{todolists.length}</Text> todolists*/}
                        {/*</Text>*/}
                    </View>
                    <View>
                        <Image
                            style={todolistsScreenStyles.userPhoto}
                            source={require('../../common/assets/images/user-photo.jpg')}
                        />
                    </View>
                </View>

                <View style={todolistsScreenStyles.taskInfoBlock}>
                    <View>
                        <Text style={todolistsScreenStyles.taskNumber}>7</Text>
                        <Text style={todolistsScreenStyles.taskText}>tasks completed</Text>
                    </View>
                    <View>
                        <Text style={todolistsScreenStyles.taskNumber}>3</Text>
                        <Text style={todolistsScreenStyles.taskText}>tasks have to DO</Text>
                    </View>
                </View>
                <ScrollView>
                <View style={todolistsScreenStyles.addTodoBlock}>
                    <View style={todolistsScreenStyles.addTodoBlockTitle}>
                        <Text style={todolistsScreenStyles.taskText}>Add new todolist</Text>
                    </View>
                    <AddItemForm addItem={addNewTodoList}/>
                </View>

                {
                    todolists.length !== 0 ?
                        <FlatList data={todolists}
                                  keyExtractor={item => item.id}
                                  renderItem={render}
                                  numColumns={2} // количество колонок
                                  columnWrapperStyle={{justifyContent:'space-between'}}

                            // вариант записи с функцией внутри
                            // renderItem={({item}) => {
                            //     return (
                            //         <View style={todolistsScreenStyles.todolistList}>
                            //             <Todolist todolist={item}/>
                            //         </View>
                            //     )
                            // }}
                        />
                        : <Text>{MESSAGE_TODOS_END}</Text>
                }
                </ScrollView>
            </View>
        </SaveAreaViewWrapper>
    )
}

const todolistListStyles = StyleSheet.create({
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
})