import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/welcome';
import DetailsScreen from '../screens/foodmenuscreen';





const Stack= createNativeStackNavigator()


export default function Authnavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{
        headerShown:false
      }}>
     <Stack.Screen name='Home' component={HomeScreen}/>
     <Stack.Screen name='Details' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}