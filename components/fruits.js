import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function Friuts() {
  return (
    <View style={{justifyContent:"center",alignItems: 'center',marginVertical:18}}>
        <View style={{flexDirection:"row"}}>
            <Image source={require("../pictures/fruits.png")} style={{width:30,height:30,marginHorizontal:39}}/>
            <Image source={require("../pictures/fruit3.png")} style={{width:30,height:30,marginHorizontal:39}}/>
            <Image source={require("../pictures/fruits.png")} style={{width:30,height:30,marginHorizontal:39}}/>
            <Image source={require("../pictures/fruits.png")} style={{width:30,height:30,marginHorizontal:39}}/>
        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:17,marginHorizontal:20,color:"#7b1fa2"}}>potato</Text>
            <Text style={{fontSize:17,marginHorizontal:20,color:"#7b1fa2"}}>redpepper</Text>
            <Text style={{fontSize:17,marginHorizontal:20,color:"#7b1fa2"}}>cucumber</Text>
            <Text style={{fontSize:17,marginHorizontal:20,color:"#7b1fa2"}}>mint</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={{marginHorizontal:37,marginTop:8,color:"#7b1fa2"}}>(20%)</Text>
            <Text style={{marginHorizontal:37,marginTop:8,color:"#7b1fa2"}}>(20%)</Text>
            <Text style={{marginHorizontal:37,marginTop:8,color:"#7b1fa2"}}>(20%)</Text>
            <Text style={{marginHorizontal:37,marginTop:8,color:"#7b1fa2"}}>(20%)</Text>
        </View>
    </View>
  )
}