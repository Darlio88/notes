import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect, useEffect} from 'react'
import { useNavigation} from '@react-navigation/native'
import ProgressBar from 'react-native-progress/Bar';

//importing colors
import {colors} from '../assets/colors'

const Welcome = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
  navigation.setOptions({
    headerShown:false,
  })
  }, [])
useEffect(() => {
 setTimeout(() => {
  navigation.navigate('bottom-tabs')
 }, 1000);
}, [navigation])

  return (
    <View 
    className="full-screen flex-1 justify-around items-center" 
    style={{backgroundColor:colors.black}}>
      <View className='justify-center items-center space-y-3'>
        <Image 
        source={require('../assets/writing.png')} 
        style={{width:72, height:72, resizeMode:'contain'}} />
      <Text 
      className='font-bold text-lg' 
      style={{color:colors.whiteLight}}>
        Notes
        </Text>
      <View  className='justify-center items-center space-y-1'>
      <Text 
      className='text-xs font-thin italic'
      style={{color:colors.whiteLight}}>
        Easily manage your notes on your phone
      </Text>
      <Text 
      className='text-xs font-thin italic'
      style={{color:colors.whiteLight}}>
        &you can have infinite notes
      </Text>
      </View>
      </View>
      <View>
      <ProgressBar color={colors.whiteLight} size={30} indeterminate={true} />
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})