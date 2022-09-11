import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React,{useLayoutEffect, useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {useSelector} from "react-redux"



//importing the color scheming
import {colors} from '../assets/colors'
//importing backgroundcolors
import {backgroundColors} from "../assets/colors"

//importing icon poacks
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//importing CatergoryCard from components
import CatergoryCard from '../components/CatergoryCard'

//importing the api
import { Api } from '../assets/api';

const Catergories = () => {
  const user = useSelector(state=>state.userDetails.userDetails)
  const navigation= useNavigation()
  const [notes, setNotes] = useState([])

//arrangine the catergories in a state manner

const [personal, setPersonal] = useState([])
const [study, setStudy] = useState([])
const [family, setFamily] = useState([])
const [work, setWork] = useState([])
const [sport, setSport] = useState([])
const [uncatergorized, setUncatergorized] = useState([])

  useLayoutEffect(() => {
        Api.get(`/api/note/get-notes/${user.userId}`).then((res)=>{
    setNotes(res.data)
        }).catch((error)=>{
    console.log(error)
    })
   }, [])

   useEffect(()=>{
    notes.map((note)=>{
      if(note.catergory.toLowerCase()==='personal'){
       return setPersonal((state) =>[...state, note])
      } else if(note.catergory.toLowerCase()==='study'){
        return setStudy((state) =>[...state, note])
      } else if(note.catergory.toLowerCase()==='family'){
        return setFamily((state) =>[...state, note])
      } else if(note.catergory.toLowerCase()==='work'){
        return setWork((state) =>[...state, note])
      } else if(note.catergory.toLowerCase()==='sport'){
        return setSport((state) =>[...state, note])
      } else{
        return setUncatergorized((state)=>[...state, note])
      }
    } )
   },[notes])
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
        className="text-base font-bold italic pl-3"
        style={{color:colors.black}}>List Catergories</Text>
      </View>
      <View className="space-y-2">
      <View className='flex-row justify-around'>
    <CatergoryCard name='personal' count={personal.length}/>
    <CatergoryCard name='study' count={study.length}/>
    </View>
    <View className='flex-row justify-around'>
    <CatergoryCard name='work' count={work.length} />
    <CatergoryCard name='family' count={family.length} />
    </View>
    <View className='flex-row justify-around'> 

    <CatergoryCard name='sport' count={sport.length} /> 
    <CatergoryCard name='uncatergorized' count={uncatergorized.length} />

    </View>
      </View>
    </ScrollView>
      </View>
  )
}

export default Catergories

const styles = StyleSheet.create({})