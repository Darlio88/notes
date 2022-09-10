
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store';
import { Provider } from 'react-redux';

//importing the screens
import BottomTabs from './navigation/BottomTabs';
import WelcomeStack from './navigation/WelcomeStack';
const Stack= createNativeStackNavigator()

export default function App() {
  return (
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor} >
  <TailwindProvider>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='welcome-pages' component={WelcomeStack} />
          <Stack.Screen name='bottom-tabs' component={BottomTabs} />
        </Stack.Navigator>
    </NavigationContainer>
    
  </TailwindProvider>
  </PersistGate>
  </Provider>
  );
}


