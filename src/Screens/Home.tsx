import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Components/Button'
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';
import api from 'src/Api/api';
import { LOGIN } from 'src/Api/constants';

const HomeScreen = () => {
    const onPress = () => {
        NavigatorService.push(Screens.Add)
    }

    return (
        <View style={styles.container}>
            <Button bold={true} title={'Let\'s Start'} onPress={onPress} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        justifyContent:'center',
        alignItems: 'center'
    }
})
export default HomeScreen