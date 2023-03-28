import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/welcome";
import DetailsScreen from "../screens/foodmenuscreen";
import CaloriesScreen from "../screens/calories";
import Favorites from "../screens/favorites";
import FruitPicker from "./FruitPicker";

const Stack = createNativeStackNavigator();

export default function Authnavigation() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
 

 
 
 
 
 
      
 
 
      <Stack.Screen
   name="Details"
   component={DetailsScreen}
   options={{ headerShown: false }}
 />
      
       
       
       
       
       
      
      <Stack.Screen
   name="Fruit"
   component={FruitPicker}
   options={{ headerShown: false }}
 />
      
      
      
        <Stack.Screen
          name="Calories"
          component={CaloriesScreen}
          options={{ headerShown: false }}
        />
     
     
     
     
     
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
