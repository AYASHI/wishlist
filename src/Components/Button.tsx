import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Label from './Label';
interface IProps {
    onPress: ()=>void,
    title: string
}

const Button = (props: IProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style= {styles.container}>
            <Label text={props.title} color={'white'}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        width: 150,
        backgroundColor: '#3766A3',
        justifyContent:'center',
        alignItems: 'center',
        paddingStart: 16,
        paddingEnd: 16,
        borderRadius: 5
    }
})

export default Button
