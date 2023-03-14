import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {View, Text} from 'react-native'

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
        <View>
            <View>
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
                <View>
                  <Text>Text length: {inputValue.length} symbols, max - 100</Text>
                </View>
            </View>
            <View>
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
    );
})