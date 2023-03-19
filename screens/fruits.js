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
    </View>
  );
}
