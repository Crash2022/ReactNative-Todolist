import React from "react"
import {View, Text} from "react-native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from "./_Login"
import {Registration} from "./Registration";

const Stack = createStackNavigator()

export const RootAuth = () => {
    return (
        <Stack.Navigator>
            {/*<Stack.Screen name="Login.tsx" component={Login.tsx}/>*/}
            <Stack.Screen name="Registration" component={Registration}/>
        </Stack.Navigator>
    )
}