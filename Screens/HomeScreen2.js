import React, { useEffect, useState } from 'react';
import { View,StyleSheet, StatusBar, Image,Dimensions,Text,TouchableOpacity,ScrollView,ActivityIndicator } from 'react-native';
import colors from '../colors';
import { BlurView } from 'expo-blur';
import { LogBox } from 'react-native';
import { Octicons,Feather } from "@expo/vector-icons";
import { create } from "apisauce";


LogBox.ignoreLogs(['Warning: Each child in a list should have a unique "key" prop.']);
const {width,height}=Dimensions.get("screen");
function HomeScreen2({navigation}) {
  const [listings,setlistings]=useState();
  const [listings1,setlistings1]=useState();
  const listinfo="listings.articles[0]";
  const fromnewsapi11 =true;
   const initialMessages ={"recipes": [
        {
          id: 1,
          title: "Tile of news 1",
          description: "Description_1",
          image: require("../assets/newspaper1.jpg"),
        },
        {
          id: 2,
          title: "Tile of news 2",
          description: "Description_2",
          image: require("../assets/image2.png"),
        },
        {
            id: 3,
            title: "Tile of news 3",
            description: "Description_3",
            image: require("../assets/Rectangle_188.png"),
          },
          {
            id: 4,
            title: "Tile of news 4",
            description: "Description_4",
            image: require("../assets/image3.png"),
          },
      ]};
    const loadlistings=async()=>{
      const apiClient=create({
        baseURL:'https://newsapi.org/v2',
        headers:{"Content-Type":'application/json'}
      });
      const endpoint122=`/everything?q=bitcoin&apiKey=a1f37a1d82854e6182f7b7a0395b546c`;
      const endpoint123=`/top-headlines?country=in&apiKey=a1f37a1d82854e6182f7b7a0395b546c`;
      //a1f37a1d82854e6182f7b7a0395b546c
  const response = await apiClient.get(endpoint122);
  const response1 = await apiClient.get(endpoint123);
  setlistings(response.data);
  setlistings1(response1.data);
//  console.log(listings.articles[0]) 
  
    }
  useEffect(()=>{
    loadlistings()
  },[])


    const Card=({item_title,item_img,item_time,item_Author,item_id,iteminfo,fromnewsapi})=>{
        return(
         item_img&&iteminfo.content!=null? <TouchableOpacity onPress={()=>
            navigation.navigate("Detailscreen",{iteminfo,fromnewsapi})
            }>
            <View key={item_id}>
              
                <Image source={{uri:item_img}} 
                style={{width:250,height:200,borderRadius:20,marginRight:15}}
                />
                <Text style={{width:250,fontWeight:"bold",fontSize:16,maxHeight:59}}>{item_title}</Text>
                <Text style={{color:colors.Secondary_Text,marginTop:5}}>{item_Author==null?"By Anonymous Author":"By "+item_Author}</Text>
                <Text>{item_time}</Text>
              
            </View>
            </TouchableOpacity>
            :null
        )
    }

    const TopComponent=()=>{
      return(
<View>

{listings==undefined?null:
     <Image source={
      // require("../assets/newspaper.jpg")
     {uri:listings.articles[0].urlToImage}
    }//listings.articles[0].urlToImage
   style={{width:"100%",height:390,borderBottomLeftRadius:45,
   borderBottomRightRadius:45}}/>
     }  
     
     <TouchableOpacity style={{bottom:310,right:-25,maxWidth:29}} onPress={()=>navigation.openDrawer()}>
     <Feather name="menu" size={28} color="white" />
     </TouchableOpacity>
         <BlurView intensity={50} tint="light" style={{position:"absolute",
      height:45,
      top:155,
      left:25,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:10,}}>
        
     <Text style={{color:colors.white,alignSelf:"flex-start",top:2,left:0.5}}>News of the day</Text>
     </BlurView>

     <TouchableOpacity style={{bottom:175,maxWidth:300,left:28}} onPress={()=>
            navigation.navigate("SpecialScreen",{listings})
       } >
     <Text style={{color:colors.white,bottom:29,fontSize:24,left:1,maxWidth:340}} >
       { listings==undefined? "listings.articles[0].title":listings.articles[0].title}
        {`\n`}{`\n`} 
     <Text style={{color:colors.white}}> {"learn more ->"} </Text>
      </Text>
      </TouchableOpacity>

</View>
      )
    }
   return (
  <View style={styles.container} >

{listings && listings1 !=undefined?
  <View>
  <TopComponent/>


      <Text style={{color:"black",top:-165,fontSize:20,left:34,fontWeight:"bold"}}>Breaking News</Text>
      <ScrollView style={{bottom:159,left:15,marginRight:15}} horizontal={true}>
          { listings1!=undefined? listings1.articles.map((item)=>{return(<Card item_title={item.title} item_id={item.title} item_time={item.id} item_img={item.urlToImage} item_Author={item.author} iteminfo={item} fromnewsapi={true}/>)}):null }
      </ScrollView>
      </View>:
      <ActivityIndicator size="large" color="black"  style={{justifyContent:"center",alignSelf:"center",height:height/1.05,right:18,left:5}}/>
      }
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ?0 : 0},

});
export default HomeScreen2;