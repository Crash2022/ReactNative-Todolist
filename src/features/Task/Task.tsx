import React, {ChangeEvent, useCallback} from 'react'
import {EditableSpan} from '../../common/components/EditableSpan/EditableSpan'
import {deleteTaskTC, updateTaskTC} from '../../state/tasks-reducer'
import {TaskAPIType, TaskStatuses} from '../../api/todolistsAPI'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectAppStatus} from '../../state/selectors'
import {View, Text, StyleSheet} from 'react-native'
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

    const changeStatusHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = event.currentTarget.checked;
        dispatch(updateTaskTC(todolistId, task.id,
            {status: newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New}))
    }, [todolistId, task.id])

    const changeTaskTitleHandler = useCallback((newInputValue: string) => {
        dispatch(updateTaskTC(todolistId, task.id, {title: newInputValue}))
    }, [todolistId, task.id])

    return (
        // className={task.status === TaskStatuses.Completed ? s.isDoneTask : ''}
        // <View key={v1()}>
        <View style={taskItemStyles.container}>
            {/*<div className={s.taskItem}>*/}
            <View>
                <Checkbox value={task.status === TaskStatuses.Completed}
                          onValueChange={() => changeStatusHandler}
                          // style={[globalStyles.border, mainElements.checkbox]}
                />
                {/*<View>*/}
                {/*    <Checkbox checked={task.status === TaskStatuses.Completed}*/}
                {/*              onChangeText={changeStatusHandler}*/}
                {/*              disabled={status === 'loading'}*/}
                {/*    />*/}
                {/*</View>*/}
                {/*<div className={s.taskText}>*/}
            </View>
            <View>
                <EditableSpan title={task.title}
                              onChangeInput={changeTaskTitleHandler}
                />
            </View>
            {/*<View className={s.deleteButton}>*/}
            <View>
                <MaterialCommunityIcons name="delete-variant" size={24} color="black" onPress={removeTaskHandler}/>
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
    container: {
        // flex: 1,
    },
})