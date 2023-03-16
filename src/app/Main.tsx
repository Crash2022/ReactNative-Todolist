import React from 'react'
import {PATH} from '../api/path'
// import {ErrorSnackBar} from '../common/components/ErrorSnackBar/ErrorSnackBar'
// import {Login} from '../features/Login.tsx/Login'
// import {Error404} from '../common/components/Error404/Error404'
// import {PrivateRoutes} from '../common/components/PrivateRoutes/PrivateRoutes'
import {HomeScreen} from "../pages/Home/HomeScreen"
import {TodolistsScreen} from '../pages/Todolists/TodolistsScreen'
import {ProfileScreen} from '../pages/Profile/ProfileScreen'
import {SettingsScreen} from "../pages/Settings/SettingsScreen"
import {RootAuth} from "../features/Auth/RootAuth"
import {LoginFull} from '../features/Auth/LoginFull'
import {SafeAreaProvider} from "react-native-safe-area-context"
import {NavigationContainer} from "@react-navigation/native"
import {RootStackParamList} from "../common/types/NavigationTypes"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createDrawerNavigator} from "@react-navigation/drawer"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'

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

// const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<RootStackParamList>()
// const Drawer = createDrawerNavigator()

export const Main = React.memo(() => {

    // const navigate = useNavigate()
    // const dispatch = useAppDispatch()
    // const isLoggedIn = useAppSelector(selectAuthIsLoggedIn)
    // const isInitialized = useAppSelector(selectAppInitialized)
    // const todolists = useAppSelector(selectTodolists)

    /*------------------------------------------------*/

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
            {/*<View style={{flex: 1}}>*/}
            {/*<Routes>*/}
            {/*<Route element={<PrivateRoutes/>}>*/}
            {/*    <Route path={'/'} element={<Navigate to={PATH.APP.TODOLISTS}/>}/>*/}
            {/*    <Route path={PATH.APP.TODOLISTS} element={<TodolistMain demo={demo}/>}/>*/}
            <SafeAreaProvider>
                <Tab.Navigator>
                    {/*<Tab.Screen name="Auth"*/}
                    {/*              component={RootAuth}*/}
                    {/*              options={{*/}
                    {/*                  tabBarLabel: 'Auth',*/}
                    {/*                  tabBarIcon: ({ color, size }) => (*/}
                    {/*                      <MaterialCommunityIcons name="home" color={color} size={size}/>*/}
                    {/*                  ),*/}
                    {/*              }}*/}
                    {/*/>*/}
                    <Tab.Screen name="Home"
                                  component={HomeScreen}
                                  options={{
                                      tabBarLabel: 'Home',
                                      tabBarIcon: ({ color, size }) => (
                                          <MaterialCommunityIcons name="home" color={color} size={size}/>
                                      ),
                                  }}
                    />
                    <Tab.Screen name="Todolists"
                                  component={TodolistsScreen}
                                  options={{
                                      tabBarLabel: 'Todolists',
                                      tabBarIcon: ({ color, size }) => (
                                          <FontAwesome name="list-alt" size={size} color={color}/>
                                      ),
                                  }}
                    />
                    <Tab.Screen name="Profile"
                                  component={ProfileScreen}
                                  // component={LoginFull}
                                  options={{
                                      tabBarLabel: 'Profile',
                                      tabBarIcon: ({ color, size }) => (
                                          <FontAwesome name="user-circle-o" size={size} color={color}/>
                                      ),
                                  }}
                    />
                    <Tab.Screen name="Settings"
                                  component={SettingsScreen}
                                  options={{
                                      tabBarLabel: 'Settings',
                                      tabBarIcon: ({ color, size }) => (
                                          <Ionicons name="settings-sharp" size={size} color={color}/>
                                      ),
                                  }}
                    />
                </Tab.Navigator>
            </SafeAreaProvider>
            {/*<TodolistMain demo={demo}/>*/}
            {/*</Route>*/}

            {/*<Route path={PATH.COMMON.LOGIN} element={<Login.tsx/>}/>*/}
            {/*<Route path={PATH.COMMON.ERROR404} element={<Error404/>}/>*/}
            {/*<Route path={'*'} element={<Navigate to={PATH.COMMON.ERROR404}/>}/>*/}
            {/*</Routes>*/}
            {/*</View>*/}
            {/*// </View>*/}
        </NavigationContainer>
    )
})