import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

//importing Bottom tab navigator components 
import Home from '../screens/Home'
import Favorites from '../screens/Favorites'
import Catergories from '../screens/Catergories'
import Settings from '../screens/Settings'
const Tabs = createBottomTabNavigator()

const BottomTabs = () => {
  const navigation = useNavigation();
 useLayoutEffect(() => {
  navigation.setOptions({
    headerShown:false,
  })
 }, [])
  return (
    <Tabs.Navigator>
        <Tabs.Screen name='home' component={Home} />
        <Tabs.Screen name='favorites' component={Favorites} />
        <Tabs.Screen name='catergories' component={Catergories} />
        <Tabs.Screen name='settings' component={Settings} />
    </Tabs.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})