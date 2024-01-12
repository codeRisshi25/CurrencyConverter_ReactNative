import Home from './src/screens/home/home';
import Main from './src/screens/main/main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MD3DarkTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </PaperProvider>
  );
}


