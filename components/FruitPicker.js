import { View, Text, TextInput, Button ,Image} from "react-native";
import React, { useState } from "react";

export default function FruitPicker() {
  const [newFruits, setNewFruits] = useState("");
  const [newFruitsNames, setNewFruitsNames] = useState([]);

  function fruitsId(enteredFruits) {
    setNewFruits(enteredFruits);
  }

  function fruitQuality() {
    setNewFruitsNames((currentNames) => [...currentNames, newFruits]);
  }
  return (
    <View style={{
        padding:30,

    }}>
      <View
      style={{flexDirection:"row",justifyContent: 'space-between',}}
      >
        <TextInput placeholder="enter a fruit" onChangeText={fruitsId}
        style={{
            paddingHorizontal:20,
            fontSize:27,

        }} />
        <Button title="add " onPress={fruitQuality} />
      </View>
<View>
<View>

     {newFruitsNames.map((fruit)=> <Text 
     style={{
        fontWeight:"500",
        fontSize:27,
        padding:10,
 alignItems:"center",
 

     }}>{fruit}</Text>)}
 </View>
</View>
    </View>
  );
}
