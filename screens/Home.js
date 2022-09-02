import { StyleSheet, Text, View,ScrollView, TouchableOpacity} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

//importing icons-pack
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
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
    <View className=''>
    <FontAwesome name="search" size={24} color={colors.black} />
    </View>
  </View>
    <ScrollView 
    showsVerticalScrollIndicator={false}
   >
     
      <View
      className='flex-row justify-between items-center, my-8'>
        <Text 
        className="font-bold text-base"
        style={{color:colors.black}}>Notes List</Text>
      </View>
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
<NoteCatergory />
<NoteCatergory />
<NoteCatergory />
<NoteCatergory />
<NoteCatergory />
<NoteCatergory />
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
       <NoteCard />
       <NoteCard />
       <NoteCard />
       <NoteCard />
       <NoteCard />
       <NoteCard />
       <NoteCard />
      </ScrollView>
    </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})