import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import React,{useLayoutEffect, useEffect} from 'react'
import { useNavigation,useRoute  } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import {colors} from '../assets/colors'


const NoteView = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const {title,description,catergory, createdAt,tags } = route.params
    useEffect(() => {
      console.log(route.params)
    }, [])
    
    useLayoutEffect(() => {
navigation.setOptions({
    headerShown:false,
})
    },
      [])
  return (
    <SafeAreaView 
    style={{backgroundColor:colors.black}} 
    className='flex-1 items-center p-5 pt-10'>
      <View className='flex-row w-full items-center justify-between mx-5'>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View 
        style={{backgroundColor:colors.blackLight, opacity:0.6}}
        className='justify-center items-center p-2 rounded-lg'>
        <Feather name="chevron-left" size={24} color={colors.white} />
        </View>
        </TouchableOpacity>
        <View 
        style={{backgroundColor:colors.blackLight, opacity:0.6}}
        className='justify-center items-center p-2 rounded-lg'>
        <Feather name="edit" size={24} color={colors.white} />
        </View>
      </View>
      <View className='justify-center my-3 mt-5'>
        <Text
        className='text-3xl font-extrabold'
        style={{color:colors.whiteLight}}
        >{title}</Text>
      </View>
      <View className='justify-center w-full my-3 '>
        <Text 
        style={{color:colors.white}}
        className='text-xs font-thin '>
            {Date(createdAt)}
        </Text>
      </View>
      <View className='justify-start w-full my-3 '>
        <Text 
        style={{color:colors.white}}
        className='text-lg font-semibold '>
            {catergory}
        </Text>
      </View>
      <View className='justify-center w-full my-3'>
        <Text 
        className='text-base font-normal italic ' 
        style={{color:colors.white}}>
            {description}
        </Text>
      </View>
      <View className='flex-row items-center w-full mt-5 space-x-2'>
        {tags.map((tag, index)=>(<Text
        className='text-sm font-thin italic ' 
        style={{color:colors.white}}
        key={index}>{tag}</Text>))}
      </View>
    </SafeAreaView>
  )
}

export default NoteView

const styles = StyleSheet.create({})