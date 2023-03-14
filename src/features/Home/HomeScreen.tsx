import {View, Text, Button} from "react-native"
import React from "react"
import {SaveAreaViewWrapper} from "../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper"
import {globalStyles} from "../../common/styles/GlobalStyles"
import {HomeProps} from "../../common/types/NavigationTypes"

export const HomeScreen = ({navigation}: HomeProps) => {
    return (
        <SaveAreaViewWrapper>
            <View style={globalStyles.container}>
                <Text>
                    Home Page
                </Text>
                <Button title={'Go to Todolists'} onPress={() => navigation.navigate('Todolists')}/>
                <Button title={'Go to Settings'} onPress={() => navigation.navigate('Settings')}/>
            </View>
        </SaveAreaViewWrapper>
    )
}