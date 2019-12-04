import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Components/Button'
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';

const HomeScreen = () => {

    const onPress = () => {
        NavigatorService.push(Screens.Details)
    }

    return (
        <View style={styles.container}>
            <Button title={'Show Details'} onPress={onPress}/>
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
