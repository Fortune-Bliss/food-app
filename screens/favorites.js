import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Fruits from './fruits'
import FruitItems from '../components/fruits'
import { AntDesign } from '@expo/vector-icons';

const Detail=()=>{
    return(
        <View>
             <View style={{ margin: 30, flexDirection: "row" ,alignItems: 'center',}}>
   <View
     style={{
       borderWidth: 15,
       borderTopColor: "#69f0ae",
       width: 100,
       height: 100,
       borderRadius: 50,
       borderBottomColor: "#b388ff",
       borderLeftColor: "#69f0ae",
       borderRightColor: "#ffee58",
     }}
   >
     <View style={{ marginTop:18,margin:20}}>
       <Text style={{ fontWeight: "bold", fontSize: 17 }}>450</Text>
       <Text
         style={{
           marginLeft: 3,
           color: "#009688",
           fontWeight: "bold",
         }}
       >
         cal
       </Text>
     </View>
   </View>


            <View style={{marginLeft:40}}>
                <Text style={{fontWeight:"bold",fontSize:23}}>Custom name</Text>
                <Text style={{fontWeight:"500",marginTop:8,textTransform:"capitalize",color:"#9e9e9e"}}>potatoes, red pepper, cucumber,mint</Text>
                <Text style={{marginTop:8,marginRight:22,color:"#9e9e9e"}}>14 November 2023</Text>
            </View>
        </View>
        </View>
    )
}


export default function Favorites({navigation}) {
  return (
    <ScrollView>
        <View style={{alignItems:"center",margin:30,justifyContent: 'space-between',flexDirection:"row"}}>
            <TouchableOpacity onPress={()=> navigation.navigate("Calories")}>
            <AntDesign name="back" size={20} color="black" />
                </TouchableOpacity>
            <Text style={{fontWeight:"bold",fontSize:25}}>Favorites</Text>
        </View>
<Detail/>
<Detail/>
<Detail/>
<Detail/>
    </ScrollView>
  )
}