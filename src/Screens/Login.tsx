import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Image } from 'react-native'
import TextField from '../Components/TextField';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import Label from '../Components/Label';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '../Components/Button';
import  api  from '../Api/api';
import { LOGIN } from '../Api/constants';
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';

const LoginScreen = () => {
  const giftImage = require('../Assets/Images/gift.jpeg')

  const [usernameOrEmail, setEmail] = useState()
  const [password, setPassword] = useState()

  const storeData = async (accessToken:any) => {
    try {
      await AsyncStorage.setItem('accessToken', JSON.stringify(accessToken));
      console.log('Saved data') 
      NavigatorService.navigate(Screens.Home)
    } catch (error) {
      console.log('Error retrieving data');
    }
  };
  
  const login = ()=> {
    api.post(LOGIN, {usernameOrEmail,password}).then(responce=> {
      console.log(responce.data)

      if(responce.data.accessToken) {
        storeData(responce.data.accessToken)
      }
    }).catch(error=> {
      console.log(error)
    })
  }

  const signUp = ()=> {
    NavigatorService.push(Screens.SignUp)
  }
  
    return (
        <View style={styles.container}>
          <Image  source={giftImage} style={{position: 'absolute', top: 0,bottom:0,start:0,end:0, height:'100%', width: '100%'}}/>
          <View  style={{ backgroundColor: '#000',opacity:0.6,position: 'absolute', top: 0,bottom:0,start:0,end:0, height:'100%', width: '100%'}}/>
          <View style={{padding: 16}}>
          <TextInput 
      returnKeyType ={'done'}
        value={usernameOrEmail}
        placeholder= {'Username/Email'}
        onChangeText={text=> setEmail(text)}
        style={{borderColor: '#d9d9d9',borderWidth: 0.5,borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
        />
          <TextInput 
      returnKeyType ={'done'}
        value={password}
        placeholder= {'Password'}
        onChangeText={text=> setPassword(text)}
        style={{marginTop:10, marginBottom: 20,borderColor: '#d9d9d9',borderWidth: 0.5,borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
        />
          <Button title={'Login'} onPress={login}/>
          <TouchableOpacity 
          onPress={signUp}
          style={{flexDirection:'row', marginTop: 16}}>
            <Label text={'Don\'t have account?'} color={'#fff'}/>
            <View style={{marginEnd:10}}/>
            <Label text={'Sign Up'} color={'#fff'} bold={true}/>
          </TouchableOpacity>
          </View>
          
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    }
  });
  
export default LoginScreen
