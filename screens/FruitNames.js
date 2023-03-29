import React ,{useState} from "react";
import { View, Text, ScrollView } from "react-native";

export default function FruitNames() {
  const [Fruits,setFruits]= useState([
    {
      id: "Mangoes",
      quality: " (30 %)",
    },
    {
      id: "vegetable",
      quality: " (10 %)",
    },
    {
      id: "protein",
      quality: " (3 %)",
    },
    {
      id: "pears",
      quality: " (0 %)",
    },
  ]);

  return (
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}>
      {Fruits.map((Fruit) => {
        return (
          <View
            style={{
              padding: 30,
              margin: 10,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Text>{Fruit.id}</Text>
            <Text>{Fruit.quality}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
