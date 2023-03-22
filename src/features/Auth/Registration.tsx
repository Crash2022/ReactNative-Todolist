import React from "react"
import {View, Text, Button} from "react-native"
// import {RootAuthScreenProps} from "../../common/types/NavigationTypes"

export const Registration = ({route, navigation}: any /*RootAuthScreenProps*/) => {

    return (
        <View>
            <Text>Registration Page</Text>
            <Text>{JSON.stringify(route.params, null, 2)}</Text>
            <Button title={'Go Todolists'} onPress={() => navigation.navigate('Todolists')}/>
        </View>
    )
}