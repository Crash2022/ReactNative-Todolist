import {NavigationProp, useNavigation} from "@react-navigation/native"
import {RootStackParamList} from "../types/NavigationTypes"

export type NavigationUseType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()