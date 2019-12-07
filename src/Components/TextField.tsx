import React, {useEffect, useState} from 'react'
import { TextInput, StyleSheet } from 'react-native'

interface IProps {
    onChangeText: (string)=> void,
    placeholder: string;
}

const TextField = (props: IProps) => {
    const [value, setValue] = useState('')
    useEffect(() => {
        props.onChangeText(value)
    }, [value])
    return (
        <TextInput 
        placeholder={props.placeholder}
        value={value}
        onChangeText={text=> setValue(text)}
        style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        height: 44,
        borderColor: '#9a9a9a',
        borderWidth: 0.5,
        paddingStart: 16,
        paddingEnd: 16
    }
})

export default TextField
