import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import {colors} from '../assets/colors'

//importing api
import { Api } from '../assets/api';

const Signup = () => {
    const [userEmail, setUserEmail]= useState()
    const [userName, setUserName]= useState()
    const [password,setPassword] = useState()
 
const navigation = useNavigation()
useLayoutEffect(() => {
 navigation.setOptions({
headerShown:false,
 })
}, [])
const handleSubmit =() =>{
Api.post('/user/sign-up',{
  userEmail:"ateraraaron@gmail.com",
  userName:"ateraraaron",
  password:"fuckojimum"
}).then(function (response) {
  console.info(response);
})
.catch(function (error) {
  console.info(error);
});
}

  
return (
  <View 
  style={{backgroundColor:colors.black}}
  className='flex-1 justify-center items-center px-4'>
   <KeyboardAvoidingView 
   style={{borderColor:colors.white}}
   className='w-full border rounded-md items-center justify-center pb-2 py-4 px-2 mx-2 my-2'>
   <TextInput
     placeholder='Email'
     keyboardType='email-address'
     value={userEmail}
     onChangeText={setUserEmail}
     className='rounded-lg py-1 px-2 my-3 '  
    style={{borderWidth:1, borderColor:colors.whiteLight, width:'80%', alignItems:'center', color:colors.whiteLight}}
    placeholderTextColor={colors.white} />
    <TextInput 
    placeholder='UserName'
    className='rounded-lg py-1 px-2 my-3 '
    value={userName}
     onChangeText={setUserName}  
    style={{borderWidth:1, borderColor:colors.whiteLight, width:'80%', alignItems:'center', color:colors.whiteLight}}
    placeholderTextColor={colors.white}/>
      <TextInput 
    placeholder='Password'
    secureTextEntry={true}
    className='rounded-lg py-1 px-2 my-3 '
    value={password}
     onChangeText={setPassword}  
    style={{borderWidth:1, borderColor:colors.whiteLight, width:'80%', alignItems:'center', color:colors.whiteLight}}
    placeholderTextColor={colors.white}/>
    <TouchableOpacity
     onPress={handleSubmit}     
    style={{borderColor:colors.whiteLight, elevation:5, borderWidth:1, width:'80%'}}
    className='flex-row justify-center items-center py-2 px-4  space-x-2 rounded-lg'>
    <AntDesign 
    name="login" 
    size={24} 
    color={colors.whiteLight} />
    <Text 
    className="text-base font-bold"
     style={{color:colors.whiteLight, textTransform:'uppercase'}}>Sign up</Text>
    </TouchableOpacity>
    <View className="flex-row mt-3 space-x-2">
    <Text style={{color:colors.white}}>Already have an account?</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('auth-page')}>
    <Text style={{color:colors.whiteLight}}>SIGN IN</Text>
    </TouchableOpacity>
    </View>
   
   </KeyboardAvoidingView>
  </View>
)
}

export default Signup

const styles = StyleSheet.create({})