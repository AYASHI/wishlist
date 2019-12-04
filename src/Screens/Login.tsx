import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../Components/Button';
import Spacer from '../Components/Spacer';
import api from '../Api/api';
import { LOGIN } from '../Api/constants';
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';

const LoginScreen = () => {
  const login = ()=> {
    NavigatorService.navigate(Screens.Home)
    // const params = {email: 'admin', password: 'password'}
    // api.post(LOGIN, params).then(response=> {
    //   console.log(response.data)
    // }).catch(error=> {
    //   console.log('error',error)
    // })
  }
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Spacer/>
            <Button title={'Login'} onPress={login}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center', alignItems:'center', flex: 1
    }
  });
  
export default LoginScreen
