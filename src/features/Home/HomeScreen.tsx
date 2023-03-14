import {View, Text, Button} from "react-native"
import React from "react"

export const HomeScreen = ({navigation} : any) => {
    return (
        <View>
            <Text>
                Home Page
            </Text>
            <Button title={'Go to Todolists'} onPress={() => navigation.navigate('Todolists')}/>
            <Button title={'Go to Settings'} onPress={() => navigation.navigate('Settings')}/>
        </View>
    )
}