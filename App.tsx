import React from 'react'
import {store} from './src/state/store'
import {Provider} from 'react-redux'
import {NavigationContainer} from "@react-navigation/native"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {Main} from './src/app/Main'

export default function App() {
    return (
        <NavigationContainer>
           <SafeAreaProvider>
                <Provider store={store}>
                        <Main/>
                </Provider>
            </SafeAreaProvider>
        </NavigationContainer>
    )
}