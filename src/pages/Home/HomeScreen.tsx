import React from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import {SaveAreaViewWrapper} from '../../common/components/SaveAreaViewWrapper/SaveAreaViewWrapper'
import {globalStyles} from '../../common/styles/GlobalStyles'
import {HomeProps} from '../../common/types/NavigationTypes'
import {FontAwesome, Ionicons} from '@expo/vector-icons'

export const HomeScreen = ({navigation}: HomeProps) => {
    return (
        <SaveAreaViewWrapper>
            <View style={globalStyles.container}>
                <Text style={homeStyles.title}>
                    Welcome to TodolistsApp
                </Text>
                <View style={homeStyles.icons}>
                    <TouchableOpacity>
                        <FontAwesome name="list-alt" size={100} color="green"
                                     onPress={() => navigation.navigate('Todolists')}
                        />
                    </TouchableOpacity>
                    <Text>Todolists</Text>
                    {/*<Button title={'Go Todolists'}*/}
                    {/*        onPress={() => navigation.navigate('Todolists')}*/}
                    {/*/>*/}
                </View>
                <View style={homeStyles.icons}>
                    <TouchableOpacity>
                        <Ionicons name="settings-sharp" size={100} color="green"
                                  onPress={() => navigation.navigate('Settings')}
                        />
                    </TouchableOpacity>
                    <Text>Settings</Text>
                    {/*<Button title={'Go Settings'}*/}
                    {/*        onPress={() => navigation.navigate('Settings')}*/}
                    {/*/>*/}
                </View>
            </View>
        </SaveAreaViewWrapper>
    )
}

// styles
const homeStyles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
    button: {
        width: 200,
        // height: 200,
    },
    icons: {
        alignItems: 'center',
    },
});