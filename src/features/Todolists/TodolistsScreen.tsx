import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectTodolists} from '../../state/selectors'
import React, {useCallback, useEffect} from 'react'
import {AddItemForm} from '../../common/components/AddItemForm/AddItemForm'
import {createTodolistTC} from '../../state/todolists-reducer'
import {v1} from 'react-native-uuid/dist/v1'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import {Todolist} from '../Todolist/Todolist'
import {globalStyles} from '../../common/styles/GlobalStyles'
import {MaterialIcons} from "@expo/vector-icons";

type TodolistsScreenProps = {
    demo?: boolean
    navigation: any
}

export const TodolistsScreen: React.FC<TodolistsScreenProps> = ({demo = false, navigation}) => {

    const MESSAGE_TODOS_END = 'No todolists'

    const dispatch = useAppDispatch()
    const todolists = useAppSelector(selectTodolists)

    const addNewTodoList = useCallback((title: string) => {
        dispatch(createTodolistTC({
            id: v1(), title: title, filter: 'all',
            entityStatus: 'idle', addedDate: '', order: 0
        }))
    }, [dispatch])

    return (<View>
            <View>
                {/*<TouchableOpacity>*/}
                    <Button title={'Go to Settings'} onPress={() => navigation.navigate('Settings')}/>
                {/*</TouchableOpacity>*/}
            </View>
            <View style={todolistMainStyles.container}>
                <View style={todolistMainStyles.addTodoBlock}>
                    <View>
                        <Text>Enter todolist title</Text>
                    </View>
                    <View style={[globalStyles.border, globalStyles.input]}>
                        <AddItemForm addItem={addNewTodoList}/>
                    </View>
                </View>
                {
                    todolists.length !== 0 ?
                        <View style={todolistMainStyles.todolistList}>
                            {
                                todolists.map((todo: any) => {
                                    return (
                                        <View key={todo.id}
                                              style={[globalStyles.border, globalStyles.input]}
                                        >
                                            <Todolist
                                                todolist={todo}
                                                demo={demo}
                                            />
                                        </View>
                                    )
                                })
                            }
                        </View>
                        : <Text>{MESSAGE_TODOS_END}</Text>
                }
            </View>
        </View>
    )
}

// styles
const todolistMainStyles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    addTodoBlock: {
        // flex: 1,
    },
    todolistList: {
        // flex: 1,
    },
});