import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native"
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs"
import {StackScreenProps} from "@react-navigation/stack"

export type RootStackParamList = {
    // Home: NavigatorScreenParams<RootHomeParamList>
    Home: undefined
    // Todolists: undefined
    Todolists: NavigatorScreenParams<NestedTodolistsMain>
    Profile: undefined
    Settings: undefined
}

export type NestedTodolistsMain = {
    Todolists: undefined
    Todolist: undefined
}

// export type RootHomeParamList = {
//     Login: undefined
//     Registration: {id: number, name: string} | undefined
// }

// export type RootHomeScreenProps = CompositeScreenProps<
//     BottomTabScreenProps<RootStackParamList, 'Home'>,
//     StackScreenProps<RootHomeParamList>>

// export type RootAuthProps = NativeStackScreenProps<RootStackParamList, 'Auth'>
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type TodolistsProps = NativeStackScreenProps<RootStackParamList, 'Todolists'>
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>
export type SettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>