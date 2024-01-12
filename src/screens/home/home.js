import { StatusBar } from 'expo-status-bar';
import {Text, View , TouchableOpacity} from 'react-native';
import styles from './home.style.js';
import { useNavigation } from '@react-navigation/native';
import { Button, Surface } from 'react-native-paper';


const Home = () =>{
  navigator = useNavigation();
    return (
        <View style={styles.container}>
        <Surface style={styles.surface} elevation={3}>
        <Text style={styles.Heading}>CURRENCY CONVERTER{'\n'}{'\n'}
        <Button 
            mode={'contained'} 
            buttonColor={'#5C8374'} 
            style={{ height: 50, justifyContent: 'center' }} // Change the height as per your requirement
            labelStyle={{ fontSize: 20 }}
            onPress={() => navigator.navigate('Main')}> 
            START
        </Button>
        </Text>
        </Surface>
        <StatusBar style="auto" />
        </View>

    );
}


export default Home;
