import React from "react"
import {View, Text, Button} from "react-native"
import {SaveAreaViewWrapper} from "../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper"
import {globalStyles} from "../../common/styles/GlobalStyles"
import {ProfileProps} from "../../common/types/NavigationTypes"

export const ProfileScreen = ({navigation}: ProfileProps) => {

    return (
        <SaveAreaViewWrapper>
            <View style={globalStyles.containerFlexEvenly}>
                <Text>
                    Profile Page
                </Text>
                {/*<Button title={'Go Login'} onPress={() => navigation.navigate('Auth', {screen: 'Login'})}/>*/}
                {/*<Button title={'Go Todolists'} onPress={() => navigation.navigate('Todolists')}/>*/}
            </View>
        </SaveAreaViewWrapper>
    )
}