import {View, Text, Button} from "react-native"
import React from "react"

export const ProfileScreen = ({navigation} : any) => {
    return (
        <View>
            <Text>
                Profile Page
            </Text>
            <Button title={'Go to Todolists'} onPress={() => navigation.navigate('Todolists')}/>
        </View>
    )
}