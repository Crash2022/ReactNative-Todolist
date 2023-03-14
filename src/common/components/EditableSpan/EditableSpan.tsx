import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'
import {useAppSelector} from '../../hooks/useAppSelector'
import {selectAppStatus} from '../../../state/selectors'
import {TextInput, Text, Button, View, TouchableOpacity} from 'react-native'
import {MaterialIcons} from "@expo/vector-icons";

type EditableSpanPropsType = {
    title: string
    onChangeInput: (newInputValue: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = React.memo(({title, onChangeInput}) => {

    const status = useAppSelector(selectAppStatus)

    const MESSAGE_INPUT_VALUE_LENGTH = 'Text length must be 1-100 symbols'

    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputTitle, setInputTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [label, setLabel] = useState<string>('Change text')

    const onClickEditSpanHandler = () => {
        setEditMode(true)
        setInputTitle(title)
    }

    const onClickNotEditSpanHandler = () => {
        if (inputTitle.length > 0 && inputTitle.length < 100) {
            onChangeInput(inputTitle);
            setEditMode(false);
        } else {
            setError(`${MESSAGE_INPUT_VALUE_LENGTH}`);
            setLabel(`${MESSAGE_INPUT_VALUE_LENGTH}`);
        }

    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.currentTarget.value);
    }

    const enterChangeTitle = (event: KeyboardEvent<HTMLInputElement>) => {
        return event.key === 'Enter' ? onClickNotEditSpanHandler() : '';
    }

    useEffect(() => {
        if (inputTitle.length < 1 && inputTitle.length > 100) {
            setError(`${MESSAGE_INPUT_VALUE_LENGTH}`);
            setLabel(`${MESSAGE_INPUT_VALUE_LENGTH}`);
        }
    }, [])

    return (
        <>
            {!editMode
                ?
                <View>
                    <TextInput
                        // label="Измените текст"
                        // label={label}
                        // variant="standard"
                        // autoFocus
                        value={inputTitle}
                        // error={!!error}
                        onChangeText={(newTitle: string) => {
                            setInputTitle(newTitle)
                        }}
                        // onChangeText={onChangeInputHandler}
                        // onBlur={onClickNotEditSpanHandler}
                        // onKeyDown={enterChangeTitle}
                        // disabled={status === 'loading'}
                        // className={s.editableSpan}
                    />
                    <TouchableOpacity>
                        <MaterialIcons name="file-download-done" size={24} color="black"
                                       onPress={() => {
                                           onChangeInput(inputTitle);
                                           setEditMode(false)
                                       }}
                        />
                    </TouchableOpacity>
                    {/*<Button title={'*'}*/}
                    {/*         onPress={() => {onChangeInput(inputTitle); setEditMode(false)}}*/}
                    {/*/>*/}
                </View>
                : <Text onLongPress={() => {
                    setEditMode(true)
                }}>{title}</Text>

                // : <Text onPress={onClickEditSpanHandler} className={s.textSpan}>{title}</Text>
                // : <span onDoubleClick={onClickEditSpanHandler} className={s.textSpan}>{title}</span>
            }
        </>
    )
})