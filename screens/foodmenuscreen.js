import { View, Text,ScrollView,SafeAreaView,Button,TouchableOpacity ,StyleSheet,TouchableHighlight} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Friuts from '../components/fruits';
import { MaterialCommunityIcons } from '@expo/vector-icons';









const  TopIcons=()=>{
    return(
      <View style={{marginVertical:10,justifyContent:"center",alignItems: 'center',flexDirection:"row"}}>
        <View style={{}}>
          <Text style={{fontSize:21,marginHorizontal:130,fontWeight:"600"}}>meal Type</Text>
        </View>
        <View style={{marginVertical:10}}>
          <AntDesign name='menufold' size={20} color="black"/>
        </View>
      </View>
    )
}


const  FirstView=()=>{
  return(
    <View style={{marginVertical:10,justifyContent:"center",alignItems: 'center'}}>
      <View style={{flexDirection:"row"}}>
       <Text style={{fontSize:17,fontWeight:"500",color:"#616161",textTransform:"capitalize"}}>price</Text>
       <Text style={{fontSize:17,fontWeight:"500",color:"#616161",textTransform:"capitalize",marginHorizontal:95}}>meal type</Text>
       <Text style={{fontSize:17,fontWeight:"500",color:"#616161",textTransform:"capitalize"}}>portion</Text>
       </View>
      </View>
  )
}

const NewView=()=>{
  return(
    <View style={{marginVertical:30,justifyContent:"center",alignItems: 'center'}}>



      
    </View>
  )
}

const SecondView=()=>{
  return(
    <View style={{  flexDirection:"row",marginVertical:20,justifyContent:"center",alignItems: 'center'}}>

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
      <Text style={{fontWeight:"bold",fontSize:27,marginVertical:5}}>450 </Text>
      <Text style={{marginVertical:18,marginHorizontal:5}}>cal</Text>
      </View>
      <View style={{marginLeft:10}}>
      <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
      </View>
    </View>
     </View>
      </View>
       
       <View style={{marginHorizontal:50}}>
       <Text style={{fontWeight:"500",color:"#7b1fa2",textTransform:"capitalize",marginVertical:10}}> 
       <View style={{backgroundColor:"#00695c",width:8,height:8,flexDirection:"row",
       borderRadius:4,marginHorizontal:5}}>
        </View>vegetable (50%)</Text>
       
        <Text style={{fontWeight:"500",color:"#7b1fa2",textTransform:"capitalize",marginVertical:10}}> 
       <View style={{backgroundColor:"#ffee58",width:8,height:8,flexDirection:"row",
       borderRadius:4,marginHorizontal:5}}>
        </View>protein (25%)</Text>
       
        <Text style={{fontWeight:"500",color:"#7b1fa2",textTransform:"capitalize",marginVertical:10}}> 
       <View style={{backgroundColor:"#7e57c2",width:8,height:8,flexDirection:"row",
       borderRadius:4,marginHorizontal:5}}>
        </View>fat (22%)</Text>

        <Text style={{fontWeight:"500",color:"#7b1fa2",textTransform:"capitalize",marginVertical:10}}> 
       <View style={{backgroundColor:"#ff5252",width:8,height:8,flexDirection:"row",
       borderRadius:4,marginHorizontal:5}}>
        </View>iron(18%)</Text>
       
        <Text style={{fontWeight:"500",color:"#7b1fa2",textTransform:"capitalize",marginVertical:10}}> 
       <View style={{backgroundColor:"#7b1fa2",width:8,height:8,flexDirection:"row",
       borderRadius:4,marginHorizontal:5}}>
        </View>saturate (5%)</Text>
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


function Details(){
  return(
  <ScrollView>
 <TopIcons/>
 <FirstView/>
 <NewView/>
 <SecondView/>

 

  </ScrollView>
  )
}


export default function DetailsScreen({navigation}) {
  return (
    <View>
      <Details/>
     
      <View>
         

    <View style={{justifyContent:"center",alignItems:"center"}}>
     <View style={{flexDirection:"row"}}>
     <Text style={{marginRight:40,fontSize:30,fontWeight:"500",color:"#212121",textTransform:"capitalize"}}>current meal</Text>
     <TouchableOpacity onPress={()=>navigation.navigate("Fruits")} >
    <Text style={{color:"",marginHorizontal:50,marginTop:10}}>edit items</Text>
     </TouchableOpacity>
     </View>
    </View>
  

      </View>

      <FruitList/>
      <View>
        
         <View  style={{overflow:"hidden",marginVertical:30,justifyContent:"center",alignContent: ':"center',alignItems:'center',flexDirection:"row"}}>
      <View style={{flexDirection:"row",marginHorizontal:15}}>
      <AntDesign name="hearto" size={24} color="black"style={{marginHorizontal:5}} />
      <MaterialCommunityIcons style={{marginHorizontal:50}}  name="transit-connection-horizontal" size={24}/>
        </View>

         <View style={{borderRadius:10,overflow:"hidden",}}>
         <Button title='generate new fruit' onPress={()=>navigation.navigate("Calories")}/>
         </View>
                     
       </View>
       </View>
    </View>
  )
}

