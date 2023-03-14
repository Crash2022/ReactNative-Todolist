import {NativeStackScreenProps} from "@react-navigation/native-stack"

export type RootStackParamList = {
    // '/': undefined,
    Home: undefined,
    Todolists: undefined,
    Settings: undefined,
    Profile: undefined,
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type TodolistsProps = NativeStackScreenProps<RootStackParamList, 'Todolists'>
export type SettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>