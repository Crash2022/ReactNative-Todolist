import React, {ReactElement, ReactNode} from "react"
import {Keyboard, TouchableWithoutFeedback} from "react-native"
import {globalStyles} from "../../styles/GlobalStyles"

export const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={globalStyles.outline}>
            {children}
        </TouchableWithoutFeedback>
    )
}