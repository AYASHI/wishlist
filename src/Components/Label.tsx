import React from 'react';
import { Text, StyleSheet } from 'react-native';
interface IProps {
    text: string;
    color?: string;
    bold?: boolean;
    fontSize?: number;
    textDecorationLine? : boolean;
}
const Label = (props: IProps) => {
    const styles = StyleSheet.create({
        text: {
            textDecorationLine:props.textDecorationLine ? 'line-through' :'none',
            fontFamily: props.bold? 'DroidArabicKufi-Bold': 'DroidArabicKufi',
            color: props.color,
            fontSize: props.fontSize
        }
    })
    return (
    <Text style={styles.text}>{props.text}</Text>
    )
}

export default Label
