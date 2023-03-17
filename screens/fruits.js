import { View, Text ,SafeAreaView,TouchableOpacity,Image,onPress} from 'react-native'
import React from 'react'


const TopIcon=()=>{
    return(
        <View style={{justifyContent: 'center',alignItems: 'center',marginTop:30,flexDirection:"row",marginHorizontal:10}}>
           <View style={{marginHorizontal:30,backgroundColor:"#f1f8e9",padding:10,borderRadius:20,borderWidth:3,borderColor:"#ea80fc"}}>
            <Text style={{fontWeight:"bold",color:"#ab47bc"}}>Energy</Text>
            <Text style={{fontWeight:"300",marginTop:10,color:"#e040fb"}}>220 cal</Text>
            <Text style={{fontWeight:"bold",color:"#ab47bc",marginTop:5}}>19%</Text>
           </View>

           <View style={{marginHorizontal:40}}>
            <Text style={{fontWeight:"bold",color:"#ab47bc"}}>Iron</Text>
            <Text style={{fontWeight:"300",marginTop:10,color:"#e040fb"}}>0.7 g</Text>
            <Text style={{fontWeight:"bold",color:"#ab47bc",marginTop:5}}>21%</Text>
           </View>

           <View style={{marginHorizontal:40}}>
            <Text style={{fontWeight:"bold",color:"#ab47bc"}}>Iron</Text>
            <Text style={{fontWeight:"300",marginTop:10,color:"#e040fb"}}>0.7 g</Text>
            <Text style={{fontWeight:"bold",color:"#ab47bc",marginTop:5}}>21%</Text>
           </View>

           <View style={{marginHorizontal:30}}>
            <Text style={{fontWeight:"bold",color:"#ab47bc"}}>Iron</Text>
            <Text style={{fontWeight:"300",marginTop:10,color:"#e040fb"}}>0.7 g</Text>
            <Text style={{fontWeight:"bold",color:"#ab47bc",marginTop:5}}>21%</Text>
          </View>
        </View>
    )
}





const TextArea=()=>{
    return(
        <View>
    <View style={{justifyContent:"center",alignItems:"center",marginTop:30}}>
    <View style={{flexDirection:"row"}}>
    <Text style={{marginRight:40,fontSize:30,fontWeight:"500",color:"#212121",textTransform:"capitalize"}}>current meal</Text>
    <TouchableOpacity  >
   <Text style={{color:"",marginHorizontal:50,marginTop:10}}>edit items</Text>
    </TouchableOpacity>
    </View>
    </View>
        </View>
    )
}



const FruitItems=()=>{
    return(
        <View style={{marginTop:40,justifyContent: 'center',alignItems: 'center',flexDirection:"row",}}>
  
  
          <View style={{marginHorizontal:50,flexDirection:"row"}}>
                  <Image style={{width:40,height:40,overflow: 'hidden',}} source={require("../pictures/fruits.png")} /> 
           <View style={{marginHorizontal:30,}}>
                    <Text style={{fontWeight:"bold",color:"#ab47bc"}}>Red Pepper</Text>
                    <Text style={{fontWeight:"300",color:"#ab47bc",marginTop:10}}>Switch </Text>
            </View>
            </View>


          <View style={{}}>
            <View style={{marginHorizontal:45,flexDirection:"row"}}>
               <Text style={{color:"#ab47bc",fontWeight:"bold"}}>-   250g  </Text>
               <Text >potatoes</Text>
               </View>
                <Text style={{fontWeight:"300",color:"#ab47bc",marginTop:10,marginHorizontal:80}}>calcium</Text>
          </View>
               
        </View>
    )
}



const Items=({navigation})=>{
    return(
        <TouchableOpacity style={{justifyContent: 'center',alignItems:"center",marginTop:20}} onPress={()=>navigtion.navigate("Calories")}>
              <View style={{backgroundColor:"#e3f2fd",padding:10,borderRadius:10}}>
                <Text style={{color:"black"}}>Add Items</Text>
              </View>
        </TouchableOpacity>
    )
}

























function Detail(){
    return(
        <SafeAreaView>
            <TopIcon/>
             <TextArea/>
             <FruitItems/>
             <FruitItems/>
             <FruitItems/>
             <FruitItems/>
             <Items/>
        </SafeAreaView>
    )
}



export default function Fruits() {
  return (
    <View style={{backgroundColor:"#f9fbe7",flex:1}}>
        <View style={{justifyContent:"Center",alignItems: 'center',marginTop:10}}>
            <Text style={{fontWeight:"bold",fontSize:23}}>Edit Items</Text>
        </View>
     <Detail/>
    </View>
  )
}