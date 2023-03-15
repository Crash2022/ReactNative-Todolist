import React from "react"
import {View, Text, Button} from "react-native"
import {RootAuthScreenProps} from "../../common/types/NavigationTypes"

export const Login = ({navigation}: RootAuthScreenProps) => {
    return (
        <View>
            <Text>
                Profile Page
            </Text>
            <Button title={'Go Registration'}
                    onPress={() => navigation.navigate('Auth', {screen: 'Registration',
                        params: {id: 100, name: 'Alexander'}})}
            />
        </View>
    )
}