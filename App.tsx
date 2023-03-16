import {View} from 'react-native'
import React from 'react'
import {Main} from './src/app/Main'
import {store} from './src/state/store'
import {Provider} from 'react-redux'
import {appStyles} from './src/common/styles/GlobalStyles'

export const App = () =>  {
    return (
        <Provider store={store}>
            <View style={appStyles.container}>
                <Main/>
            </View>
        </Provider>
    )
}