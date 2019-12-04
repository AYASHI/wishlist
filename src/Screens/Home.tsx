import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Components/Button'
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';

const HomeScreen = () => {
    const onPress = () => {
        NavigatorService.navigate(Screens.Login)
    }
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title={'Back to Login'} onPress={onPress}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
export default HomeScreen
