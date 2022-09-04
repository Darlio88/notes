
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { FontAwesome5 } from '@expo/vector-icons';
import {colors} from '../assets/colors'

const CatergoryCard = () => {
  return (
    <View 
    className=' items-center rounded-lg pt-2'
    style={{backgroundColor:colors.lightBlue, opacity:0.4,height:160 ,width:160,elevation:2}}>
    <FontAwesome5 name="folder-plus" size={80} color={colors.lightBlue} />  
    <View>
    <Text style={{color:colors.black}} className="text-base font-bold">Design</Text>
    <Text style={{color:colors.black}} className="text-sm font-extralight">20 notes</Text>
    </View>
    </View>
  )
}

export default CatergoryCard

const styles = StyleSheet.create({})