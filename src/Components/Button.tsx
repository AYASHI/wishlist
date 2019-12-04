import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
interface IProps {
    onPress: ()=>void,
    title: string
}

const Button = (props: IProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style= {styles.container}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 44,
    }
})

export default Button
