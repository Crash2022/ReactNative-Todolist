import React, {useCallback, useEffect} from 'react'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectTodolists} from '../../state/selectors'
import {AddItemForm} from '../../common/components/AddItemForm/AddItemForm'
import {createTodolistTC, getTodolistsTC} from '../../state/todolists-reducer'
import {v1} from 'react-native-uuid/dist/v1'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {Todolist} from '../../features/Todolist/Todolist'
import {globalStyles} from '../../common/styles/GlobalStyles'
import {MaterialIcons} from '@expo/vector-icons'
import {SaveAreaViewWrapper} from '../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper'
import {TodolistsProps} from '../../common/types/NavigationTypes'

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

    // useEffect(() => {
    //     dispatch(getTodolistsTC());
    // }, [])

    return (
        <SaveAreaViewWrapper>
            <View style={globalStyles.containerFlexBetween}>
                {/*<View>*/}
                {/*    /!*<TouchableOpacity>*!/*/}
                {/*    <Button title={'Go to Settings'} onPress={() => navigation.navigate('Settings')}/>*/}
                {/*    /!*</TouchableOpacity>*!/*/}
                {/*</View>*/}
                <View style={todolistMainStyles.addTodoBlock}>
                    <View style={todolistMainStyles.addTodoBlockTitle}>
                        <Text style={todolistMainStyles.addTodoBlockText}>Enter todolist title</Text>
                    </View>
                    <AddItemForm addItem={addNewTodoList}/>
                </View>
                {
                    todolists.length !== 0 ?
                        <View>
                            {
                                todolists.map((todo: any) => {
                                    return (
                                        <View key={todo.id}
                                              style={todolistMainStyles.todolistList}
                                        >
                                            <Todolist todolist={todo}/>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        : <Text>{MESSAGE_TODOS_END}</Text>
                }
            </View>
        </SaveAreaViewWrapper>
    )
}

// styles
const todolistMainStyles = StyleSheet.create({
    container: {
        //
    },
    addTodoBlock: {
        alignItems: 'center',
        marginBottom: 30,
    },
    addTodoBlockTitle: {
        marginBottom: 10,
    },
    addTodoBlockText: {
        fontSize: 20,
    },
    todolistList: {
        marginBottom: 10,
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#8c7851',
    },
});