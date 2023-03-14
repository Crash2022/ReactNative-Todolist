import React, {useEffect} from 'react';
import {getTodolistsTC} from '../state/todolists-reducer';
// import {ErrorSnackBar} from '../common/components/ErrorSnackBar/ErrorSnackBar'
import {initializeAppTC} from '../state/app-reducer'
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
// import {Login} from '../features/Login/Login'
// import {AppNavBar} from '../common/components/AppNavBar/AppNavBar'
import {selectAppInitialized, selectAuthIsLoggedIn, selectTodolists} from '../state/selectors'
import {useAppSelector} from '../common/hooks/useAppSelector'
import {useAppDispatch} from '../common/hooks/useAppDispatch'
import {PATH} from '../api/path'
// import {Error404} from '../common/components/Error404/Error404'
// import {TodolistMain} from '../features/Todolist/TodolistMain'
// import {PrivateRoutes} from '../common/components/PrivateRoutes/PrivateRoutes'
import {View, Text, StyleSheet} from 'react-native'
import {TodolistsScreen} from '../features/Todolists/TodolistsScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from "@react-navigation/native"
import {ProfileScreen} from '../features/Profile/ProfileScreen'
import {SettingsScreen} from "../features/Settings/SettingsScreen"
import {HomeScreen} from "../features/Home/HomeScreen";

/*------------------------------------------------*/

// типизация для локальных тудулистов
// export type TasksListType = {
//     [todolistId: string]: Array<TaskType>
// }

// export type TodoListType = {
//     id: string
//     title: string
//     filter: FilterType
// }
//
// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

/*------------------------------------------------*/

// памятка по типизации для тудулистов с сервера
// startState: Array<TodolistDomainType> = ([
//     {id: todolistId1, title: 'Выучить', filter: 'all', addedDate: '', order: 0},
//     {id: todolistId2, title: 'Купить', filter: 'all', addedDate: '', order: 0}
// ])
//
// type TasksListType = {
//     [todolistId: string]: Array<TaskAPIType>
// }
//
// startState: TasksListType = ({
//     'todolistId1': [
//         {todoListId: 'todolistId1', id: v1(), title: 'HTML&CSS',
//             status: TaskStatuses.Completed, priority: TaskPriorities.Middle,
//             description: '', addedDate: '', startDate: '', deadline: '', order: 0},
//         {todoListId: 'todolistId1', id: v1(), title: 'React',
//             status: TaskStatuses.New, priority: TaskPriorities.Hi,
//             description: '', addedDate: '', startDate: '', deadline: '', order: 0}
//     ],
//     'todolistId2': [
//         {todoListId: 'todolistId2', id: v1(), title: 'Notebook',
//             status: TaskStatuses.New, priority: TaskPriorities.Low,
//             description: '', addedDate: '', startDate: '', deadline: '', order: 0},
//         {todoListId: 'todolistId2', id: v1(), title: 'New Bike',
//             status: TaskStatuses.Completed, priority: TaskPriorities.Later,
//             description: '', addedDate: '', startDate: '', deadline: '', order: 0}
//     ]
// })

/*------------------------------------------------*/

type AppWithReduxType = {
    demo?: boolean
}

const Stack = createNativeStackNavigator()

export const Main: React.FC<AppWithReduxType> = React.memo(({demo = false}) => {

    // const navigate = useNavigate()
    const dispatch = useAppDispatch()
    // const isLoggedIn = useAppSelector(selectAuthIsLoggedIn)
    // const isInitialized = useAppSelector(selectAppInitialized)
    // const todolists = useAppSelector(selectTodolists)

    /*------------------------------------------------*/

    useEffect(() => {
        dispatch(getTodolistsTC());
    }, [])

    // useEffect(() => {
    //     if (demo || !isLoggedIn) {
    //         return;
    //     }
    //     // dispatch(getTodolistsTC());
    //     if (!todolists.length) {
    //         dispatch(getTodolistsTC());
    //     }
    // }, [isLoggedIn])

    // инициализация приложения
    // useEffect(() => {
    //     dispatch(initializeAppTC());
    // }, [])

    // редирект на логин, если не залогинились
    // useEffect(() => {
    //     !isLoggedIn && navigate(PATH.COMMON.LOGIN);
    // }, [isLoggedIn])


    // лоадер, если приложение не инициализировано
    // if (!isInitialized) {
    //     return (
    //         <div className="circularProgress">
    //             {/*<CircularProgress/>*/}
    //             Загрузка
    //         </div>
    //     )
    // }

    /*------------------------------------------------*/

    return (
        <NavigationContainer>
            {/*// <View className='App'>*/}
            {/*// <View style={{flex: 1}}>*/}
            {/*<View className={s.appNavBar}>*/}
            {/*<AppNavBar/>*/}
            {/*<ErrorSnackBar/>*/}
            {/*</View>*/}

            {/*<View style={{flex: 1}}>*/}
            {/*<Routes>*/}
            {/*<Route element={<PrivateRoutes/>}>*/}
            {/*    <Route path={'/'} element={<Navigate to={PATH.APP.TODOLISTS}/>}/>*/}
            {/*    <Route path={PATH.APP.TODOLISTS} element={<TodolistMain demo={demo}/>}/>*/}
            <Stack.Navigator>
                <Stack.Screen name="/" component={HomeScreen} />
                <Stack.Screen name="Todolists" component={TodolistsScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
                <Stack.Screen name="Settings" component={SettingsScreen}/>
            </Stack.Navigator>
            {/*<TodolistMain demo={demo}/>*/}

            {/*</Route>*/}

            {/*<Route path={PATH.COMMON.LOGIN} element={<Login/>}/>*/}
            {/*<Route path={PATH.COMMON.ERROR404} element={<Error404/>}/>*/}
            {/*<Route path={'*'} element={<Navigate to={PATH.COMMON.ERROR404}/>}/>*/}
            {/*</Routes>*/}
            {/*</View>*/}
            {/*// </View>*/}
        </NavigationContainer>
    )
})

// styles
const mainStyles = StyleSheet.create({
    container: {
        // flex: 1,
    },
});