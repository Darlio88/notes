import { StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

//importing icon packs
import { AntDesign } from '@expo/vector-icons';


//importing colors
import {colors} from '../assets/colors'

const CreateNote = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
   navigation.setOptions({
    headerShown:false,
   })
  }, [])
  return (
    <SafeAreaView className='flex-1 w-full items-center pt-10 px-3'>
      <View 
      style={{borderBottomWidth:1, borderColor:colors.white}}
      className="flex-row justify-between w-full items-center full mt-2 pb-5">
      <AntDesign name="closecircleo" size={24} color={colors.black} />
      <Text 
      className="text-base font-base"
      style={{color:colors.black}}>CreateNote</Text>
      <AntDesign name="checkcircleo" size={24} color={colors.black} />
      </View>
      
    </SafeAreaView>
  )
}

export default CreateNote

const styles = StyleSheet.create({})