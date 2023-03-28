import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FruitNames from "./FruitNames";


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
        Meal Type
      </Text>
    </View>
  );
};

const FirstText = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        margin: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          paddingHorizontal: 60,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            color: "#616161",
            textTransform: "capitalize",
            backgroundColor: "white",
          }}
        >
          price
        </Text>
      </View>
      <>
        <TouchableOpacity
          style={{ backgroundColor: "#b2dfdb" }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ padding: 10 }}>Nutritional balance</Text>
        </TouchableOpacity>
        <Modal style={{}} visible={modalVisible} animationType="fade">
          <SafeAreaView
            style={{
              padding: 30,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text>Nutritional balance</Text>
                </View>
                <View>
                  <Text>Diabetes friendly</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 26,
                }}
              >
                <View>
                  <Text>Low carb</Text>
                </View>
                <View>
                  <Text>Nutrient dense</Text>
                </View>
                <View>
                  <Text>paleo</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 26,
                }}
              >
                <View>
                  <Text>High protein</Text>
                </View>
                <View>
                  <Text>Gluten free</Text>
                </View>
                <View>
                  <Text>Keto</Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(false)}
            style={{
              marginTop: 10,
              padding: 30,
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "gray",
                margin: 50,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  padding: 9,
                  color: "white",
                }}
              >
                Back
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </>
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

      <View style={{ alignItems: "center", marginLeft: 10 }}>
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
          <Text style={{ fontWeight: "bold" }}>Vegatable (20 %)</Text>
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
          <Text style={{ fontWeight: "bold" }}>Proteins (20 %)</Text>
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
          <Text style={{ fontWeight: "bold" }}>Saturate (30 %)</Text>
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
          <Text style={{ fontWeight: "bold" }}>Mint (20 %)</Text>
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
          <Text style={{ fontWeight: "bold" }}>Pottasium (20 %)</Text>
        </View>
      </View>
    </View>
  );
};















 
 
 
 

function Details() {
  return (
    <ScrollView>
      <TopMenu />
      <FirstText />
      <FoodItems/>
     
    </ScrollView>
  );
}

export default function DetailsScreen({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView>
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
            <TouchableOpacity  onPress={() => navigation.navigate("Fruit")}>
              <Text style={{ fontWeight: "400", marginTop: 7 }}>
                Edit items
              </Text>
            </TouchableOpacity>
          </View>
        </View>

     
        <FruitNames/>
     

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
      </SafeAreaView>
    </ScrollView>
  );
}
