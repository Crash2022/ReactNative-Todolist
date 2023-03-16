import React from 'react'
import {Main} from './src/app/Main'
import {store} from './src/state/store'
import {Provider} from 'react-redux'
import {NavigationContainer} from "@react-navigation/native"
import {SafeAreaProvider} from "react-native-safe-area-context"
import {appStyles} from './src/common/styles/GlobalStyles'
import {View} from 'react-native'

export const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Provider store={store}>
                    {/*<View style={appStyles.container}>*/}
                        <Main/>
                    {/*</View>*/}
                </Provider>
            </SafeAreaProvider>
        </NavigationContainer>
    )
}