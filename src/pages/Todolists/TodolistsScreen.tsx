import React, {useCallback, useEffect} from 'react'
import {SaveAreaViewWrapper} from '../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper'
import {ScrollView, View, Text, StyleSheet, FlatList, TouchableOpacity, Button, ListRenderItem} from 'react-native'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectTodolists} from '../../state/selectors'
import {AddItemForm} from '../../common/components/AddItemForm/AddItemForm'
import {createTodolistTC, getTodolistsTC, TodolistDomainType} from '../../state/todolists-reducer'
import {v1} from 'react-native-uuid/dist/v1'
import {Todolist} from '../../features/Todolist/Todolist'
import {globalStyles} from '../../common/styles/GlobalStyles'
import {todolistsScreenStyles} from './TodolistsScreenStyles';

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

    // map todolists
    const render: ListRenderItem<TodolistDomainType> = ({item}) => {
        return (
            <View style={todolistsScreenStyles.todolistList}>
                <Todolist todolist={item}/>
            </View>
        )
    }

    useEffect(() => {
        dispatch(getTodolistsTC())
    }, [])

    return (
        <SaveAreaViewWrapper>
            {/*<ScrollView>*/}
            <View style={globalStyles.containerFlexBetween}>
                {/*<View>*/}
                {/*    /!*<TouchableOpacity>*!/*/}
                {/*    <Button title={'Go to Settings'} onPress={() => navigation.navigate('Settings')}/>*/}
                {/*    /!*</TouchableOpacity>*!/*/}
                {/*</View>*/}
                <View style={todolistsScreenStyles.addTodoBlock}>
                    <View style={todolistsScreenStyles.addTodoBlockTitle}>
                        <Text style={todolistsScreenStyles.addTodoBlockText}>Enter todolist title</Text>
                    </View>
                    <AddItemForm addItem={addNewTodoList}/>
                </View>
                {
                    todolists.length !== 0 ?
                        // <ScrollView>
                        //     {
                        //         todolists.map((todo: any) => {
                        //             return (
                        //                 <View key={todo.id}
                        //                       style={todolistMainStyles.todolistList}
                        //                 >
                        //                     <Todolist todolist={todo}/>
                        //                 </View>
                        //             )
                        //         })
                        //     }
                        // </ScrollView>
                        // : <Text>{MESSAGE_TODOS_END}</Text>

                        <FlatList data={todolists}
                                  keyExtractor={item => item.id}
                                  renderItem={render}
                                  // numColumns={2} // количество колонок
                                  // columnWrapperStyle={{justifyContent: 'center'}

                                  // вариант записи с функцией внутри
                                  // renderItem={({item}) => {
                                  //     return (
                                  //         <View style={todolistMainStyles.todolistList}>
                                  //             <Todolist todolist={item}/>
                                  //         </View>
                                  //     )
                                  // }}
                        />
                        : <Text>{MESSAGE_TODOS_END}</Text>

                }
            </View>
            {/*</ScrollView>*/}
        </SaveAreaViewWrapper>
    )
}