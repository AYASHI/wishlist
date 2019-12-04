import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center', alignItems:'center', flex: 1
    }
  });
  
export default LoginScreen
