import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {MaterialIcons} from "@expo/vector-icons";

type AddItemFormPropsType = {
    addItem: (titleInput: string) => void
    disabled?: boolean
}

export const AddItemForm: React.FC<AddItemFormPropsType> = React.memo(({addItem, disabled = false}) => {

    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const MESSAGE_INPUT_VALUE_REQUIRED = 'Field is required!'
    const MESSAGE_INPUT_VALUE_LENGTH = 'Text length must be 1-100 symbols'

    const callBackButtonHandler = () => {
        const trimValue = inputValue.trim()

        if (trimValue && trimValue.length <= 100) {
            addItem(trimValue)
            setInputValue('')
        } else {
            setError(`${MESSAGE_INPUT_VALUE_LENGTH}`)
        }
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError('')
        }
        return event.key === 'Enter' ? callBackButtonHandler() : ''
    }

    return (
        // <View className={s.addItemForm}>
        <View style={addItemFormStyles.container}>
            {/*<View>*/}
                <TextInput value={inputValue}
                           onChangeText={(newTitle: string) => {setInputValue(newTitle)}}
                           style={addItemFormStyles.input}
                />
                {/*<TextField variant="outlined"*/}
                {/*           // label="Введите текст"*/}
                {/*           label="Enter text here..."*/}
                {/*           onChange={onChangeInputHandler}*/}
                {/*           onKeyDown={onKeyDownHandler}*/}
                {/*           value={inputValue}*/}
                {/*           error={!!error}*/}
                {/*           helperText={error}*/}
                {/*           disabled={disabled}*/}
                {/*/>*/}
                {/*<View className={s.addItemForm_length}>*/}
            {/*</View>*/}
            <View>
                <Text>Text length: {inputValue.length} symbols, max - 100</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <MaterialIcons name="add-task" size={24} color="black" onPress={callBackButtonHandler}/>
                </TouchableOpacity>
                {/*<IconButton onClick={callBackButtonHandler}*/}
                {/*            color="primary"*/}
                {/*            size="medium"*/}
                {/*            disabled={disabled}*/}
                {/*            style={{marginLeft: '5px'}}*/}
                {/*>*/}
                {/*    <AddComment/>*/}
                {/*</IconButton>*/}
            </View>
        </View>
    )
})

const addItemFormStyles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    input: {
        width: 150,
    },
})