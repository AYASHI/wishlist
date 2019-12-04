import React from 'react'
import { Text, StyleSheet } from 'react-native'
interface IProps {
    text: string
}
const Label = (props: IProps) => {
    const styles = StyleSheet.create({
        text: {
            fontFamily: ''
        }
    })
    return (
    <Text>{props.text}</Text>
    )
}

export default Label
