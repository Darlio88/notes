import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

//importing icon poacks
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Catergories = () => {
  const navigation = useNavigation()
useLayoutEffect(() => {
 navigation.setOptions({
  headerShown:false,
 })
}, [])
  return (
    <View>
      <Text>Catergories</Text>
      <Feather name="folder-plus" size={80} color="black" />
      <FontAwesome5 name="folder-plus" size={80} color="black" />    
      </View>
  )
}

export default Catergories

const styles = StyleSheet.create({})