import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Todolist} from "./Todolist"
import {TodolistsScreen} from '../TodolistsScreen'

export const NestedTodolistsMain = () => {

    const Stack = createNativeStackNavigator<any>()

    return (
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerShown: true}}>
            <Stack.Screen name="TodolistsFromNested" component={TodolistsScreen}/>
            <Stack.Screen name="Todolist" component={Todolist}/>
        </Stack.Navigator>
    )
}