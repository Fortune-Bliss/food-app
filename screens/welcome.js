import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Button,
  onPress,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TopIcons = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View style={{}}>
        <Text style={{ fontSize: 21, fontWeight: "600" }}>Plantwise</Text>
      </View>
      <View style={{ position: "absolute", right: 0 }}>
        <AntDesign name="menufold" size={20} color="black" />
      </View>
    </View>
  );
};

const FirstView = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#616161",
          textTransform: "capitalize",
        }}
      >
        price
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#616161",
          textTransform: "capitalize",
        }}
      >
        meal type
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#616161",
          textTransform: "capitalize",
        }}
      >
        portion
      </Text>
    </View>
  );
};

const NewView = () => {
  return (
    <View
      style={{
        marginVertical: 30,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#212121",
          textTransform: "capitalize",
        }}
      >
        $ 2.6
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#212121",
          textTransform: "capitalize",
        }}
      >
        nutritional balance
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#212121",
          textTransform: "capitalize",
        }}
      >
        4
      </Text>
    </View>
  );
};

const SecondView = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginVertical: 30,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 150,
          height: 150,
          borderWidth: 15,
          borderBottomColor: "#ffeb3b",
          borderRadius: 100,
          borderLeftColor: "#00695c",
          borderTopColor: "#00695c",
          borderRightColor: "#448aff",
        }}
      ></View>
      <View style={{ marginLeft: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#00695c",
              width: 8,
              height: 8,
              flexDirection: "row",
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          ></View>
          <Text
            style={{
              fontWeight: "bolder",
              color: "#bcaaa4",
              textTransform: "capitalize",
            }}
          >
            {" "}
            vegetable (50%)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#448aff",
              width: 8,
              height: 8,
              flexDirection: "row",
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          ></View>
          <Text
            style={{
              fontWeight: "bolder",
              color: "#bcaaa4",
              textTransform: "capitalize",
            }}
          >
            {" "}
            carb (25%)
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#ffeb3b",
              width: 8,
              height: 8,
              flexDirection: "row",
              borderRadius: 4,
              marginHorizontal: 5,
            }}
          ></View>
          <Text
            style={{
              fontWeight: "bolder",
              color: "#bcaaa4",
              textTransform: "capitalize",
            }}
          >
            {" "}
            protein (2%)
          </Text>
        </View>
      </View>
    </View>
  );
};

const TextView = () => {
  return (
    <View
      style={{
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#bcaaa4",
          fontWeight: "bolder",
          textTransform: "capitalize",
          marginVertical: 4,
        }}
      >
        aim to build the plate in the following breakdown
      </Text>
      <Text
        style={{
          color: "#bcaaa4",
          fontWeight: "bolder",
          textTransform: "capitalize",
          marginVertical: 4,
        }}
      >
        {" "}
        50 % vegetable, 20% protein , 30 % caborhydrates
      </Text>
    </View>
  );
};

const ClimateView = () => {
  const [bgColor , setBgColor] = useState("climate")

  return (
    <View
      style={{
        marginVertical: 30,
        marginBottom:40,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={()=>setBgColor("climate")}
        style={{
          width: 100,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          borderRadius:20,
          backgroundColor:bgColor=="climate"?"#ffcdd2":"transparent"
        }}
      >
        <Fontisto name="day-sunny" size={18} style={{ color: "black" }} />
        <Text
          style={{
            fontWeight: "400",
            fontSize: 14,
            textTransform: "capitalize",
            color: "#212121",
            marginVertical: 10,
          }}
        >
          climate
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>setBgColor("nutrition")}
        style={{
          width: 100,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor=="nutrition"?"#ffcdd2":"transparent",
          borderRadius: 20,
        }}
      >
        <Ionicons name="leaf-outline" size={18} style={{ color: "black" }} />
        <Text
          style={{
            fontWeight: "400",
            fontSize: 14,
            textTransform: "capitalize",
            color: "#212121",
            marginVertical: 10,
          }}
        >
          nutrition
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>setBgColor("price")}
        style={{
          width: 100,
          height: 80,
          justifyContent: "center",
          backgroundColor: bgColor=="price"?"#ffcdd2":"transparent",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <FontAwesome name="money" size={18} style={{ color: "" }} />
        <Text
          style={{
            fontWeight: "400",
            fontSize: 14,
            textTransform: "capitalize",
            color: "#212121",
            marginVertical: 10,
          }}
        >
          price
        </Text>
      </TouchableOpacity>
    </View>
  );
};

function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <TopIcons />
      <FirstView />
      <NewView />
      <SecondView />
      <TextView />
      <ClimateView />
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <ScrollView>
        <Home />

        <View>
          <View
            style={{
              overflow: "hidden",
              marginVertical: 30,
              justifyContent: "space-between",
              alignContent: ':"center',
              alignItems: "center",
              flexDirection: "row",
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
                title="generate new meal"
                onPress={() => navigation.navigate("Details")}
              />
            </View>

            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
