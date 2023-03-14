import {View, Text, Button} from "react-native"
import React from "react"

export const SettingsScreen = ({navigation} : any) => {
    return (
        <View>
            <Text>
                Settings Page
            </Text>
            <Button title={'Go to Profile'} onPress={() => navigation.navigate('Profile')}/>
        </View>
    )
}