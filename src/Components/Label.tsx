import React from 'react';
import { Text, StyleSheet } from 'react-native';
interface IProps {
    text: string;
    color?: string;
}
const Label = (props: IProps) => {
    const styles = StyleSheet.create({
        text: {
            fontFamily: 'DroidArabicKufi',
            color: props.color
        }
    })
    return (
    <Text style={styles.text}>{props.text}</Text>
    )
}

export default Label
