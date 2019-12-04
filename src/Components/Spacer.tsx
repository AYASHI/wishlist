import React from 'react'
import { View, StyleSheet } from 'react-native'

interface IProps {
    space?: number
}

const Spacer = (props: IProps) => {
    const styles = StyleSheet.create({
        container: {
            height: props.space || 16
        }
    })
    return (
        <View style={styles.container}/>
    )
}

interface IProps {

}

export default Spacer
