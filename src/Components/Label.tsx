import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Label = (props) => {
    const styles = StyleSheet.create({
        text: {
            fontFamily: 'DroidArabicKufi-Bold'
        }
    })
    return (
    <Text style={styles.text}>{props.text}</Text>
    )
}

export default Label
