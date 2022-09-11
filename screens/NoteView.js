import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import React,{useLayoutEffect, useEffect, useState} from 'react'
import { useNavigation,useRoute  } from '@react-navigation/native'
import formatDistanceToNow  from 'date-fns/formatDistanceToNow'
//importing icon set
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//importing color pallettes
import {colors} from '../assets/colors'

//importing API 
import {Api} from '../assets/api'

const NoteView = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const {title,description,catergory, createdAt,tags, _id } = route.params
    const [favored, setFavored] = useState(false)
    const handleFavored = ()=>{
setFavored((state)=>(!state))
    }
    const handleDelete = ()=>{
      console.log("deleted")
      Api.delete(`/api/note/delete-note/${_id}`).then((response)=>{
          console.log(response.data)
      }).catch(err=>{
        console.log(err)
      })
    }
    const handleShare = ()=>{
      
    }
    const date = formatDistanceToNow(
      new Date(createdAt)
    ) 
  
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
    style={{backgroundColor:colors.whiteLight}} 
    className='flex-1 items-center p-5 pt-10'>
      <View className='flex-row w-full items-center justify-between mx-5'>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View 
        style={{backgroundColor:colors.whiteLight, opacity:0.6}}
        className='justify-center items-center p-2 rounded-lg'>
        <Feather name="chevron-left" size={24} color={colors.black} />
        </View>
        </TouchableOpacity>
        <View 
        style={{backgroundColor:colors.whiteLight, opacity:0.6}}
        className='justify-center items-center p-2 rounded-lg'>
        <Feather name="edit" size={24} color={colors.black} />
        </View>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false} >
      <View className='justify-center my-3 mt-5'>
        <Text
        className='text-3xl font-extrabold'
        style={{color:colors.black,textTransform:'capitalize'}}
        >{title}</Text>
      </View>
      <View className='justify-center w-full my-3 '>
        <Text 
        style={{color:colors.blackLight}}
        className='text-xs font-thin '>
            {date} ago
        </Text>
      </View>
      <View className='justify-start w-full my-3 '>
        <Text 
        style={{color:colors.black,textTransform:'capitalize'}}
        className='text-lg font-semibold '>
            {catergory}
        </Text>
      </View>
      <View className='justify-center w-full my-3'>
        <Text 
        className='text-base font-normal italic ' 
        style={{color:colors.black, }}>
            {description}
        </Text>
      </View>
      <View className='flex-row items-center w-full mt-5 space-x-2'>
        {tags.map((tag, index)=>(<Text
        className='text-sm font-thin italic ' 
        style={{color:colors.blackLight,textTransform:'lowercase'}}
        key={index}>{tag}</Text>))}
      </View>
      <View className="pt-8 flex-row space-x-5">
        <TouchableOpacity onPress={handleFavored}>
        { favored ?
        (<MaterialIcons name="star-outline" size={24} color={colors.black} />) :
        (<AntDesign name="star" size={24} color={colors.maroon} /> )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
        <MaterialIcons name="delete-outline" size={24} color={colors.secondary} />
        </TouchableOpacity>
        <TouchableOpacity >
        <MaterialCommunityIcons name="share-variant-outline" size={24} color={colors.lightBlue} />
        </TouchableOpacity>
      </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default NoteView

const styles = StyleSheet.create({})