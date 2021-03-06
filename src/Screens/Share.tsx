import React, {useState, useEffect} from 'react'
import { View, FlatList, Image, Linking, SafeAreaView } from 'react-native'
import Label from '../Components/Label'
import AsyncStorage from '@react-native-community/async-storage'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ShareScreen = (props) => {
  const img = require('../Assets/Images/icCheck.png')
    const [accessToken, setAccessToken] = useState(null)
    const [name, setName] = useState(null)
    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('list');
          const accessToken1 = await AsyncStorage.getItem('accessToken')
          setAccessToken(accessToken1)

          const newName = await AsyncStorage.getItem('name')
          setName(newName)
          let list = JSON.parse(value)
          if (list !== null) {
            console.log('We have list', list);
             setList(list)
          } else {
            console.log('We have list', list);
            setList('')
          }
        } catch (error) {
          console.log('Error retrieving data');
        }
      };

      const storeDate =async () => {
        try {
            let newList = [...list]
            console.log('newList',newList)
             await AsyncStorage.setItem('list', JSON.stringify(newList));
          } catch (error) {
            console.log('Error retrieving data');
          }
      }

    const [list, setList] = useState([])

    useEffect(() => {
        retrieveData()
    }, [])

    useEffect(() => {
        storeDate()
    }, [list])

    const renderItem = (props) => {
        const image = props.item.imageId === 0 ? require('../Assets/Images/bmw.jpg') : require('../Assets/Images/gift.jpeg')
        

        return <TouchableOpacity 
        onPress={()=> {
            Linking.openURL(props.item.shopName)
        }}
        style={{flexDirection:'row',padding:16 ,alignItems:'center',backgroundColor: '#f2f2f2',borderRadius: 10,height: 80, borderColor: '#d9d9d9',borderRadius: 8,borderColor:'#'}}>
            <View style={{flex: 1, flexDirection:'row',alignItems:'center'}}>
            <Image source={image} style={{marginEnd: 15,height: 90, width: 90}} resizeMode='contain'/>
            <View >
            <Label text={props.item.itemName} bold={true}/>
            <Label text={props.item.name}/>
            </View>
            
            </View>
            <TouchableOpacity 
            onPress = {()=> {

              const newlist = [...list]
              newlist.forEach((el, i)=>  { 
                 if (i=== props.index) {
                    el.check = !el.check
                    let newName = ''
                    if (props.item.check) {
                      newName = accessToken ? name : 'Anonymous'
                    }
                    console.log('newName',newName)
                    el.name = newName
                   }
            } 
              )
              setList(newlist)
            }}
            style={{justifyContent:'center',alignItems:'center' ,height: 25, width: 25, borderColor:'#9a9a9a', borderWidth:0.5}}>
              <Image source={props.item.check? img : null}/>
            </TouchableOpacity>
        </TouchableOpacity>
    }

    return (
        <SafeAreaView style={{ flex: 1}}>
            
            <View style={{padding: 16, flex: 1}}>
            <Label text={'Frined whishlist'} bold={true}/>
            <FlatList
            ItemSeparatorComponent = {()=> <View style={{height: 10}}/>}
            style={{flex: 1, marginTop: 16}}
             data={list} 
            renderItem= {renderItem}/>
        </View>
        </SafeAreaView>
        
    )
}

export default ShareScreen
