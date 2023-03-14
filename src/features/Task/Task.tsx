import React, {useCallback} from 'react'
import {EditableSpan} from '../../common/components/EditableSpan/EditableSpan'
import {deleteTaskTC, updateTaskTC} from '../../state/tasks-reducer'
import {TaskAPIType, TaskStatuses} from '../../api/todolistsAPI'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectAppStatus} from '../../state/selectors'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Checkbox} from 'expo-checkbox'
import {v1} from 'react-native-uuid/dist/v1'
import {MaterialCommunityIcons} from '@expo/vector-icons'

type TaskPropsType = {
    todolistId: string
    task: TaskAPIType
}

export const Task: React.FC<TaskPropsType> = React.memo(({todolistId, task}) => {

    const dispatch = useAppDispatch()
    const status = useAppSelector(selectAppStatus)

    const removeTaskHandler = useCallback(() => {
        dispatch(deleteTaskTC(todolistId, task.id))
    }, [todolistId, task.id])

    const changeStatusHandler = useCallback((checked: boolean) => {
        dispatch(updateTaskTC(todolistId, task.id,
            {status: checked ? TaskStatuses.Completed : TaskStatuses.New}))
    }, [todolistId, task.id])

    const changeTaskTitleHandler = useCallback((newInputValue: string) => {
        dispatch(updateTaskTC(todolistId, task.id, {title: newInputValue}))
    }, [todolistId, task.id])

    return (
        <View style={task.status === TaskStatuses.Completed ? {
            ...taskItemStyles.task,
            opacity: 0.5
        } : {...taskItemStyles.task}}>
            <View style={taskItemStyles.title}>
                <View>
                    <Checkbox value={task.status === TaskStatuses.Completed}
                              onValueChange={changeStatusHandler}
                              style={taskItemStyles.checkbox}
                              // disabled={status === 'loading'}
                    />
                </View>
                <EditableSpan title={task.title}
                              onChangeInput={changeTaskTitleHandler}
                />
            </View>
            <View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="delete-variant" size={24} color="white"
                                            onPress={removeTaskHandler}
                                            // disabled={status === 'loading'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
})

const taskItemStyles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    checkbox: {
        // marginLeft: 10,
    }
})