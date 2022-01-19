import React, { createRef, forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { View,Text,StyleSheet, StatusBar,Dimensions,Animated,FlatList, Image,findNodeHandle, TouchableOpacity, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


const {width,height}=Dimensions.get("screen");
function Testscreen(props) {
    
   // const [m,setM]=useState([]);

    const images = {
      man:
        'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      women:
        'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      kids:
        'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      skullcandy:
        'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      help:
        'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    };
    const data = Object.keys(images).map((i) => ({
      key: i,
      title: i,
      image: images[i],
      ref:createRef()
    }));

    const initialMessages ={"recipes": [
        {
          id: 1,
          title: "Pancake",
          description: "Food",
          image: require("../assets/Rectangle_188.png"),
          imageurl:'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          ref:createRef()
        },
        {
          id: 2,
          title: "Food2",
          description: "Food",
          image: require("../assets/image2.png"),
          imageurl:'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
          ref:createRef()
        },
        {
            id: 3,
            title: "Food3",
            description: "Food",
            image: require("../assets/Rectangle_188.png"), 
            imageurl:'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            ref:createRef()
            },
          {
            id: 4,
            title: "Food4",
            description: "Food",
            image: require("../assets/image3.png"),
            imageurl:'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            ref:createRef()
          },
          {
            id: 5,
            title: "Food4",
            description: "Food",
            image: require("../assets/image3.png"),
            imageurl:'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            ref:createRef()
          },
          {
            id: 6,
            title: "Food4",
            description: "Food",
            image: require("../assets/image3.png"),
            imageurl:'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            ref:createRef()
          },
          {
            id: 7,
            title: "Food4",
            description: "Food",
            image: require("../assets/image3.png"),
            imageurl:'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            ref:createRef()
          },
      ]};
    const scrollX=useRef(new Animated.Value(0)).current;
    const ref=useRef();
    const onItemPress=useCallback((itemIndex=>{
     ref?.current?.scrollToOffset({
     offset:itemIndex* width,
     })
    }))
    const Indicator=({measures,scrollX})=>{
      const inputRange=initialMessages.recipes.map((_,i)=>i * width);
      const indicatorWidth=scrollX.interpolate({
        inputRange,outputRange:measures.map(measure=>measure.width)
      })
      const translateX=scrollX.interpolate({
        inputRange,outputRange:measures.map(measure=>measure.x)
      })
        return(
            <Animated.View style={{
                position:"absolute",
                height:4,
                width:indicatorWidth,
                left:0,
                backgroundColor:"white",
                top:33,
                transform:[{
                  translateX
                }]
            }}/>
        )
    }
    const Tab=forwardRef(({item,onItemPress},ref)=>{
return (
<TouchableOpacity  onPress={onItemPress}>
  
<View   ref={ref}>
    <Text style={{color:"white",
    fontSize:15
    //84/initialMessages.recipes.length
    ,fontWeight:"bold"}}>{item.title}</Text>
</View>

</TouchableOpacity>
)
    });


    const Tabs=({data,scrollX,onItemPress})=>{
      const [measures,setMeasures]=useState([]);
        const containerRef=useRef();
        useEffect(()=>{
         let m=[];
          initialMessages.recipes.forEach(item=>{
              item.ref.current.measureLayout(
                  containerRef.current,
                  (x,y,width,height)=>{
                     m.push({x,y,width,height});
                       if(m.length===initialMessages.recipes.length){
                          setMeasures(m);
                       }
                  }
               );
          });
        
        }, []);
        return(
<View style={{position:"absolute",top:65,}}>
<View ref={containerRef} style={{flexDirection:"row",justifyContent:"space-evenly",width}}>
    {initialMessages.recipes.map((item,index)=>{
       return <Tab key={item.key}  item={item} ref={item.ref} onItemPress={()=>onItemPress(index)}/>
    })}
    
</View>
{measures.length > 0   && <Indicator  measures={measures} scrollX={scrollX}/>}
</View>

        )
    }

    
   return (
  <View style={styles.container} >
  <Animated.FlatList data={initialMessages.recipes}
  ref={ref}
   horizontal
   pagingEnabled
   onScroll={Animated.event(
       [{nativeEvent:{contentOffset:{x:scrollX}}}],
       {useNativeDriver:false}
   )}
    renderItem={({item})=>{
  return(
  <View style={{width,height}}>
    <Image source={{uri:item.imageurl}} style={{flex:1,resizeMode:"cover"}}/>
</View>
);
  }
  }
   keyExtractor={(item)=>item.id}/>
  <Tabs scrollX={scrollX} data={initialMessages.recipes} onItemPress={onItemPress}/>
  
  
  {/* <FlatList data={ initialMessages.recipes} 
  horizontal
  keyExtractor={(item)=>item.id}
  renderItem={({item})=>{
    return(<View style={{marginHorizontal:10}}>
      <TouchableOpacity onPress={()=>alert(item.title)}>
      <Text style={{color:"white",fontWeight:"bold"}}>{item.title}</Text>
      </TouchableOpacity>
   <Tabs scrollX={scrollX} data={initialMessages.recipes} onItemPress={onItemPress}/>
    </View>)
  }}
  /> */}
     </View>
    );
}
const styles = StyleSheet.create({
     container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,flex:1,backgroundColor:"black"},
    // container: {
    //     marginTop: StatusBar.currentHeight,
    //   },
      scene: {
        flex: 1,
      },
});
export default Testscreen;