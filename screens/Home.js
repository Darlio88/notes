import { StyleSheet, Text, View,ScrollView, TouchableOpacity} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

//importing icons-pack
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//importing colors
import {colors } from '../assets/colors'


//importing notecARD COMPONENT
import NoteCard from '../components/NoteCard';
import NoteCatergory from '../components/NoteCatergory';
const Home = () => {
  const navigation= useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, [])
  return (
    <View  style={{backgroundColor:colors.whiteLight}}
    className='flex-1 py-8 px-5' >
    <View className='flex-row justify-between items-center'>
    <View className='flex-row items-center space-x-2 pb-3' >
    <MaterialCommunityIcons 
    name="notebook-edit-outline" 
    size={32} 
    color={colors.black} />
    <Text 
    className='font-bold text-lg'
    style={{color:colors.black}}>

      Notes
      </Text>
    </View>
    <TouchableOpacity className=''>
    <FontAwesome name="search" size={20} color={colors.black} />
    </TouchableOpacity>

  </View>
  
      <ScrollView showsVerticalScrollIndicator={false}>
       <NoteCard />
       <NoteCard />
       <NoteCard />
       <NoteCard />
       <NoteCard />
       <NoteCard />
       <NoteCard />
      </ScrollView>
 <TouchableOpacity 
 onPress={()=>navigation.navigate("create-note")}
 style={{marginRight:4,}}>
 <View 
  style={{position:'absolute',
  shadowRadius:4,
  shadowColor:colors.white,
   right:0,
   bottom:20,
   height:64,
   width:64,
   backgroundColor:colors.black,
   elevation:5}} 
  className="justify-center items-center rounded-full">
  <AntDesign name="plus" size={32} color={colors.whiteLight} />
  </View>
 </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})