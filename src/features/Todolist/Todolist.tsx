import React, {useCallback, useEffect} from 'react'
import {AddItemForm} from '../../common/components/AddItemForm/AddItemForm'
import {EditableSpan} from '../../common/components/EditableSpan/EditableSpan'
import {createTaskTC, getTasksTC} from '../../state/tasks-reducer'
import {Task} from '../Task/Task'
import {TodolistDomainType, updateTodolistFilterAC,
    deleteTodolistTC, updateTodolistTitleTC} from '../../state/todolists-reducer'
import {TaskAPIType, TaskPriorities, TaskStatuses} from '../../api/todolistsAPI'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {AppRootStateType} from '../../state/store'
import {useSelector} from 'react-redux'
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {v1} from 'react-native-uuid/dist/v1'
import {MaterialCommunityIcons} from "@expo/vector-icons";

type TodolistPropsType = {
    todolist: TodolistDomainType
}

export const Todolist: React.FC<TodolistPropsType> = React.memo(({todolist}) => {

    const MESSAGE_TASKS_END = 'No tasks in this todolist'
    const dispatch = useAppDispatch()
    const tasksObj = useSelector<AppRootStateType, Array<TaskAPIType>>(state => state.tasks[todolist.id])

    /*------------------------------------------------*/

    const addTaskHandler = useCallback((titleInput: string) => {
        dispatch(createTaskTC({
            todoListId: todolist.id, id: v1(), title: titleInput,
            status: TaskStatuses.New, priority: TaskPriorities.Middle,
            description: '', addedDate: '', startDate: '', deadline: '', order: 0
        }))
    }, [todolist.id])

    const changeTodolistTitleHandler = useCallback((newInputValue: string) => {
        dispatch(updateTodolistTitleTC(todolist.id, newInputValue))
    }, [todolist.id])

    const removeTodolistHandler = useCallback(() => {
        dispatch(deleteTodolistTC(todolist.id))
    }, [todolist.id])

    /*------------------------------------------------*/

    let filteredTasks = tasksObj

    if (todolist.filter === 'active') {
        filteredTasks = filteredTasks.filter(f => f.status === TaskStatuses.New)
    }
    if (todolist.filter === 'completed') {
        filteredTasks = filteredTasks.filter(f => f.status === TaskStatuses.Completed)
    }

    // фильтрация тудулиста
    const updateFilterAll = () => {
        dispatch(updateTodolistFilterAC(todolist.id, 'all'))
    }
    const updateFilterCompleted = () => {
        dispatch(updateTodolistFilterAC(todolist.id, 'completed'))
    }
    const updateFilterActive = () => {
        dispatch(updateTodolistFilterAC(todolist.id, 'active'))
    }

    /*------------------------------------------------*/

    useEffect(() => {
        dispatch(getTasksTC(todolist.id))
    }, [])

    /*------------------------------------------------*/

    return (
        <>
            <View style={todolistStyles.addItemBlock}>
                <View style={todolistStyles.editableSpan}>
                    <EditableSpan title={todolist.title} onChangeInput={changeTodolistTitleHandler}/>
                </View>

                <View>
                    <TouchableOpacity style={todolistStyles.deleteIcon}>
                        <MaterialCommunityIcons name="delete-variant"
                                                size={30} color="orange"
                                                onPress={removeTodolistHandler}
                                                // disabled={todolist.entityStatus === 'loading'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={todolistStyles.addItemForm}>
                <AddItemForm addItem={addTaskHandler} disabled={todolist.entityStatus === 'loading'}/>
            </View>

            <View style={todolistStyles.filterButtons}>
                <Button title={'All'} onPress={updateFilterAll}/>
                <Button title={'Completed'} onPress={updateFilterCompleted}/>
                <Button title={'Active'} onPress={updateFilterActive}/>
            </View>

            <View style={todolistStyles.tasksList}>
                {
                    filteredTasks.map((task: any) => {
                        return (
                            <Task key={task.id}
                                  todolistId={todolist.id}
                                  task={task}
                            />
                        )
                    })
                }
            </View>

            {
                tasksObj.length === 0 ? <View style={todolistStyles.taskMessage}><Text>{MESSAGE_TASKS_END}</Text></View> : ''
            }
        </>
    )
})

const todolistStyles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
    },
    addItemBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
    },
    editableSpan: {
        marginBottom: 20,
    },
    deleteIcon: {
        // paddingLeft: 10,
    },
    addItemForm: {
        marginBottom: 10,
    },
    filterButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    tasksList: {

    },
    taskMessage: {
        alignItems: 'center',
    }
})