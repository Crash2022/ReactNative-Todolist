import React, {ChangeEvent, useCallback} from 'react'
import {EditableSpan} from '../../common/components/EditableSpan/EditableSpan'
import {deleteTaskTC, updateTaskTC} from '../../state/tasks-reducer'
import {TaskAPIType, TaskStatuses} from '../../api/todolistsAPI'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectAppStatus} from '../../state/selectors'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Checkbox} from 'expo-checkbox'
import {v1} from 'react-native-uuid/dist/v1'
import {MaterialCommunityIcons} from "@expo/vector-icons";

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
        // className={task.status === TaskStatuses.Completed ? s.isDoneTask : ''}
        // <View key={v1()}>
        <View style={task.status === TaskStatuses.Completed ? {...taskItemStyles.task, opacity: 0.5} : {...taskItemStyles.task}}>
            {/*<div className={s.taskItem}>*/}
            <View style={taskItemStyles.title}>
                <Checkbox value={task.status === TaskStatuses.Completed}
                          onValueChange={changeStatusHandler}
                          style={taskItemStyles.checkbox}
                />
                {/*<View>*/}
                {/*    <Checkbox checked={task.status === TaskStatuses.Completed}*/}
                {/*              onChangeText={changeStatusHandler}*/}
                {/*              disabled={status === 'loading'}*/}
                {/*    />*/}
                {/*</View>*/}
                {/*<div className={s.taskText}>*/}
                <EditableSpan title={task.title}
                              onChangeInput={changeTaskTitleHandler}
                />
            </View>
            {/*<View className={s.deleteButton}>*/}
            <View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="delete-variant" size={24} color="black" onPress={removeTaskHandler}/>
                </TouchableOpacity>
                {/*<IconButton onClick={removeTaskHandler}*/}
                {/*            disabled={status === 'loading'}*/}
                {/*            size='small'*/}
                {/*>*/}
                {/*    <Delete/>*/}
                {/*</IconButton>*/}
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
    },
    checkbox: {
        marginLeft: 10,
    }
})