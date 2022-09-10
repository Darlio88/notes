import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import formatDistanceToNow  from 'date-fns/formatDistanceToNow'

import { useNavigation } from '@react-navigation/native'



//importing colors
import { colors } from '../assets/colors'
//importing backgroundcolors
import {backgroundColors} from "../assets/backgroundColors"

const NoteCard = ({note}) => {
  const navigation = useNavigation()
  //backgroundcolor selector
  const backgroundSelector = ()=>{
    const randInterger = Math.floor(Math.random()*backgroundColors.length)
    return backgroundColors[randInterger]
  }
  //date formatter
  const date = formatDistanceToNow(
    new Date(note.createdAt)
  )
  //handleNavigation
  const handleNavigation = ()=>{
    navigation.navigate('note-view',{...note})
  }


  return (
    <TouchableOpacity onPress={handleNavigation}>
    <View 
    style={{backgroundColor:backgroundSelector(), opacity:0.7}}
     className='px-3 py-5 rounded-xl mt-2'>
      <Text style={{color:colors.black}} className="font-bold text-base">{note.title}</Text>
      <View className="flex-row justify-between mt-5">
        <View className="flex-row space-x-1">
        <Text 
        style={{borderRightColor:colors.blackLight,color:colors.blackLight, borderRightWidth:2}}
         className="font-extraLight text-sm pr-4">school</Text>
        <Text 
        style={{color:colors.blackLight}}
         className="font-thin text-sm pl-4">life</Text>
        </View>
        <Text 
        style={{color:colors.blackLight}} 
        className="font-thin text-sm">{date} ago</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default NoteCard

const styles = StyleSheet.create({})