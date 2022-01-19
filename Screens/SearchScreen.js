import React, { useEffect, useState,useCallback,useRef,forwardRef,createRef, useMemo } from 'react';
import { AppRegistry,View,StyleSheet, StatusBar,Text,TouchableWithoutFeedback,TextInput,
     TouchableOpacity,ScrollView,Image,Animated,findNodeHandle,FlatList,Dimensions,ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';
import { Octicons,Feather,Ionicons } from "@expo/vector-icons";
import colors from '../colors';

import HomeScreen from './HomeScreen';
import { create } from "apisauce";
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ScrollableTabView from 'react-native-scrollable-tab-view';
// import TabBar from "react-native-underline-tabbar";

const {width,height}=Dimensions.get("screen");
function SearchScreen({navigation}) {
  useEffect(()=>{
    loadlistings();
    
},[])
const txtinput=useRef();
const [flatitem,setflatitem]=useState();
const [listingsforsearch,setlistingsforsearch]=useState();
const [selected,setselected]=useState(0);
const [selectedforbtn,setselectedforbtn]=useState(0);
const[searchtext,setsearchtext]=useState('');
const [xpos,setxpos]=useState();
    let tryingnewstate;
const scrollref=useRef(null);
// scrollref.current.scrollTo({
//   x: width * selectedforbtn,
//   animated: true,
// })
const changetabs = ({event}) => {
  const scrollval=event.nativeEvent.contentOffset.x
  if(scrollval>1000&&scrollval<1185){
setselected(3);
console.log("now selectedtab is:"+selected);
  }
   if(scrollval>0&&scrollval<400){
    setselected(1);
    console.log("now selectedtab is:"+selected);
  }
  else if(scrollval==0){
    setselected(0);
    console.log("now selectedtab is:"+selected); 
  }
  else if(scrollval>600&&scrollval<820){
    setselected(2);
    console.log("now selectedtab is:"+selected); 
  }
  else if(scrollval>1185&&scrollval<1580){
    setselected(4);
    console.log("now selectedtab is:"+selected); 
  }
};
const checkingfub=()=>{
  setTimeout(() => {
    loadlistings().then(console.log("Executed"));
    
  }, 3000);
  
}
  const tabpress=({item})=>{
    scrollref.current.scrollTo({
      x: width * item.id,
      animated: true,
  })
  setselected(item.id);
  // checkingfub();
  }
  const loadlistings1=async()=>{ 
    const apiClient=create({
      baseURL:'https://newsapi.org/v2',
      headers:{"Content-Type":'application/json'}
    });
   let result=[];
    const endpoint124=`https://newsapi.org/v2/everything?q=${searchtext}&from=2022-01-16&sortBy=popularity&apiKey=a1f37a1d82854e6182f7b7a0395b546c`
    const response1333 = await apiClient.get(endpoint124);
     result.push(response1333.data);
  setlistingsforsearch(result);
  // console.log(response1.data);
   }
const scrollX=useRef(new Animated.Value(0)).current;
   
    // useEffect(()=>{
    //   changetabs();
    // })
    //const Tab = createMaterialTopTabNavigator();
    
    const initialMessages ={"recipes": [
        {
          id: 0 ,
          title: "All",
          description: "Food",
          image: require("../assets/Rectangle_188.png"),
          ref:createRef()
        },
        {
          id: 1,
          title: "National",
          description: "Food",
          image: require("../assets/image2.png"),
          ref:createRef()
        },
        {
            id: 2,
            title: "Business",
            description: "Food",
            image: require("../assets/Rectangle_188.png"),
            ref:createRef()
          },
          {
            id: 3,
            title: "Sports",
            description: "Food",
            image: require("../assets/image3.png"),
            ref:createRef()
          },
          {
            id: 4,
            title: "World",
            description: "Food",
            image: require("../assets/image3.png"),
            ref:createRef()
          },
          // {
          //   id: 5,
          //   title: "Politics",
          //   description: "Food",
          //   image: require("../assets/image3.png"),
          //   ref:createRef()
          // },
          // {
          //   id: 6,
          //   title: "Technology",
          //   description: "Food",
          //   image: require("../assets/image3.png"),
          //   ref:createRef()
          // },
          // {
          //   id: 7,
          //   title: "Startup",
          //   description: "Food",
          //   image: require("../assets/image3.png"),
          //   ref:createRef()
          // },
          // {
          //   id: 8,
          //   title: "Entertainment",
          //   description: "Food",
          //   image: require("../assets/image3.png"),
          //   ref:createRef()
          // },
          // {
          //   id: 9,
          //   title: "Miscellaneous",
          //   description: "Food",
          //   image: require("../assets/image3.png"),
          //   ref:createRef()
          // },
      ]};
      
    const Card=({item_title,item_img,item_time,item_Author,item_id,iteminfo,newstype,fromnewsapi})=>{
        return(
          <TouchableOpacity onPress={()=>navigation.navigate("Detailscreen",{iteminfo,newstype,fromnewsapi})}>
            <View key={item_id} style={{flexDirection:"row",paddingVertical:15}}>
            
                <Image source={{uri:item_img}} 
                style={{width:100,height:100,borderRadius:20,marginRight:15}}
                />
                <Text style={{marginRight:140,fontWeight:"bold",fontSize:15}}>{item_title}</Text>
                <View style={{position:"absolute",top:55,marginTop:31,right:95,flexDirection:"row"}}>
                <Text style={{position:"absolute",left:-165 }}>{item_time}</Text>
                <Text style={{position:"absolute",left:-70}}>{"By "+item_Author}</Text>
                </View>
                
            </View>
            </TouchableOpacity>
        )
    }
    const [listings,setlistings]=useState();
    const [listings1,setlistings1]=useState();
    const [listings2,setlistings2]=useState();
    const [listings3,setlistings3]=useState();
    const [listings4,setlistings4]=useState();
    const [listings5,setlistings5]=useState();
    const [listings6,setlistings6]=useState();
    const [listings7,setlistings7]=useState();
    const [listings8,setlistings8]=useState();
    const [listings9,setlistings9]=useState();
    const [listings10,setlistings10]=useState();
    const [listings11,setlistings11]=useState();
    const [listings12,setlistings12]=useState();
    const [varname,setvarname]=useState('');
    // const loadlistings=async()=>{
    //     // const response= await listingsApi.getlistings2(); 
    //    // setflatlisttobeshown(true);
    //     const apiClient=create({
    //      baseURL:'https://inshortsapi.vercel.app',
    //      headers:{"Content-Type":'application/json'}
    //    });
    //    switch(selected){
    //        case 0:
    //         console.log("started loading all");
    //         const endpoint120=`/news?category=all`
    //         const response1 = await apiClient.get(endpoint120);
    //         setlistings(response1.data);
            
    //         break;
    //        case 1:
    //         console.log("started loading national");
    //         const endpoint121=`/news?category=national`
    //          const response2 = await apiClient.get(endpoint121);
    //         setlistings1(response2.data);
            
    //         break;
    //        case 2:
    //         console.log("started loading business");
    //         const endpoint122=`/news?category=business`
    //         const response3 = await apiClient.get(endpoint122);
    //         setlistings2(response3.data);
    //         break;
    //        case 3:
    //         console.log("started loading sports");
    //         const endpoint123=`/news?category=sports`
    //         const response4 = await apiClient.get(endpoint123);
    //         setlistings3(response4.data);
    //         break;
    //        case 4:
    //         console.log("started loading world");
    //         const endpoint124=`/news?category=world`
    //         const response = await apiClient.get(endpoint124);
    //         setlistings4(response.data);
    //         break;
    //        case 5:
    //         const endpoint125=`/news?category=politics`
    //         const response5 = await apiClient.get(endpoint125);
    //         setlistings5(response5.data);
    //         break;
    //        case 6:
    //         const endpoint126=`/news?category=technology`
    //         const response6 = await apiClient.get(endpoint126);
    //         setlistings6(response6.data);
    //         break;
    //        case 7:
    //         const endpoint127=`/news?category=startup`
    //         const response7 = await apiClient.get(endpoint127);
    //         setlistings7(response7.data);
    //         break;
    //        case 8:
    //         const endpoint128=`/news?category=entertainment`
    //         const response8 = await apiClient.get(endpoint128);
    //         setlistings8(response8.data);
    //         break;
    //        case 9:
    //         const endpoint129=`/news?category=miscellaneous`
    //         const response9 = await apiClient.get(endpoint129);
    //         setlistings9(response9.data);
    //         break;
    //        case 10:
    //         const endpoint130=`/news?category=hatke`
    //         const response10 = await apiClient.get(endpoint130);
    //         setlistings10(response10.data);
    //         break;
    //        case 11:
    //         const endpoint131=`/news?category=science`
    //         const response11 = await apiClient.get(endpoint131);
    //         setlistings11(response11.data);
    //         break;
    //        case 12:
    //         const endpoint132=`/news?category=automobile`
    //         const response12 = await apiClient.get(endpoint132);
    //         setlistings12(response12.data);
    //         break;
    //    }
      
        
         
       
        
        
    //    }
    const loadlistings=async()=>{
          const apiClient=create({
         baseURL:'https://inshortsapi.vercel.app',
         headers:{"Content-Type":'application/json'}
       });
       try {
        const endpoint120=`/news?category=all`
        const response1 = await apiClient.get(endpoint120);
         setlistings(response1.data);
          // console.log(listings);
         const endpoint121=`/news?category=national`
          const response2 = await apiClient.get(endpoint121);
         setlistings1(response2.data);
 
         const endpoint122=`/news?category=business`
                 const response3 = await apiClient.get(endpoint122);
                 setlistings2(response3.data);
 
         const endpoint123=`/news?category=sports`
                  const response4 = await apiClient.get(endpoint123);
                  setlistings3(response4.data);  
             
        const endpoint124=`/news?category=world`
            const response = await apiClient.get(endpoint124);
            setlistings4(response.data); 
       } catch (error) {
         console.log(error,"error occured");
       }
              
                 
    }
    
      
    //   const SecondRoute = () => (
    //     <View style={[styles.scene, { backgroundColor: 'white' }]} >
    //     <ScrollView style={{bottom:95,left:15,marginRight:15,marginTop:100,marginBottom:310}} >
    //     {  
    //     // initialMessages.recipes
    //    listings1!=undefined? listings1.data
    //     .map((item)=>{return(
    //     <Card item_title={item.title} item_id={item.title} item_time={item.time}
    //      item_img={item.imageUrl} 
    //     item_Author={item.author}/>
    //   //  console.log(""+item.author)
    //     )}):null }
    // </ScrollView>
    // {/* {console.log(listings.data.map((item)=>{return(item.date)}))} */}
    //   </View>
      
    //   );
      
     
    
    
  const loadwithtimeout=()=>{
      setTimeout(() => {
          loadlistings();
      }, 150);
    // loadlistings;
  }
    const [search,setsearch]=useState(false);
    function renderSearchBar() {
        return (
            <View style={{flexDirection:"row",
             height:50,
             alignItems:"center",
             marginHorizontal:5,
             paddingHorizontal:10,
             borderRadius:15,
             backgroundColor:colors.form,
             marginBottom:15,
             top:220,
             width:"89%",
             left:15
             
            }} >
  
          {/* <Ionicons name="search" size={26}  color="grey"/> */}
           <TouchableWithoutFeedback   onPress={()=>search.play()}>   
          <LottieView
          source={require('../Svg/lottie_animation/search1.json') } 
          ref={animation=>{
            setsearch(animation);
          }}
           
          loop={false} 
         
          style={{width:40,left:1}} />
          </TouchableWithoutFeedback>
           
          <TextInput  style={{marginLeft:8,flex:1,height:120}} onFocus={()=>search.play()} ref={txtinput}
             placeholder="Search"  placeholderTextColor="lightgrey" onChangeText={(text)=>setsearchtext(text)} onSubmitEditing={loadlistings1} value={searchtext} />
             {/* <TouchableOpacity>
           <Octicons name="settings" size={26} color="black" style={{right:8}}/>
           </TouchableOpacity> */}
            </View>
        )
    }
    const Tryingflatlistforall=({item=0})=>{
     
      switch(item){
        case 0:
          if(listings!=null){
            setflatitem(listings.data);
          }
        case 1:
          if(listings1!=null){
            setflatitem(listings1.data);
          }
        case 2:
          if(listings2!=null){
            setflatitem(listings2.data);
          }
        case 3:
          if(listings3!=null){
            setflatitem(listings3.data);
          }
        case 4:
          if(listings4!=null){
            setflatitem(listings4.data);
          }
      }
      return(
        <View>
       
        {  
        // initialMessages.recipes
       flatitem!=undefined ? 
      //  <FlatList style={{maxHeight:364,width}} data={flatitem} 
      //  keyExtractor={(item)=>item.title}
      //  removeClippedSubviews={true}
      //  maxToRenderPerBatch={30}
      //  renderItem={({item})=>{return(
      //   <Card item_title={item.title} item_id={item.title} item_time={item.time}
      //   item_img={item.imageUrl} 
      //  item_Author={item.author} iteminfo={item}  newstype="All"/>
      //  )}}
      //  />
      null
        : <ActivityIndicator size="large" color="black"  style={{justifyContent:"center",alignSelf:"center",height:height/2.9,right:18,width}}/>
      }
   
  </View>
      )
    }
   return (
  <View style={styles.container} >
      <TouchableOpacity style={{top:55,left:25,maxWidth:29}} onPress={()=>navigation.openDrawer()}>
     <Feather name="menu" size={28} color="black" />
     </TouchableOpacity>
     {renderSearchBar()}
    <Text style={{fontWeight:"bold",fontSize:35,color:"black",top:50,left:25}}>Discover</Text>
    <Text style={{fontSize:18,color:colors.Secondary_Text,top:45,left:25}}>News from all over the world</Text>
    <View style={{height:800,top:135,left:15}}>

    {/* <View style={{flexDirection:"row",justifyContent:'space-between',width:width/1.12,marginTop:30,marginBottom:8}}>
      <TouchableOpacity hitSlop={{top: 50, bottom: 50, left: 50, right: 50}} onPress={()=>setselectedforbtn(0)}>
        <Text style={{color: selectedforbtn==0?"black": colors.Secondary_Text,fontWeight:"bold"}}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setselectedforbtn(1)}>
        <Text style={{color: selectedforbtn==1?"black": colors.Secondary_Text,fontWeight:"bold"}}>National</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setselectedforbtn(2)}>
        <Text style={{color: selectedforbtn==2?"black": colors.Secondary_Text,fontWeight:"bold"}}>Bussiness</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setselectedforbtn(3)}>
        <Text style={{color: selectedforbtn==3?"black": colors.Secondary_Text,fontWeight:"bold"}}>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setselectedforbtn(4)}>
        <Text style={{color: selectedforbtn==4?"black": colors.Secondary_Text,fontWeight:"bold"}}>World</Text>
      </TouchableOpacity>
    </View> */}
    {
    listingsforsearch ==undefined? 
    <>
    <FlatList
    style={{maxHeight:39,marginBottom:15,marginTop:20}}
    data={ initialMessages.recipes} 
  horizontal
  removeClippedSubviews={true}
  maxToRenderPerBatch={5}
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item)=>item.id}
  renderItem={({item})=>{
    return(<View style={{marginHorizontal:10,top:19,marginRight:25}}>
      <TouchableOpacity hitSlop={{top: 50, bottom: 50, left: 50, right: 50}} onPress={()=>tabpress({item})}>
      <Text style={selected==item.id?styles.selectedtext:styles.normaltext}>{item.title}</Text>
      </TouchableOpacity>
      
    </View>)
  }}
  />
    
    <ScrollView  ref={scrollref} 
    horizontal
    pagingEnabled
    // onScrollBeginDrag={
    //   event => { 
    //     setxpos(event.nativeEvent.contentOffset.x);
    //      console.log(event.nativeEvent.contentOffset.x);
    //   }
    // }
    // onScrollEndDrag={event => { 
    //   setxpos(event.nativeEvent.contentOffset.x);
    //    console.log(event.nativeEvent.contentOffset.x);
    // }}

//     onScroll={

// event => { 
//   // setxpos(event.nativeEvent.contentOffset.x);
//    changetabs({event});
//   console.log(event.nativeEvent.contentSize.width);
// }
//     }

 onMomentumScrollEnd={
  event => { 
    // setxpos(event.nativeEvent.contentOffset.x);
     changetabs({event});
    console.log(event.nativeEvent.contentOffset.x);
  }  
 }


    >

    {/* <Tryingflatlistforall/> */}

      {/* {scroller.map((item)=>{return(<Text>{item.id}</Text>)})} */}
      <View>
       
            {  
            // initialMessages.recipes
           listings!=undefined ? 
           <FlatList style={{maxHeight:364,width}} data={listings.data} 
           keyExtractor={(item)=>item.title}
           removeClippedSubviews={true}
           maxToRenderPerBatch={30}
           renderItem={({item})=>{return(
            <Card item_title={item.title} item_id={item.title} item_time={item.time}
            item_img={item.imageUrl} 
           item_Author={item.author} iteminfo={item}  newstype="All"/>
           )}}
           />
            : <ActivityIndicator size="large" color="black"  style={{justifyContent:"center",alignSelf:"center",height:height/2.9,right:18,width}}/>
          }
       
      </View>
      
      <View>
       
            {  
            // initialMessages.recipes
           listings1!=undefined ? 
           <FlatList style={{maxHeight:364,width}} data={listings1.data} 
           keyExtractor={(item)=>item.title}
           removeClippedSubviews={true}
           maxToRenderPerBatch={30}
           renderItem={({item})=>{return(
            <Card item_title={item.title} item_id={item.title} item_time={item.time}
            item_img={item.imageUrl} 
           item_Author={item.author} iteminfo={item}  newstype="All"/>
           )}}
           />
            :<ActivityIndicator size="large" color="black"  style={{justifyContent:"center",alignSelf:"center",height:height/2.9,right:18,width}}/>
             }
       
      </View>

      <View>
       
            {  
            // initialMessages.recipes
           listings2!=undefined ? 
           <FlatList style={{maxHeight:364,width}} data={listings2.data} 
           keyExtractor={(item)=>item.title}
           removeClippedSubviews={true}
           maxToRenderPerBatch={30}
           renderItem={({item})=>{return(
            <Card item_title={item.title} item_id={item.title} item_time={item.time}
            item_img={item.imageUrl} 
           item_Author={item.author} iteminfo={item}  newstype="All"/>
           )}}
           />
            :<ActivityIndicator size="large" color="black"  style={{justifyContent:"center",alignSelf:"center",height:height/2.9,right:18,width}}/> }
   
      </View>

      <View>
        
            {  
            // initialMessages.recipes
           listings3!=undefined ? 
           <FlatList style={{maxHeight:364,width}} data={listings3.data} 
           keyExtractor={(item)=>item.title}
           removeClippedSubviews={true}
           maxToRenderPerBatch={30}
           renderItem={({item})=>{return(
            <Card item_title={item.title} item_id={item.title} item_time={item.time}
            item_img={item.imageUrl} 
           item_Author={item.author} iteminfo={item}  newstype="All"/>
           )}}
           />
            :<ActivityIndicator size="large" color="black"  style={{justifyContent:"center",alignSelf:"center",height:height/2.9,right:18,width}}/> }
     
      </View>

      <View>
       
            {  
            // initialMessages.recipes
           listings4!=undefined ? 
           <FlatList style={{maxHeight:364,width}} data={listings4.data} 
           keyExtractor={(item)=>item.title}
           removeClippedSubviews={true}
           maxToRenderPerBatch={30}
           renderItem={({item})=>{return(
            <Card item_title={item.title} item_id={item.title} item_time={item.time}
            item_img={item.imageUrl} 
           item_Author={item.author} iteminfo={item}  newstype="All"/>
           )}}
           />
            :<ActivityIndicator size="large" color="black"  style={{justifyContent:"center",alignSelf:"center",height:height/2.9,right:18,width}}/> }
      
      </View>


    </ScrollView>
     </>
    :
  //   <FlatList data={listingsforsearch} keyExtractor={(item)=>item.title} renderItem={({item})=>
  //   {return(<View>
  //     {/* <Card item_title={item.title} item_Author={item.author} item_id={item.title} item_img={item.urlToImage} /> */}
  //     <Text>{item.title}</Text>
  //     {console.log("from inside flatlist"+item.title)}
  //   </View>)
  //   }
  // }/>
  // console.log(listingsforsearch)
  <View>
    <TouchableOpacity onPress={()=>{setlistingsforsearch(undefined),setsearchtext("")}}>
<Ionicons style={{left:15,top:15}} name="arrow-back" size={28} color="black" />
</TouchableOpacity>
    <View style={{top:20}}>
 { listingsforsearch.map((item)=>{return(<ScrollView style={{maxHeight:380}}>
    {item.articles.map((item2)=>(
      <Card item_title={item2.title} item_Author={item2.author} item_id={item2.title} item_img={item2.urlToImage} iteminfo={item2}  newstype="News" fromnewsapi={true} />
      ))}
    {/* {console.log(item.articles.map((item2)=>(item2)))} */}
  </ScrollView>)})}
  </View>
  </View>
  }
      </View>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,backgroundColor:"white"},
    container1: {
        marginTop: StatusBar.currentHeight,
      },
      selectedtext:{color:"black",fontWeight:"bold"},
      normaltext:{color:colors.Secondary_Text,fontWeight:"bold"},

      scene: {
        flex: 1,
      },
});
export default SearchScreen;