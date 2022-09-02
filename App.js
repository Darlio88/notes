import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//importing the screens
import Welcome from './screens/Welcome';
import BottomTabs from './navigation/BottomTabs';
const Stack= createNativeStackNavigator()

export default function App() {
  return (
  <TailwindProvider>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='welcome' component={Welcome} />
          <Stack.Screen name='bottom-tabs' component={BottomTabs} />
        </Stack.Navigator>

    </NavigationContainer>
    
  </TailwindProvider>
  );
}


