
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { FontAwesome5 } from '@expo/vector-icons';
import {colors} from '../assets/colors'

//importing backgroundcolors
import {backgroundColors} from "../assets/backgroundColors"

const CatergoryCard = ({name, count}) => {
  //backgroundcolor selector
  const backgroundSelector = ()=>{
    const randInterger = Math.floor(Math.random()*backgroundColors.length)
    return backgroundColors[randInterger]
  }
  return (
    <View 
    className=' items-center rounded-lg pt-2'
    style={{backgroundColor:backgroundSelector(), opacity:0.4,height:160 ,width:160,elevation:2}}>
    <FontAwesome5  name="folder-plus" size={80} color="inherit" />  
    <View>
    <Text style={{color:colors.black}} className="text-base font-bold">{name}</Text>
    <Text style={{color:colors.black}} className="text-sm font-extralight">{count} {count>0?'notes' :"note"}</Text>
    </View>
    </View>
  )
}

export default CatergoryCard

const styles = StyleSheet.create({})