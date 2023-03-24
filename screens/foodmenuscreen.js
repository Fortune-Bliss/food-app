import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FruitItems from "../components/fruits";
import Fruits from "./fruits";

const TopMenu = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          fontWeight: "bold",
          marginTop: 25,
          fontSize: 26,
        }}
      >
        Meals Type
      </Text>
    </View>
  );
};

const FirstText = () => {
  const [bgColor, setBgColor] = useState("price");
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        margin: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => setBgColor("price")}
        style={{
          backgroundColor: bgColor == "price" ? "#ffcdd2" : "transparent",
          padding: 10,
        }}
      >
        <Text
          style={{
            color: bgColor == "price" ? "white" : "black",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          price
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setBgColor("meals")}
        style={{
          backgroundColor: bgColor == "meals" ? "#ffcdd2" : "transparent",
          padding: 10,
        }}
      >
        <Text
          style={{
            color: bgColor == "meals" ? "white" : "black",
            fontSize: 15,
          }}
        >
          Meal types
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setBgColor("portion")}
        style={{
          backgroundColor: bgColor == "portion" ? "#ffcdd2" : "transparent",
          padding: 10,
        }}
      >
        <Text
          style={{
            color: bgColor == "portion" ? "white" : "black",
            fontSize: 15,
          }}
        >
          Protein
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const FoodItems = () => {
  return (
    <View style={{ flexDirection: "row", margin: 30 }}>
      <View
        style={{
          width: 140,
          height: 140,
          borderWidth: 15,
          borderColor: "#ffcdd2",
          borderTopColor: "#009688",
          borderLeftColor: "#009688",
          borderBottomColor: "#ffeb3b",
          borderRadius: 70,
        }}
      >
        <View style={{ margin: 40, flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 23 }}>450</Text>
          <Text
            style={{
              marginLeft: 3,
              marginTop: 7,
              color: "#009688",
              fontWeight: "bold",
            }}
          >
            cal
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center", marginLeft: 90 }}>
        <View style={{ flexDirection: "row", marginVertical: 4 }}>
          <View
            style={{
              backgroundColor: "#26a69a",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 7,
              marginTop: 6,
            }}
          />
          <Text style={{ color: "", fontWeight: "bold" }}>
            Vegatable (20 %)
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", marginVertical: 4, marginRight: 18 }}
        >
          <View
            style={{
              backgroundColor: "#ffeb3b",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 7,
              marginTop: 6,
            }}
          />
          <Text style={{ color: "", fontWeight: "bold" }}>Proteins (20 %)</Text>
        </View>

        <View
          style={{ flexDirection: "row", marginVertical: 4, marginRight: 8 }}
        >
          <View
            style={{
              backgroundColor: "#673ab7",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
              marginTop: 6,
            }}
          />
          <Text style={{ color: "", fontWeight: "bold" }}>Saturate (30 %)</Text>
        </View>

        <View
          style={{ flexDirection: "row", marginVertical: 4, marginRight: 30 }}
        >
          <View
            style={{
              backgroundColor: "#ff5252",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
              marginTop: 6,
            }}
          />
          <Text style={{ color: "", fontWeight: "bold" }}>Mint (20 %)</Text>
        </View>

        <View
          style={{ flexDirection: "row", marginVertical: 4, marginRight: 4 }}
        >
          <View
            style={{
              backgroundColor: "#eeff41",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 5,
              marginTop: 6,
            }}
          />
          <Text style={{ color: "", fontWeight: "bold" }}>
            Pottasium (20 %)
          </Text>
        </View>
      </View>
    </View>
  );
};

const Fruit = () => {
  return (
    <View>
      <FruitItems />
    </View>
  );
};

const CurrentMeals = () => {
  return <View></View>;
};

function Details() {
  return (
    <ScrollView>
      <TopMenu />
      <FirstText />
      <FoodItems />
      <Fruit />
    </ScrollView>
  );
}

export default function DetailsScreen({ navigation }) {
  return (
    <View>
      <Details />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 30,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              color: "#212121",
            }}
          >
            Current Meals
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Fruits")}>
            <Text style={{ fontWeight: "400", marginTop: 7 }}>Edit items</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CurrentMeals />

      <View>
        <View
          style={{
            overflow: "hidden",
            marginVertical: 30,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            margin: 27,
          }}
        >
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={{ marginHorizontal: 10 }}
          />
          <MaterialCommunityIcons
            style={{}}
            name="transit-connection-horizontal"
            size={24}
          />
          <View style={{ borderRadius: 10, overflow: "hidden" }}>
            <Button
              title="generate new Fruit"
              onPress={() => navigation.navigate("Calories")}
              animationType="slide"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
