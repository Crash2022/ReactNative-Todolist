import {View, Text, Button} from "react-native"
import React from "react"
import {SaveAreaViewWrapper} from "../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper"
import {globalStyles} from "../../common/styles/GlobalStyles"
import {SettingsProps} from "../../common/types/NavigationTypes"

export const SettingsScreen = ({navigation}: SettingsProps) => {
    return (
        <SaveAreaViewWrapper>
            <View style={globalStyles.container}>
                <Text>
                    Settings Page
                </Text>
                <Button title={'Go Profile'} onPress={() => navigation.navigate('Profile')}/>
            </View>
        </SaveAreaViewWrapper>
    )
}