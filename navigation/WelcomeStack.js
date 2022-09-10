import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

//importing screens in the welcome-stack
import Welcome from '../screens/Welcome'
import AuthPage from '../screens/AuthPage'
import Signup from '../screens/Signup'


const Stack = createNativeStackNavigator()


const WelcomeStack = () => {

    const navigation= useNavigation()
    useLayoutEffect(() => {
     navigation.setOptions({
        headerShown:false,
     })
    }, [navigation])
  return (
  <Stack.Navigator >
<Stack.Screen name='welcome' component={Welcome} />
<Stack.Screen name='auth-page' component={AuthPage} />
<Stack.Screen name='signup' component={Signup} />
  </Stack.Navigator>
  )
}

export default WelcomeStack

const styles = StyleSheet.create({})