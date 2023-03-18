import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native"
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs"
import {StackScreenProps} from "@react-navigation/stack"
import {TodolistDomainType} from "../../state/todolists-reducer"

export type RootStackParamList = {
    // Auth: NavigatorScreenParams<RootAuthParamList>
    Home: undefined
    Todolists: NavigatorScreenParams<NestedTodolistsMain> // undefined
    Profile: undefined
    Settings: undefined
}

export type NestedTodolistsMain = {
    Todolist: undefined
    // Todolist: { todolist: TodolistDomainType }
}

// export type RootAuthParamList = {
//     Login: undefined
//     Registration: {id: number, name: string} | undefined
// }

// export type RootAuthScreenProps = CompositeScreenProps<
//     BottomTabScreenProps<RootStackParamList, 'Auth'>,
//     StackScreenProps<RootAuthParamList>>

// export type RootAuthProps = NativeStackScreenProps<RootStackParamList, 'Auth'>
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type TodolistsProps = NativeStackScreenProps<RootStackParamList, 'Todolists'>
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>
export type SettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>