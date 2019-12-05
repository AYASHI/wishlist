import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../Components/Button';
import Spacer from '../Components/Spacer';
import api from '../Api/api';
import { LOGIN } from '../Api/constants';
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';
import TextField from '../Components/TextField';

const LoginScreen = () => {
  const login = ()=> {
   // NavigatorService.navigate(Screens.Home)
    const params = {email, password}
    api.post(LOGIN, params).then(response=> {
      console.log(response.data)
      if(response.data === 'authenticated') {
        NavigatorService.navigate(Screens.Home)
      }
    }).catch(error=> {
      console.log('error',error)
    })
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
          <TextField 
          placeholder={'enter your email'}
          onChangeText={text=> setEmail(text)}
          />
          <Spacer/>
          <TextField placeholder={'enter your password'} 
          onChangeText={text=> setPassword(text)}
          />
          <Spacer/>
            <Button title={'Login'} onPress={login}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center', alignItems:'center', flex: 1,
      padding: 16
    }
  });
  
export default LoginScreen
