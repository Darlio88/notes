import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

//importing icons packs
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

//importing Bottom tab navigator components 
import Home from '../screens/Home'
import Favorites from '../screens/Favorites'
import Catergories from '../screens/Catergories'
import Settings from '../screens/Settings'
import { colors } from '../assets/colors';
const Tabs = createBottomTabNavigator()

const BottomTabs = () => {
  const navigation = useNavigation();
 useLayoutEffect(() => {
  navigation.setOptions({
    headerShown:false,
  })
 }, [])
  return (
    <Tabs.Navigator
    screenOptions={{
      tabBarShowLabel:false,
      tabBarActiveTintColor:'white',
      tabBarInactiveTintColor:colors.white,
    tabBarStyle:{
      backgroundColor:colors.black,
      borderTopStartRadius:16,
      borderTopEndRadius:16,
      paddingVertical:20,
      justifyContent:'center',
      alignItems:'center'
    }, 
    tabBarIconStyle:{
      fontSize:40
    }
    }}
    >
        <Tabs.Screen 
        name='home' 
        component={Home} 
        options={{
          tabBarIcon:({size, color})=>(<AntDesign name="home" size={size} color={color} />)
        }}
        />
        <Tabs.Screen 
        name='favorites'
         component={Favorites} 
         
         options={{
          presentation:"modal",
          tabBarIcon:({size, color})=>(
            <MaterialCommunityIcons name="crown-outline" size={size} color={color} />)
        }}
         />
        <Tabs.Screen 
        name='catergories' 
        component={Catergories} 
        options={{
          tabBarIcon:({size, color})=>(
            <MaterialCommunityIcons name="dots-grid" size={size} color={color} />)
        }}
        />
        <Tabs.Screen
         name='settings' 
         component={Settings}
         options={{
          tabBarIcon:({size, color})=>(
            <Octicons name="gear" size={size} color={color} />)
        }}
          />
    </Tabs.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})