import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//importing colors
import { colors } from '../assets/colors'

const NoteCard = () => {
  return (
    <View 
    style={{backgroundColor:colors.maroon, opacity:0.7}}
     className='px-3 py-5 rounded-xl mt-2'>
      <Text style={{color:colors.black}} className="font-bold text-base">My favorite day in school</Text>
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
        className="font-thin text-sm">21/04/2022</Text>
      </View>
    </View>
  )
}

export default NoteCard

const styles = StyleSheet.create({})