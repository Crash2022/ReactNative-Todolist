import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'
import {useAppSelector} from '../../hooks/useAppSelector'
import {selectAppStatus} from '../../../state/selectors'
import {TextInput, Text, Button, View, TouchableOpacity, StyleSheet} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

type EditableSpanPropsType = {
    title: string
    onChangeInput: (newInputValue: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = React.memo(({title, onChangeInput}) => {

    const MESSAGE_INPUT_VALUE_LENGTH = 'Text length must be 1-100 symbols'

    const status = useAppSelector(selectAppStatus)

    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputTitle, setInputTitle] = useState<string>(title)
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

    // useEffect(() => {
    //     if (inputTitle.length < 1 && inputTitle.length > 100) {
    //         setError(`${MESSAGE_INPUT_VALUE_LENGTH}`);
    //         setLabel(`${MESSAGE_INPUT_VALUE_LENGTH}`);
    //     }
    // }, [])

    return (
        <View style={editableSpanStyles.container}>
            {
                editMode ?
                    <View style={editableSpanStyles.inputBlock}>
                        <View>
                            <TextInput
                                value={inputTitle}
                                onChangeText={(newTitle: string) => {setInputTitle(newTitle)}}
                                style={editableSpanStyles.input}
                                // disabled={status === 'loading'}
                                // error={!!error}
                                // autoFocus
                            />
                        </View>
                        <View>
                            <TouchableOpacity>
                                <MaterialIcons name="file-download-done" size={30} color="green"
                                               onPress={() => {
                                                   onChangeInput(inputTitle)
                                                   setEditMode(false)
                                               }}
                                />
                            </TouchableOpacity>
                        </View>
                        {/*<Button title={'*'}*/}
                        {/*         onPress={() => {onChangeInput(inputTitle); setEditMode(false)}}*/}
                        {/*/>*/}
                    </View>
                    : <View><Text style={editableSpanStyles.text} onPress={() => {setEditMode(true)}}>{title}</Text></View>

                // : <Text onPress={onClickEditSpanHandler} className={s.textSpan}>{title}</Text>
                // : <span onDoubleClick={onClickEditSpanHandler} className={s.textSpan}>{title}</span>
            }
        </View>
    )
})

const editableSpanStyles = StyleSheet.create({
    container: {
       //
    },
    inputBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        gap: 10,
    },
    input: {
        fontSize: 20,
        color: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        width: 200,
        height: 50,
    },
    text: {
        // padding: 10,
        fontSize: 20,
        color: 'white',
    },
});