import {  Text, View ,Image,ScrollView,TouchableOpacity,TouchableHighlight,SafeAreaView,Button,onPress, Modal} from 'react-native'
import React  from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const  TopIcons=()=>{
    return(
      <View style={{marginVertical:10,justifyContent:"center",alignContent: ':"center',alignItems: 'center',flexDirection:"row"}}>
        <View style={{}}>
          <Text style={{fontSize:21,marginHorizontal:130,fontWeight:"600"}}>Plantwise</Text>
        </View>
        <View style={{marginVertical:10}}>
          <AntDesign name='menufold' size={20} color="black"/>
        </View>
      </View>
    )
}


const  FirstView=()=>{
  return(
    <View style={{marginVertical:10,justifyContent:"center",alignContent: ':"center',alignItems: 'center'}}>
      <View style={{flexDirection:"row"}}>
       <Text style={{fontSize:17,fontWeight:"500",color:"#616161",textTransform:"capitalize"}}>price</Text>
       <Text style={{fontSize:17,fontWeight:"500",color:"#616161",textTransform:"capitalize",marginHorizontal:95}}>meal type</Text>
       <Text style={{fontSize:17,fontWeight:"500",color:"#616161",textTransform:"capitalize"}}>portion</Text>
       </View>
      </View>
  )
}

const NewView =()=>{
  return(
    <View style={{marginVertical:30,justifyContent:"center",alignContent: ':"center',alignItems: 'center'}}>
      <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:19,fontWeight:"600",color:"#212121",textTransform:"capitalize"}}>$ 2.6</Text>
        <Text style={{fontSize:19,fontWeight:"600",color:"#212121",textTransform:"capitalize",marginHorizontal:75}}>nutritional balance</Text>
        <Text style={{fontSize:19,fontWeight:"600",color:"#212121",textTransform:"capitalize"}}>4</Text>
      </View>
    </View>
  )
}


const SecondView=()=>{
  return(
    <View style={{    flexDirection:"row",marginVertical:30,justifyContent:"center",alignContent: ':"center',alignItems: 'center'}}>
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
        </View>
        <View style={{marginHorizontal:50}} >
       <Text style={{fontWeight:"bolder",color:"#bcaaa4",textTransform:"capitalize"}}> 
       <View style={{backgroundColor:"#00695c",width:8,height:8,flexDirection:"row",borderRadius:4,marginHorizontal:5}}>
        </View>vegetable (50%)</Text>
       
        <Text style={{fontWeight:"bolder",color:"#bcaaa4",textTransform:"capitalize",marginVertical:10}}>
        <View style={{backgroundColor:"#448aff",width:8,height:8,flexDirection:"row",borderRadius:4,marginHorizontal:5}}>
          </View> carb (25%)</Text>
        
         <Text style={{fontWeight:"bolder",color:"#bcaaa4",textTransform:"capitalize"}}>
        <View style={{margin:5,backgroundColor:"#ffeb3b",width:8,height:8,flexDirection:"row",borderRadius:4,marginHorizontal:5}}>
          </View>protein (2%)</Text>
        </View>
      </View>
  )
}


const TextView=()=>{
  return(
    <View  style={{marginVertical:5,justifyContent:"center",alignContent: ':"center',alignItems: 'center'}}>
      <Text style={{color:"#bcaaa4",fontWeight:"bolder",textTransform:"capitalize",marginVertical:4}}>aim to build the plate in the following breakdown</Text>
      <Text style={{color:"#bcaaa4",fontWeight:"bolder",textTransform:"capitalize",marginVertical:4}}>50 % vegetable, 20% protein , 30 % caborhydrates</Text>
    </View>
  )
}

const ClimateView=()=>{
  return(
    <View  style={{marginVertical:30,justifyContent:"center",alignContent: ':"center',alignItems: 'center'}}>
        <View style={{flexDirection:"row" ,}}>
               <View style={{padding:15}}>
                <Fontisto name='day-sunny' size={18} style={{color:"black",}}/>
                   <Text style={{fontWeight:"400",fontSize:15,textTransform:"capitalize",color:"#212121",marginVertical:10}}>climate</Text>
                </View>
              <View style={{marginHorizontal:40,backgroundColor:"#ffcdd2",padding:15,borderRadius:5}}>
                <Ionicons name='leaf-outline' size={18} style={{color:"black",}}/>
                    <Text style={{fontWeight:"400",fontSize:15,textTransform:"capitalize",color:"#212121",marginVertical:10}}>nutrition</Text>
              </View>
              <View style={{backgroundColor:"#ffcdd2",padding:15,borderRadius:5}}>
              <FontAwesome name="money" size={18} style={{color:"",}} />
                    <Text style={{fontWeight:"400",fontSize:15,textTransform:"capitalize",color:"#212121",marginVertical:10}}>price</Text>
              </View>
       </View>
        </View>
  )
}



const  DownBotton=({navigation})=>{
  return(
<View>

</View>
  )
}








function Home() {
    return (
        <ScrollView style={{flex:1}}>
            <TopIcons/>  
             <FirstView/>
             <NewView/>
             <SecondView/>
             <TextView/>
             <ClimateView/>
             <DownBotton/>
        </ScrollView>
  )
}



export default function HomeScreen({navigation}) {
      return (
        <View>
<Home/>
      <View  style={{overflow:"hidden",marginVertical:30,justifyContent:"center",alignContent: ':"center',alignItems:
     'center',flexDirection:"row"}}>
      <View style={{flexDirection:"row"}}>
      <AntDesign name="hearto" size={24} color="black"style={{marginHorizontal:5}} />
 <MaterialCommunityIcons style={{marginHorizontal:50}}  name="transit-connection-horizontal" size={24}/>
      </View>

<Button
title='generate new food' onPress={()=>navigation.navigate("Details")}/>
        </View>
       </View>
      )
    }













