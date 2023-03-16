import React, {useCallback} from 'react'
import {deleteTodolistTC, TodolistDomainType} from '../../state/todolists-reducer'
import {Text, TouchableOpacity, View} from 'react-native'
import {todolistItemStyles} from './TodolistItemStyles'
import {todolistStyles} from './TodolistStyles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../state/store'
import {TaskAPIType} from '../../api/todolistsAPI'

type TodolistPropsType = {
    todolist: TodolistDomainType
}

export const TodolistItem: React.FC<TodolistPropsType> = React.memo(({todolist}) => {

    const dispatch = useAppDispatch()
    const tasksObj = useSelector<AppRootStateType, Array<TaskAPIType>>(state => state.tasks[todolist.id])

    const removeTodolistHandler = useCallback(() => {
        dispatch(deleteTodolistTC(todolist.id))
    }, [todolist.id])

    console.log(todolist)

    return (
        <View style={todolistItemStyles.item}>
            <View>
                <Text style={todolistItemStyles.itemTitle}>{todolist.title}</Text>
                <Text>{tasksObj.length} tasks</Text>
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