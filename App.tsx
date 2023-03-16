import {View} from 'react-native'
import React from 'react'
import {Main} from './src/app/Main'
import {store} from './src/state/store'
import {Provider} from 'react-redux'
import {appStyles} from './src/common/styles/GlobalStyles'
import {NavigationContainer} from "@react-navigation/native"
import {SafeAreaProvider} from "react-native-safe-area-context"

export const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Provider store={store}>
                    <View style={appStyles.container}>
                        <Main/>
                    </View>
                </Provider>
            </SafeAreaProvider>
        </NavigationContainer>
    )
}