import React,  {useState} from 'react'
import { View, TextInput, Image } from 'react-native'
import api from '../Api/api'
import {SIGNUP, LOGIN} from '../Api/constants';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import NavigatorService from '../Navigators/NavigationService'
import Screens from '../Navigators/Screens';
const SignUPScreen = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [user, setUser] = useState({email,password, username, name})

    const giftImage = require('../Assets/Images/gift.jpeg')

    const storeData = async (accessToken:any) => {
        try {
          await AsyncStorage.setItem('accessToken', accessToken);
            NavigatorService.navigate(Screens.Home)
            console.log('Save data!!');
        } catch (error) {
          console.log('Error Saving data');
        }
      };

      const login = ()=> {
        api.post(LOGIN, {usernameOrEmail: email,password}).then(responce=> {
          console.log(responce.data)
    
          if(responce.data.accessToken) {
            storeData(responce.data.accessToken)
          }
        }).catch(error=> {
    
        })
      }

    const create = () => {

        api.post(SIGNUP, {email,password, username, name}).then(responce=> {
          console.log(responce.data)
          if(responce.data.success) {
          login()}
          }).catch(error=> {
            console.log(error)
          })
    }

    

    return (
        <View style={{ flex: 1}}>
            <Image  source={giftImage} style={{position: 'absolute', top: 0,bottom:0,start:0,end:0, height:'100%', width: '100%'}}/>
          <View  style={{ backgroundColor: '#000',opacity:0.6,position: 'absolute', top: 0,bottom:0,start:0,end:0, height:'100%', width: '100%'}}/>
            <View style={{padding: 16}}>
                
                <TextInput 
            value={name}
            placeholder= {'Name'}
            onChangeText={text=> setName(text)}
            style={{marginBottom:10,borderColor: '#d9d9d9',borderWidth: 0.5,borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
            />
                
                <TextInput 
            value={username}
            placeholder= {'Username'}
            onChangeText={text=> setUsername(text)}
            style={{marginBottom:10,borderColor: '#d9d9d9',borderWidth: 0.5,borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
            />

            <TextInput 
            value={email}
            placeholder= {'Email'}
            onChangeText={text=> setEmail(text)}
            style={{borderColor: '#d9d9d9',borderWidth: 0.5,borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
            />

            <TextInput 
            value={password}
            placeholder= {'Password'}
            onChangeText={text=> setPassword(text)}
            style={{marginTop:10, marginBottom: 20,borderColor: '#d9d9d9',borderWidth: 0.5,borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
            />  


            <Button title={'Create'} onPress={create}/>

            </View>
            
        </View>
    )
}

export default SignUPScreen
