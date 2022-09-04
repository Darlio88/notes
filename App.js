import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//importing the screens
import BottomTabs from './navigation/BottomTabs';
import WelcomeStack from './navigation/WelcomeStack';
const Stack= createNativeStackNavigator()

export default function App() {
  return (
  <TailwindProvider>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='welcome-pages' component={WelcomeStack} />
          <Stack.Screen name='bottom-tabs' component={BottomTabs} />
        </Stack.Navigator>

    </NavigationContainer>
    
  </TailwindProvider>
  );
}


