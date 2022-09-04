import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
//importing the color scheming
import {colors} from '../assets/colors'
//importing icon poacks
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//importing CatergoryCard from components
import CatergoryCard from '../components/CatergoryCard'

const Catergories = () => {
  const navigation = useNavigation()
useLayoutEffect(() => {
 navigation.setOptions({
  headerShown:false,
 })
}, [])
  return (
    <View className='pt-10 pb-20'>
      <View 
      style={{borderColor:colors.whiteLight, borderBottomWidth:2}}
      className='flex-row justify-between items-center mx-4 pb-5'>
        <View></View>
      <Text 
      className='text-base font-bold'
      style={{color:colors.black}}>Catergories</Text>
      <TouchableOpacity>
      <AntDesign name="pluscircleo" size={24} color={colors.black} />
      </TouchableOpacity>
      </View>
      <ScrollView  
      
    showsVerticalScrollIndicator={false}
    >
      <View className='my-3'>
        <Text 
        className="text-base font-bold italic"
        style={{color:colors.black}}>List Catergories</Text>
      </View>
      <View className="space-y-2">
      <View className='flex-row justify-around'>
    <CatergoryCard />
    <CatergoryCard />
    </View>
    <View className='flex-row justify-around'>
    <CatergoryCard />
      <CatergoryCard />
    </View>
    <View className='flex-row justify-around'> 
    <CatergoryCard />
    <CatergoryCard />
    </View>
    <View className='flex-row justify-around'>
    <CatergoryCard />
    <CatergoryCard />
    </View>
      </View>
    </ScrollView>
       
      </View>
  )
}

export default Catergories

const styles = StyleSheet.create({})