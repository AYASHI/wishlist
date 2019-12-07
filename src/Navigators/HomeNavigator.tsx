import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/Home';
import DetailsScreen from '../Screens/SignUP';
import LoginScreen from '../Screens/Login';
import SignUPScreen from '../Screens/SignUP';
import { Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Screens from '../Navigators/Screens'
import ListScreen from '../Screens/List';
import NavigatorService from '../Navigators/NavigationService';
import AddScreen from '../Screens/Add';

const giftImage = require('../Assets/Images/logout.png')
const profileImage = require('../Assets/Images/avatar.png')

const clearData = async () => {
    NavigatorService.navigate(Screens.Splash)
    try {
      await AsyncStorage.removeItem('accessToken')
    } catch (error) {
      console.log('Error Logged out');
    }
  };

const Logout = () => {
    return <TouchableOpacity
    onPress={()=>  clearData()} 
    style={{width: 40, height:40, justifyContent: 'center',alignItems:'center'}}>
        <Image source={giftImage} />
    </TouchableOpacity>
}

const Profile = () => {
    return <TouchableOpacity
    onPress={()=> NavigatorService.push(Screens.List) } 
    style={{marginStart: 10,width: 35, height:35, justifyContent: 'center',alignItems:'center'}}>
        <Image source={profileImage} style={{height:30,width:30}} resizeMode = {'contain'}/>
    </TouchableOpacity>
}

const HomeNavigator =  createStackNavigator({
    Root: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home',
            headerRight: <Logout/>,
            headerLeft: <Profile/>
        }
    },
    List: {
        screen: ListScreen,
        navigationOptions: {
            title: 'WishList',
        }
    },
    Add: {
        screen: AddScreen,
        navigationOptions: {
            title: 'Add wishList',
        }
    }

}, {
    defaultNavigationOptions: {
         headerStyle: {
           backgroundColor: '#00CCBB',
         },
         headerBackTitle: null,
         headerTintColor: 'white'
     }
})

export const LoginNavigator =  createStackNavigator({
    Root: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    },
    SignUp: {
        screen: SignUPScreen,
        navigationOptions: {
            title: 'Create new user'
        }
    }
}, {
    defaultNavigationOptions: {
         headerStyle: {
           backgroundColor: '#00CCBB',
         },
         headerBackTitle: null,
         headerTintColor: 'white'
     }
})

export default HomeNavigator;

