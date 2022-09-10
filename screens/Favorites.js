import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import {useNavigation} from "@react-navigation/native"


//importing notecARD COMPONENT
import NoteCard from '../components/NoteCard';



const Favorites = () => {
const navigation = useNavigation()
useLayoutEffect(() => {
 navigation.setOptions({
  headerShown:false,
 })
}, [])
  return (
    <View   className='flex-1 py-8 px-5' >
      <Text className='font-bold text-lg my-3'>Favorites</Text>
      <View className=' flex-row space-x-2 pb-3 w-full'>
      <ScrollView showsVerticalScrollIndicator={false}>
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
       
     
      </ScrollView>
      </View>
    
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({})