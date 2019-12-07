import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import Button from '../Components/Button'
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = () => {

    const [accessToken, setAccessToken] = useState(null)
    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('accessToken');

          if (value !== null) {
            console.log('We have data!!', value);
             setAccessToken(value)
          } else {
              setAccessToken('')
          }
        } catch (error) {
            setAccessToken('')
          console.log('Error retrieving data');
        }
      };
    
      useEffect(() => {
          if(accessToken === ''){
              NavigatorService.navigate(Screens.Login)
          } else if (accessToken !== null) {
              NavigatorService.navigate(Screens.Home)
          }
      }, [accessToken])
    
      useEffect(() => {
        retrieveData()
      }, [])
    return (
        <View/>
    )
}

export default SplashScreen