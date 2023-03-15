import { View, Text ,ScrollView,Button,TouchableOpacity,} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Friuts from '../components/fruits';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const TopNavigation=()=>{
    return(
      <View style={{  flexDirection:"row",marginVertical:40,justifyContent:"center",alignItems: 'center'}}>
  
        <View>
      
     <View >
      <View style={{
        width:150,
        height:150,
        borderWidth:15,
        borderBottomColor: "#ffeb3b",
        borderRadius:100,
        borderLeftColor:"#00695c",
        borderTopColor:"#00695c",
        borderRightColor:"#448aff",
        
        
        
      }}>
        <View style={{margin:30}}>
        <View style={{flexDirection:"row"}}>
        <Text style={{fontWeight:"400",fontSize:27,marginVertical:5}}>450 </Text>
        <Text style={{marginVertical:18,marginHorizontal:5}}>cal</Text>
        </View>
        <View style={{marginLeft:10}}>
        <Ionicons name="chevron-forward" size={24} color="black" />
        </View>
        </View>
      </View>
       </View>
        </View>

         <View style={{marginHorizontal:20}}>
          <Text style={{fontWeight:"500",color:"#7b1fa2",textTransform:"capitalize",marginVertical:10}}> 
         <View style={{backgroundColor:"#ffee58",width:8,height:8,flexDirection:"row",
         borderRadius:4,marginHorizontal:5}}>
          </View>vegetable (180cal)</Text>
         
          <Text style={{fontWeight:"500",color:"#7b1fa2",textTransform:"capitalize",marginVertical:10}}> 
         <View style={{backgroundColor:"#7e57c2",width:8,height:8,flexDirection:"row",
         borderRadius:4,marginHorizontal:5}}>
          </View>legume (150cal)</Text>
  
          <Text style={{fontWeight:"500",color:"#7b1fa2",textTransform:"capitalize",marginVertical:10}}> 
         <View style={{backgroundColor:"#ff5252",width:8,height:8,flexDirection:"row",
         borderRadius:4,marginHorizontal:5}}>
          </View>wholegrain (120cal)</Text>
         </View>
        </View>
    )
  }


  
const TextArea=()=>{
    return(
      <View style={{justifyContent:"center",alignItems:"center"}}>
       <View style={{flexDirection:"row"}}>
       <Text style={{marginRight:40,fontSize:30,fontWeight:"500",color:"#212121",textTransform:"capitalize"}}>current meal</Text>
       <TouchableOpacity>
      <Text style={{color:"",marginHorizontal:50,marginTop:10}}>edit items</Text>
       </TouchableOpacity>
       </View>
      </View>
    )
  }
  
  
  const FruitList=()=>{
    return(
      <View>
     <Friuts/>
      <Friuts/>
      </View>
    )
  }


 const ShoppingButton=()=>{
    return(
    <TouchableOpacity style={{justifyContent:"center",alignItems: 'center',marginTop:20}}>
        <View>
            <Text style={{backgroundColor:"#ffebee",color:"black",paddingHorizontal:20,paddingVertical:20,borderRadius: 18,textTransform:"capitalize",fontWeight:"400"}}>add to shopping list</Text>
        </View>
    </TouchableOpacity>
    )
 } 

 const BottomIcons=()=>{
    return(
        <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
              <View style={{flexDirection:"row" ,}}>
         <View style={{}}>
          <Fontisto name='day-sunny' size={18} style={{color:"black",}}/>
             <Text style={{fontWeight:"400",fontSize:15,textTransform:"capitalize",color:"#212121",marginVertical:10}}>climate</Text>
          </View>
        <View style={{marginHorizontal:120,}}>
          <Ionicons name='leaf-outline' size={18} style={{color:"black",}}/>
              <Text style={{fontWeight:"400",fontSize:15,textTransform:"capitalize",color:"#212121",marginVertical:10,marginRight:10}}>B</Text>
        </View>
        <View style={{}}>
        <FontAwesome name="money" size={18} style={{color:"",}} />
              <Text style={{fontWeight:"bold",fontSize:15,textTransform:"capitalize",color:"#212121",marginVertical:10}}>$ 4-5</Text>
        </View>
 </View>
        </View>
    )
 }
export default function CaloriesScreen() {
  return (
    <ScrollView>
      <TopNavigation/>
      <TextArea/>
      <FruitList/>
      <ShoppingButton/>
      <BottomIcons/>
    </ScrollView>
  )
}