import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const TopNavigation = () => {
  return <View></View>;
};

const SecondLayout = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 30,
      }}
    >
      <View
        style={{
          borderWidth: 4,
          borderColor: "tomato",
          borderRadius: 3,
          padding: 15,
        }}
      >
        <Text style={{ marginVertical: 5, fontWeight: "500" }}>Energy</Text>
        <Text style={{ marginVertical: 5 }}>25 g</Text>
        <Text style={{ marginVertical: 5 }}>2%</Text>
      </View>
      <View style={{ marginTop: 23 }}>
        <Text style={{ marginVertical: 5, fontWeight: "500" }}>Iron</Text>
        <Text style={{ marginVertical: 5 }}>2 g</Text>
        <Text style={{ marginVertical: 5 }}>2%</Text>
      </View>
      <View style={{ marginTop: 23 }}>
        <Text style={{ marginVertical: 5, fontWeight: "500" }}>Saturates</Text>
        <Text style={{ marginVertical: 5 }}>250 g</Text>
        <Text style={{ marginVertical: 5 }}>2%</Text>
      </View>
      <View style={{ marginTop: 23 }}>
        <Text style={{ marginVertical: 5, fontWeight: "500" }}>Fats</Text>
        <Text style={{ marginVertical: 5 }}>205 g</Text>
        <Text style={{ marginVertical: 5 }}>2%</Text>
      </View>
    </View>
  );
};

const CurrentScreen = () => {
  return (
    <View style={{ alignItems: "center", padding: 10 }}>
      <Text
        style={{
          fontWeight: "500",
          fontSize: 28,
        }}
      >
        Current Fruit{" "}
      </Text>
    </View>
  );
};

const FoodList2 = () => {
  const [deleteFruit, setDeleteFruit] = useState("");
  return (
    <View
      style={{
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={require("../Pictures/fruit3.png")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginTop: 6,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ marginVertical: 8, fontWeight: "bold" }}>
            Red Pepper
          </Text>
          <Text>switch </Text>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>- 250g </Text>
          </View>
          <TouchableOpacity>
            <View></View>
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 5 }}>1% protein</Text>
      </View>
    </View>
  );
};

const FoodList3 = () => {
  return (
    <View
      style={{
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={require("../Pictures/fruit2.png")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginTop: 6,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ marginVertical: 8, fontWeight: "bold" }}>Apples</Text>
          <Text>switch </Text>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>- 250g </Text>
          </View>
          <View></View>
        </View>
        <Text>20% vegetable</Text>
      </View>
    </View>
  );
};

const FoodList4 = () => {
  return (
    <View
      style={{
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={require("../Pictures/fruits.png")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginTop: 7,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ marginVertical: 8, fontWeight: "bold" }}>Grapes</Text>
          <Text>switch </Text>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>- 50g </Text>
          </View>
          <View></View>
        </View>
        <Text>10% protein</Text>
      </View>
    </View>
  );
};

const FoodList5 = () => {
  return (
    <View
      style={{
        padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={require("../Pictures/fruit2.png")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginTop: 6,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ marginVertical: 8, fontWeight: "bold" }}>
            Egg plant
          </Text>
          <Text>switch </Text>
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>- 25g </Text>
          </View>
          <View></View>
        </View>
        <Text style={{ fontWeight: "100" }}>1% vegetable</Text>
      </View>
    </View>
  );
};

const ButtonView = () => {
  return <View></View>;
};
export default function FruitPicker({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 30,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Calories")}>
          <AntDesign
            name="back"
            size={24}
            color="black"
            style={{ marginTop: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
          }}
        >
          Edit Items
        </Text>
      </View>
      <TopNavigation />
      <SecondLayout />
      <CurrentScreen />
      <FoodList2 />
      <FoodList3 />
      <FoodList4 />
      <FoodList5 />
      <ButtonView />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Calories")}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                backgroundColor: "tomato",
                padding: 10,
                paddingHorizontal: 70,
                borderRadius: 20,
              }}
            >
              Save Items
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
