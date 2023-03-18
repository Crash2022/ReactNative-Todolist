import React, {useCallback, useEffect} from 'react'
import {SaveAreaViewWrapper} from '../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper'
import {ScrollView, View, Text, FlatList, Image, ListRenderItem,
    TouchableOpacity, Button, Dimensions, StyleSheet, ActivityIndicator} from 'react-native'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectAppInitialized, selectAppUserEmail, selectAuthIsLoggedIn, selectTodolists} from '../../state/selectors'
import {AddItemForm} from '../../common/components/AddItemForm/AddItemForm'
import {createTodolistTC, getTodolistsTC, TodolistDomainType} from '../../state/todolists-reducer'
import {v1} from 'react-native-uuid/dist/v1'
import {globalStyles} from '../../common/styles/GlobalStyles'
import {todolistsScreenStyles} from './TodolistsScreenStyles'
import {Todolist} from './NestedScreens/Todolist'
import {TodolistItem} from "../../features/Todolist/TodolistItem"
import {initializeAppTC} from '../../state/app-reducer'
import {getTasksTC} from '../../state/tasks-reducer'
import {useAppNavigation} from '../../common/hooks/useAppNavigation'
import {TodolistsProps} from '../../common/types/NavigationTypes'
// import {UserPhoto} from '../../common/assets/images/user-photo.jpg'

export const TodolistsScreen = ({}: TodolistsProps) => {

    const MESSAGE_TODOS_END = 'No todolists...'

    const dispatch = useAppDispatch()
    const navigation = useAppNavigation()

    const isInitialized = useAppSelector(selectAppInitialized)
    const isLoggedIn = useAppSelector(selectAuthIsLoggedIn)
    const userLogin = useAppSelector(selectAppUserEmail)
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
            <TouchableOpacity onPress={() => {navigation.navigate('Todolist')}}>
                <View style={todolistsScreenStyles.todolistList}>
                    {/*<Todolist todolist={item}/>*/}
                    <TodolistItem todolist={item}/>
                </View>
            </TouchableOpacity>
        )
    }

    // редирект на логин, если не залогинились
    // useEffect(() => {
    //     !isLoggedIn && navigation.navigate('Login')
    // }, [isLoggedIn])

    // первая отрисовка
    useEffect(() => {
        dispatch(initializeAppTC())
        dispatch(getTodolistsTC())
    }, [])

    // лоадер, если приложение не инициализировано
    if (!isInitialized) {
        return (
            <ActivityIndicator size="large" style={globalStyles.containerFlexCenter}/>
        )
    }

    return (
        <SaveAreaViewWrapper>
            <View style={todolistsScreenStyles.container}>
                {/*<ScrollView>*/}
                <View style={todolistsScreenStyles.userBlock}>
                    <View style={todolistsScreenStyles.userInfo}>
                        <Text style={todolistsScreenStyles.userNameStyle}>{userLogin}</Text>
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
                        : <View style={todolistsScreenStyles.noTodolists}>
                            <Text style={todolistsScreenStyles.noTodolistsText}>{MESSAGE_TODOS_END}</Text>
                    </View>
                }
                </ScrollView>
            </View>
        </SaveAreaViewWrapper>
    )
}