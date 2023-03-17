import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/welcome';
import DetailsScreen from '../screens/foodmenuscreen';
import CaloriesScreen from '../screens/calories';
import Fruits from '../screens/fruits';



const Stack= createNativeStackNavigator()


export default function Authnavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator  >        
      



      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
 <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}}/>
 <Stack.Screen name="Calories" component={CaloriesScreen} options={{headerShown:false}}/>
 <Stack.Screen name="Fruits" component={Fruits} options={{headerShown:false}}/>
  
    
      </Stack.Navigator>
    </NavigationContainer>
  )
}