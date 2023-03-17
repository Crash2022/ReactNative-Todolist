import React, {useCallback} from 'react'
import {deleteTodolistTC, TodolistDomainType} from '../../state/todolists-reducer'
import {Text, View} from 'react-native'
import {todolistItemStyles} from './TodolistItemStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectTasksObj} from '../../state/selectors'

type TodolistPropsType = {
    todolist: TodolistDomainType
}

export const TodolistItem: React.FC<TodolistPropsType> = React.memo(({todolist}) => {

    const dispatch = useAppDispatch()
    const tasksObj = useAppSelector(selectTasksObj)[todolist.id]

    const removeTodolistHandler = useCallback(() => {
        dispatch(deleteTodolistTC(todolist.id))
    }, [todolist.id])

    return (
        <View style={todolistItemStyles.item}>
            <View>
                <Text style={todolistItemStyles.itemTitle}>{todolist.title}</Text>
                <Text>11 tasks</Text>
            </View>
            <View>
                <MaterialCommunityIcons name="delete-variant"
                                        size={30} color="red"
                                        onPress={removeTodolistHandler}
                                        // disabled={todolist.entityStatus === 'loading'}
                />
            </View>
        </View>
    )
})