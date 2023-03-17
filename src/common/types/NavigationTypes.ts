import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {CompositeScreenProps, NavigatorScreenParams, useNavigation} from "@react-navigation/native"
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs"
import {StackScreenProps} from "@react-navigation/stack"

export type RootStackParamList = {
    // Auth: NavigatorScreenParams<RootAuthParamList>
    Home: undefined
    Todolists: {
        id: string
        // data: string
    }
    // LoginFull: undefined
    // Todolist: undefined
    Profile: undefined
    Settings: undefined
}

// export type RootAuthParamList = {
//     Login: undefined
//     Registration: {id: number, name: string} | undefined
// }

// export type RootAuthScreenProps = CompositeScreenProps<
//     BottomTabScreenProps<RootStackParamList, 'Auth'>,
//     StackScreenProps<RootAuthParamList>>

// **************************************

// export type RootTodolistParamList = {
//     TodoItem: {id: number, data: string} | undefined
// }
// export type RootTodolistsScreenProps = CompositeScreenProps<
//     BottomTabScreenProps<RootStackParamList, 'Auth'>,
//     StackScreenProps<RootAuthParamList>>

// export type RootAuthProps = NativeStackScreenProps<RootStackParamList, 'Auth'>
// export type SettingsProps = NativeStackScreenProps<RootStackParamList, 'LoginFull'>
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type TodolistsProps = NativeStackScreenProps<RootStackParamList, 'Todolists'>


export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>
export type SettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>