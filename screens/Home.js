import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

//importing icons-pack
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
//importing colors
import {colors } from '../assets/colors'


//importing notecARD COMPONENT
import NoteCard from '../components/NoteCard';
const Home = () => {
  const navigation= useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, [])
  return (
    <View 
    style={{backgroundColor:colors.whiteLight}}
    className='flex-1 py-8 px-5' >
      <View className='flex-row justify-between items-center'>
        <View className='flex-row items-center space-x-2' >
        <MaterialCommunityIcons 
        name="notebook-edit-outline" 
        size={32} 
        color="black" />
        <Text>Notes</Text>
        </View>
        <View className=''>
        <FontAwesome name="search" size={24} color="black" />
        </View>
      </View>
      <View
     
      className='flex-row justify-between items-center, my-8'>
        <Text>Notes List</Text>
        <View className='flex-row justify-between items-center'>
          <Text>All notes</Text>
          <MaterialCommunityIcons name="filter" size={24} color="black" />
        </View>
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
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})