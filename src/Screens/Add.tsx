import React, {useState} from 'react'
import { View, Image, Modal, FileList , TextInput, SafeAreaView} from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import Button from '../Components/Button';
import api from '../Api/api'
import {ADD, BASE_URL} from '../Api/constants';
import AsyncStorage from '@react-native-community/async-storage';
import Label from '../Components/Label';
import NavigatorService from '../Navigators/NavigationService';
import Screens from '../Navigators/Screens';

const AddScreen = () => {
    const [itemName, setName] = useState()
    const [shopName, setShop] = useState()
    const [show, setShow] = useState(false)
    const [imageId, setImage] = useState(-1)
    const [userId, setUserId] = useState(7)
    const [accessToken, setAccessToken] = useState()
    const giftImage = require('../Assets/Images/img.png')
    const images = [require('../Assets/Images/bmw.jpg'), require('../Assets/Images/gift.jpeg')]
const renderItem = (props) => {
    return <TouchableOpacity onPress={()=> {
        setImage((props.index  % images.length))
        setShow(false)
    }}>
        <Image source={images[props.index % images.length]} resizeMode = {'contain'} style={{height:80, width:80}}/>
    </TouchableOpacity>
}
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
const callApp = ()=> {
    retrieveData()
    let auth = 'Bearer ' + accessToken
    auth = auth.replace('"', '')
    console.log(typeof accessToken, accessToken)
    const config =  { baseURL: BASE_URL, timeout: 60000, headers: {
        Authorization: auth,
        'Content-Type': 'application/json'
    } }

    const params = { wishes:[{itemName,imageId, shopName ,userId}]}
    
    api.post(ADD, params, config).then(responce=> {
        console.log(responce.data)
    }).catch(error=> {
      console.log(error)
    })
  }

  api.interceptors.request.use(config => {
      console.log(config)
    return config;
});


const createLocal = async () => {
    const wish= {itemName,imageId, shopName ,userId}
    let value = await AsyncStorage.getItem('list');
     let list = JSON.parse(value)
    // console.log('get List')
      if (list !== null) {
        list.unshift(wish)
      } else {
          list = []
      }
       await AsyncStorage.setItem('list',JSON.stringify(list))
}
const create = ()=> {
    if (itemName) {
        createLocal()
        NavigatorService.navigate(Screens.List)
        //callApp()
    }
}
    return (
        <View style={{ flex: 1, padding: 16}}>
            <Modal visible={show}>
                <SafeAreaView style={{marginStart: 16, flex: 1}}>
                    <Label text= {'Select Image'} bold = {true}/>
                <FlatList
                style={{  flex: 1}}
                data={['', '','']}
                renderItem={renderItem}
            />
                </SafeAreaView>
            
            </Modal>
            <TouchableOpacity onPress={()=> {setShow(!show)}} style={{height:80, width:80}}>
            <Image source={imageId  === -1 ? giftImage : images[imageId]} resizeMode = {'contain'} style={{height:80, width:80}}/>
            </TouchableOpacity>
           <TextInput 
        value={itemName}
        placeholder= {'name (required)'}
        onChangeText={text=> setName(text)}
        style={{marginTop:10, marginBottom: 20,borderColor: '#d9d9d9',borderWidth: 0.5,borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
        /> 
        <TextInput 
        value={shopName}
        placeholder= {'url'}
        onChangeText={text=> setShop(text)}
        style={{marginTop:10, marginBottom: 20,borderColor: '#d9d9d9',borderWidth: 0.5,borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
        /> 
        <Button bold={true} title={'Add'} onPress={create} />
        </View>
    )
}

export default AddScreen
