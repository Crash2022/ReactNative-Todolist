import React, {useCallback, useEffect} from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Todolist} from "./Todolist"

export const NestedTodolistsMain = () => {

    const Stack = createNativeStackNavigator<NestedTodolistsMain>()

    return (
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerShown: true}}>
            <Stack.Screen name="Todolist" component={Todolist}/>
        </Stack.Navigator>
    )
}