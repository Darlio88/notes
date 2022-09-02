import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


//importing colors
import {colors} from '../assets/colors'
const NoteCatergory = () => {
  return (
    <View
     style={{backgroundColor:colors.lightBlue, elevation:3}}
      className='justify-center items-center mx-2 my-2 rounded-full'>
      <Text style={{color:colors.blackLight}} className="py-2.5 px-5">
        Success
      </Text>
</View>
  )
}

export default NoteCatergory

const styles = StyleSheet.create({})