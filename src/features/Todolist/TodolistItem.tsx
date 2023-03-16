import React, {useCallback} from 'react'
import {deleteTodolistTC, TodolistDomainType} from '../../state/todolists-reducer'
import {Button, Text, TouchableOpacity, View} from 'react-native'
import {todolistItemStyles} from "./TodolistItemStyles"
import {globalStyles} from "../../common/styles/GlobalStyles"
import {todolistStyles} from "./TodolistStyles"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {useAppDispatch} from "../../common/hooks/useAppDispatch"

type TodolistPropsType = {
    todolist: TodolistDomainType
}

export const TodolistItem: React.FC<TodolistPropsType> = React.memo(({todolist}) => {

    const dispatch = useAppDispatch()

    const removeTodolistHandler = useCallback(() => {
        dispatch(deleteTodolistTC(todolist.id))
    }, [todolist.id])

    return (
        <View style={[globalStyles.border, todolistItemStyles.item]}>
            <View>
                <Text>Todolist Title</Text>
                <Text>10 tasks</Text>
            </View>
            <View>
                {/*Delete Icon*/}
                <TouchableOpacity style={todolistStyles.deleteIcon}>
                    <MaterialCommunityIcons name="delete-variant"
                                            size={30} color="orange"
                                            onPress={removeTodolistHandler}
                        // disabled={todolist.entityStatus === 'loading'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
})