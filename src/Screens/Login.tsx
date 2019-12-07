import React, {useState, useEffect} from 'react'
import { View, StyleSheet, SafeAreaView, Image } from 'react-native'
import TextField from '../Components/TextField';
import { FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';
import Label from '../Components/Label';
import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = () => {
  const [list, setList] = useState([])
  const checkImage = require('../Assets/Images/icCheck.png')
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('list', JSON.stringify (list));
      console.log('Saved data')

    } catch (error) {
      console.log('Error saving data')
      // Error saving data
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('list');
      if (value !== null) {
        console.log('We have data!!', value);
        setList(JSON.parse(value))
      }
    } catch (error) {
      console.log('Error retrieving data');
    }
  };

  useEffect(() => {
    if(list.length != 0) {
    storeData()}
  }, [list])

  useEffect(() => {
    retrieveData()
    // const storedList = AsyncStorage.getItem('list')
    // console.log(storedList)
  }, [])
  const renderItem = (props: any) => {
    return <View style={{flexDirection:'row',padding: 16, backgroundColor: '#f2f2f2', alignItems:'center', justifyContent:'center'}}>
      <View style={{flexDirection:'row', alignItems:'center', flex:1}}>
        <TouchableOpacity
        onPress={()=> {
          const newList = [...list]
         const index = newList.indexOf(props.item)
         if (index != -1) {
          newList.splice(index, 1)
         }
         props.item.done = !props.item.done
         newList.push(props.item)
         setList(newList)
        }}
         style={{marginEnd: 10,justifyContent:'center',alignItems:'center',borderColor: '#d9d9d9', borderWidth:0.5, width: 20, height: 20, backgroundColor: props.item.done ? '#00ccbb': 'clear'}}>
          <Image source={props.item.done ? checkImage : null} style={{tintColor: 'white'}} />
        </TouchableOpacity>
        <Label text={props.item.text} textDecorationLine={props.item.done} />
      </View>
      <TouchableOpacity 
      onPress={()=> {
        const newList = [...list]
         const index = newList.indexOf(props.item)
         if (index != -1) {
          newList.splice(index, 1)
          setList(newList)
         }
      }
      }
      style={{height:33, width: 33, alignItems:'center', justifyContent:'center'}}>
        <Label text={'X'} bold={true} />
      </TouchableOpacity>
    </View>
  }

  const [value, setValue] = useState()
  const Header = () => {
    return <View style={{justifyContent: 'space-between', alignItems:'center' ,padding: 16, backgroundColor: '#7f8284', borderTopEndRadius: 10,borderTopStartRadius: 10, flexDirection:'row'}}>
      <View style={{flex: 1, marginEnd: 16}}>
      <TextInput 
      returnKeyType ={'done'}
        value={value}
        onSubmitEditing={()=> {
          if (value != '') {
            let newList = [...list]
        newList.unshift({text:value, done: false})
        setList(newList)
        setValue('')
          }
        }}
        placeholder= {'Create new task ...'}
        onChangeText={text=> setValue(text)}
        style={{borderRadius: 8, backgroundColor:'#fff', height: 40, paddingStart: 10}}
        />

      </View>
      <TouchableOpacity 
      onPress={()=>{
        let newList = [...list]
        newList.unshift({text:value, done: false})
        setList(newList)
        setValue('')
        }}
      style={{alignItems: 'center', justifyContent:'center',height: 30, width: 30}}>
        <Image source={checkImage} style={{tintColor:'#fff'}}/>
      </TouchableOpacity>
    </View>
  }
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <ScrollView>
          <Label text={'To Do (' + list.filter(el=> !el.done).length + ')' } bold={true} fontSize={25} color={'#00ccbb'}/>
          <FlatList
          ListHeaderComponent= {Header()} 
          style= {{flex: 1, width:'100%', marginTop: 15, marginBottom: 35}}
          data={list.filter(el=> !el.done)}
          renderItem={renderItem}
          />
          
          { list.filter(el=> el.done).length > 0 && <>
          <View style={{paddingEnd:10 ,flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
          
          <Label text={'Done (' + list.filter(el=> el.done).length + ')'} bold={true} fontSize={25} color={'#00ccbb'}/>
          <TouchableOpacity onPress={()=> {
            const newList = list.filter(el=> !el.done)
            setList(newList)

          }}>
          <Label text={'Delete All'}/>
          </TouchableOpacity>
          </View>
          
          <FlatList
          ItemSeparatorComponent= {()=> <View style={{height:1, backgroundColor:'#d9d9d9'}}/>} 
          style= {{flex: 1, width:'100%', marginTop: 15, borderRadius:10, overflow:'hidden'}}
          data={list.filter(el=> el.done)}
          renderItem={renderItem}
          />
          </>
          }
          </ScrollView>
          
        </View>
      </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16
    }
  });
  
export default LoginScreen
