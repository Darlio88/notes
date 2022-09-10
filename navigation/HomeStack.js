import { StyleSheet, Text, View, } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

//scrrens to be renderedin this stack
import CreateNote from '../screens/CreateNote'
import NoteView from '../screens/NoteView'
import Home from "../screens/Home"

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, [])

  return (
    <Stack.Navigator>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='create-note' component={CreateNote} />
        <Stack.Screen name='note-view' component={NoteView} />
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})