import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  onPress,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";

const TopNotch = () => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 40,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          borderWidth: 3,
          borderColor: "#e040fb",
          padding: 7,
          borderRadius: 6,
        }}
      >
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={17}
          color="tomato"
        />
        <Text style={{ color: "#6a1b9a", fontWeight: "bold" }}>Energy</Text>
        <Text style={{ color: "#e040fb" }}>220 cal </Text>
        <Text style={{}}>19%</Text>
      </View>
      <View style={{ marginVertical: 7 }}>
        <MaterialCommunityIcons name="freebsd" size={15} color="#4db6ac" />
        <Text style={{ color: "#6a1b9a", fontWeight: "bold" }}>Iron</Text>
        <Text style={{}}>0.7g</Text>
        <Text style={{}}>21%</Text>
      </View>
      <View style={{ marginVertical: 7 }}>
        <MaterialCommunityIcons name="star-face" size={17} color="#ff5722" />
        <Text style={{ color: "#6a1b9a", fontWeight: "bold" }}>Saturates</Text>
        <Text style={{ color: "#e040fb" }}>0.7g</Text>
        <Text style={{}}>21%</Text>
      </View>
      <View style={{ marginVertical: 7 }}>
        <MaterialCommunityIcons name="star-face" size={17} color="#ff5722" />
        <Text style={{ color: "#6a1b9a", fontWeight: "bold" }}>Fats</Text>
        <Text style={{ color: "#e040fb" }}>0.7g</Text>
        <Text style={{}}>21%</Text>
      </View>
    </View>
  );
};

const Fruitsss = () => {
  return (
    <View
      style={{
        margin: 30,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <View style={{ flexDirection: "row", marginHorizontal: 8 }}>
        <Image
          source={require("../pictures/fruit2.png")}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", color: "#6a1b9a" }}>
            Red Pepper
          </Text>
          <Text>switch</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginHorizontal: 8 }}>
          <Text style={{ color: "#6a1b9a" }}>- 250g</Text>
        </View>
        <View style={{ marginLeft: 18 }}>
          <Foundation name="plus" size={20} color="tomato" style={{}} />
          <Text style={{ fontWeight: "500", marginRight: 18 }}>20 litres</Text>
        </View>
      </View>
    </View>
  );
};

const Current = () => {
  return (
    <View style={{ padding: 30 }}>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          current meal
        </Text>
      </View>
    </View>
  );
};

const SaveBotton = () => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 9,
        margin: 30,
        padding: 20,
        backgroundColor: "tomato",
        alignItems: "Center",
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", color: "#fff" }}>Save Item</Text>
      </View>
    </TouchableOpacity>
  );
};
export default function Fruits({ navigation }) {
  return (
    <View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            margin: 30,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <AntDesign name="back" size={20} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 23,
              marginHorizontal: 40,
              position: "flex-start",
            }}
          >
            Edit Items
          </Text>
        </View>
      </View>
      <TopNotch />
      <Current />
      <Fruitsss />
      <SaveBotton />
    </View>
  );
}
