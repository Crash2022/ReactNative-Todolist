import React from "react"
import {View, Text, Button} from "react-native"
import {SaveAreaViewWrapper} from "../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper"
import {globalStyles} from "../../common/styles/GlobalStyles"
import {ProfileProps} from "../../common/types/NavigationTypes"
import {useAppNavigation} from '../../common/hooks/useAppNavigation'

export const ProfileScreen = ({}: ProfileProps) => {

    const navigation = useAppNavigation()

    return (
        <SaveAreaViewWrapper>
            <View style={globalStyles.containerFlexEvenly}>
                <Text>
                    Profile Page
                </Text>
                {/*<Button title={'Go Todolists'}*/}
                {/*        onPress={() => navigation.navigate('Todolists')}*/}
                {/*/>*/}
            </View>
        </SaveAreaViewWrapper>
    )
}