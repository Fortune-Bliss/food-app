import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import FruitNames from "../screens/FruitNames"
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const TopView = () => {
  return (
    <View style={{ margin: 30, flexDirection: "row" }}>
      <View
        style={{
          borderWidth: 20,
          borderTopColor: "#69f0ae",
          width: 140,
          height: 140,
          borderRadius: 70,
          borderBottomColor: "#ffee58",
          borderLeftColor: "#69f0ae",
          borderRightColor: "#ffee58",
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 20 ,marginLeft:10}}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>450</Text>
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
      <View
        style={{
          alignItems: "center",
          marginLeft: 5,
        }}
      >
        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#00e676",
              marginTop: 8,
            }}
          />
          <Text style={{ color: "#ff8a80", marginHorizontal: 5 }}>
            vegetable (180 cal)
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", marginVertical: 6, marginRight: 6 }}
        >
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#8d6e63",
              marginTop: 8,
            }}
          />
          <Text style={{ color: "#ff8a80", marginHorizontal: 5 }}>
            Legumes (15 cal)
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", marginVertical: 6, marginLeft: 15 }}
        >
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#ffff00",
              marginTop: 8,
            }}
          />
          <Text style={{ color: "#ff8a80", marginHorizontal: 5 }}>
            Wholegrain (120 cal)
          </Text>
        </View>
      </View>
    </View>
  );
};

const TextAreaa = () => {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Current Food</Text>
    </View>
  );
};

const FruitItem = () => {
  return (
    <View>
      <FruitNames />
    </View>
  );
};

const BottomIcons = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 30,
      }}
    >
      <View
        style={{ backgroundColor: "#69f0ae", padding: 10, borderRadius: 5 }}
      >
        <Fontisto name="day-sunny" size={20} color={"black"} />
        <Text style={{ fontWeight: "bold", marginTop: 10, color: "white" }}>
          Climate
        </Text>
      </View>
      <View
        style={{ backgroundColor: "#69f0ae", padding: 15, borderRadius: 5 }}
      >
        <Ionicons name="leaf-outline" size={20} color={"black"} />
        <Text style={{ fontWeight: "bold", marginTop: 10, color: "white" }}>
          B
        </Text>
      </View>
      <View
        style={{ backgroundColor: "#69f0ae", padding: 10, borderRadius: 5 }}
      >
        <FontAwesome name="money" size={20} color={"black"} />
        <Text style={{ fontWeight: "bold", marginTop: 10, color: "white" }}>
          $ 3.5
        </Text>
      </View>
    </View>
  );
};

function Calories() {
  return (
    <SafeAreaView>
      <TopView />
      <TextAreaa />
      <FruitItem/>
      <BottomIcons />
    </SafeAreaView>
  );
}

export default function CaloriesScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{flexDirection:"row"
        ,padding:30,
        justifyContent:"space-between",
      
        }}
      >
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate("Details")}
        >
          <AntDesign name="back" size={24} color="black" style={{marginTop:10}} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 26, }}>
            Calories Breakdown
          </Text>
        </View>
      </View>
      <Calories />
      <TouchableOpacity
        style={{ alignItems: "center", marginTop: 10 }}
        onPress={() => navigation.navigate("Favorites")}
      >
        <View style={{ backgroundColor: "#f1f8e9", padding: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Add To Favorites
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
