import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context"

type SaveAreaViewWrapperProps = {
    children: JSX.Element
}

export const SaveAreaViewWrapper: React.FC<SaveAreaViewWrapperProps> = ({children}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {children}
        </SafeAreaView>
    )
}