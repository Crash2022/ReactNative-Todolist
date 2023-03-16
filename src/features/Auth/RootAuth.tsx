import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {Registration} from "./Registration"
import {Login} from "./Login"

const Stack = createStackNavigator()

export const RootAuth = () => {
    return (
        <Stack.Navigator>
            {/*<Stack.Screen name="Login" component={Login}/>*/}
            {/*<Stack.Screen name="Registration" component={Registration}/>*/}
        </Stack.Navigator>
    )
}