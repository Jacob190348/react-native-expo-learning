import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import CountScreen from '../pages/CountScreenScreen';

const Stack = createStackNavigator();

export default function  Navigation () {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name= "Profile" component={ProfileScreen}/>
        <Stack.Screen name= "Count" component={CountScreen}/>
      </Stack.Navigator>
    );
}