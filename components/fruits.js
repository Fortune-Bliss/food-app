import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const FruitItems    = () => {
  const fruits = [
    {
      id: "Cucumber",
      quality: "(3 %)",
      Image:<Image source={require("../pictures/fruits.png")}/>,
    },
    {
      id: "Mint",
      quality: "(30 %)",
    },
    {
      id: "Red Pepper",
      quality: "(20 $)",
    },
    {
      id: "Mangoes",
      quality: "(1 %)",
    },
  ];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {fruits.map((fruit) => {
        return (
          <View style={{ margin: 30 }}>
            <View>
             <Image style={{wifth:30,height:30,overflow:"hidden",resizeMode:"contain"}} source={require("../pictures/fruits.png")}/>
              <Text
                style={{
                  fontWeight: "Bold",
                  fontSize: 18,
                  color: "#f8bbd0",
                }}
              >
                {" "}
                {fruit.id}
              </Text>
              <Text style={{ fontWeight: "bold" }}>{fruit.quality}</Text>
            </View>

            <View style={{ marginVertical: 40 }}>
              <View>     
             <Image style={{wifth:100,height:30,overflow:"hidden",resizeMode:"contain"}} source={require("../pictures/fruit3.png")}/>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#f8bbd0",
                }}
              >
                {" "}
                {fruit.id}{" "}
              </Text>
              <Text style={{ fontWeight: "bold" }}>{fruit.quality}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default FruitItems;
