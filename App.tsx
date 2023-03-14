import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native'
import React, {ReactElement, ReactNode} from 'react'
import {Main} from './src/app/Main'
import {store} from './src/state/store'
import {Provider} from 'react-redux'

// App
export default function App() {
    return (
        <Provider store={store}>
            <View style={appStyles.container}>
                <Main/>
            </View>
        </Provider>
    )
}

// HideKeyboard
const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}

// styles
const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f4ef',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});