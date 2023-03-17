import React from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native'
import {SaveAreaViewWrapper} from '../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper'
import {globalStyles} from '../../common/styles/GlobalStyles'
import {HomeProps} from '../../common/types/NavigationTypes'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import {homeStyles} from "./HomeStyles"
import {useAppNavigation} from "../../common/hooks/useAppNavigation";

export const HomeScreen = (/*{navigation}: HomeProps*/) => {

    const navigation = useAppNavigation()

    return (
        <SaveAreaViewWrapper>
            <View style={globalStyles.containerFlexEvenly}>
                <View>
                    <Text style={homeStyles.title}>
                        Welcome to TodolistsApp
                    </Text>
                </View>
                <View style={homeStyles.icons}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="location-enter" size={100} color="green"
                                     //onPress={() => navigation.navigate('Login')}
                        />
                    </TouchableOpacity>
                    <Text>Login</Text>
                    {/*<Button title={'Go Todolists'}*/}
                    {/*        onPress={() => navigation.navigate('Todolists')}*/}
                    {/*/>*/}
                </View>
                <View style={homeStyles.icons}>
                    <TouchableOpacity>
                        <MaterialIcons name="app-registration" size={100} color="green"
                                  //onPress={() => navigation.navigate('Registration')}
                        />
                    </TouchableOpacity>
                    <Text>Registration</Text>
                    {/*<Button title={'Go Profile'}*/}
                    {/*        onPress={() => navigation.navigate('Profile')}*/}
                    {/*/>*/}
                </View>
            </View>
        </SaveAreaViewWrapper>
    )
}