import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation} from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
//importing the icon sets
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//importing colors
import {colors} from '../assets/colors'

import {APi} from '../assets/api'
import { saveUser } from '../features/userSlice';


const Settings = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const user = useSelector(state=>state.userDetails.userDetails)
  useLayoutEffect(()=>{
navigation.setOptions({
  headerShown:false,
})
  })

const handleUpdateUser = ()=>{

}

const handleDeleteAccount = ()=>{
  APi.delete(`/api/user/delete-user/${user.userId}`).then(()=>{
  dispatch(saveUser({userId:"", userName:"", userEmail:""}))
  navigation.navigate('auth-page')
  }).catch((err)=>{

  })
}

const handleLogoutUser = ()=>{
  dispatch(saveUser({userId:"", userName:"", userEmail:""}))
  navigation.navigate('auth-page')
}

  return (
    <SafeAreaView className='p-8 w-full items-center'>
        <View className='mt-5 w-full'>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <View>
          <Image 
          source={require("../assets/man.png")} 
          style={{resizeMode:"contain", width:160, height:160}} />
        </View>
        <View className='w-full mt-6 space-y-2'>
            <View className='flex-row space-x-2'>
                <Text style={{color:colors.black}} className='text-lg font-bold'>UserName:</Text>
                <Text style={{color:colors.blackLight}} className='text-lg font-semibold'>{user.userName}</Text>  
            </View>
            <View className='flex-row space-x-2'>
                <Text style={{color:colors.black}} className='text-lg font-bold'>Email:</Text>
                <Text style={{color:colors.blackLight}} className='text-lg font-semibold'>{user.userEmail}</Text>  
            </View>
        </View>
        <View className="w-full mt-16 space-y-3">
        <TouchableOpacity 
        onPress={handleUpdateUser}
        className='flex-row items-center space-x-2'>
          <MaterialCommunityIcons name="account-edit-outline" size={24} color={colors.lightBlue} />
          <Text
          style={{color:colors.lightBlue}}
          >Update User</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={handleLogoutUser}
          className='flex-row items-center space-x-2'>
          <MaterialIcons name="logout" size={24} color={colors.maroon} />
            <Text style={{color:colors.maroon}}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={handleDeleteAccount}
          className='flex-row items-center space-x-2'>
          <MaterialCommunityIcons name="delete-forever-outline" size={24} color={colors.secondary} />
          <Text
          style={{color:colors.secondary}}
          >Delete Account</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({})