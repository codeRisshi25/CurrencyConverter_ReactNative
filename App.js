import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home/home';
import Main from './src/screens/main/main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './App.style.js';
import {MD3DarkTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5C8374',
    Text: '#9EC8B9',
    secondary: '#9EC8B9',
  },
};

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




// async function getCurrency(){
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data['rates']['INR']);
// }
// getCurrency();

// import { SelectList } from 'react-native-dropdown-select-list'

// const App = () => {

//   const [selected, setSelected] = React.useState("");
//   const [data,setData] = React.useState([]);
  
//   React.useEffect(() => 
//     //Get Values from database
//     fetch(url)
//       .then((response) => {
//         // Store Values in Temporary Array
//         let newArray = response.data.map((item) => {
//           return {key: item.id, value: item.name}
//         })
//         //Set Data Variable
//         setData(newArray)
//       })
//       .catch((e) => {
//         console.log(e)
//       })
//   ,[])

//   return(
//     <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
//   )

// };
