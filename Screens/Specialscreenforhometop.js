import React, { useCallback, useMemo, useRef } from 'react';
import { View,StyleSheet, StatusBar,Image,TouchableOpacity,Dimensions,Text,Linking } from 'react-native';
import { BlurView } from 'expo-blur';
import {
    TouchableOpacity as Touchme,
    TouchableHighlight,
    TouchableWithoutFeedback,
  } from '@gorhom/bottom-sheet';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Ionicons } from "@expo/vector-icons";
import CustomBackdropforBottomsheet from '../components/CustomBackdropforBottomsheet';
import colors from '../colors';

const {width,height}=Dimensions.get("screen");
function Specialscreenforhometop({navigation,route}) {
    const iteminfo=route.params.listings;
    const BottomSheetHandleComponent = () => { 
        return ( 
          <View style={{backgroundColor: 'white',flex:1,borderTopLeftRadius:15,borderTopRightRadius:15}}> 
             {/* <View style={{backgroundColor: 'black',marginBottom:15, alignSelf: 'center',
          width: (8 * 350) / 100,
          height: 6,
          borderRadius: 4,marginTop:8}} />   */}
          </View> 
        ); 
      };
      const snapPoints = useMemo( () =>{ return ['50%']; }, []);
      const handleSheetChanges = useCallback( (index)=> {null
    }, []);
    const bottomSheetRef = useRef(null);
    
   return (
  <View style={styles.container} >

      <Image source={{uri:iteminfo.articles[0].urlToImage}} style={{width,height:450}}/>
      <View style={{left:18,bottom:385}}>
      <BlurView intensity={50} tint="dark" style={{
      height:55,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:20,    
      width:55  
     }}>
       <TouchableOpacity  onPress={()=>navigation.goBack()}>
       <Ionicons name={"arrow-back"} color="white" size={32} />
      </TouchableOpacity>
      </BlurView>  
      </View>
<BlurView intensity={50} tint="dark" style={{position:"absolute",
      height:40,
      paddingVertical:10,
      paddingHorizontal:18,
      borderRadius:20,
      top:
    //   fromnewsapi==true? 200:
      205,
      left:20,
      
     }}>
      <Text style={{color:"white",bottom:1,fontWeight:"bold"}}>{"News"}</Text>
      </BlurView>
      <BlurView intensity={50} tint="dark" style={{position:"absolute",
      width:359,
      height:158,
      paddingVertical:10,
      paddingHorizontal:15,
      borderRadius:20,
      top:255,
      left:20,
      
     }}>
      <Text style={{color:"white",bottom:1,fontWeight:"bold",fontSize:29,top:  -5,
      left:-6,marginRight:24,height:145,width:350}}>{iteminfo.articles[0].title}</Text>
</BlurView>
 <BottomSheet
        style={styles.btmsheetcolor}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        // activeOffsetY={[-1, 1]} 
        // failOffsetX={[-5, 5]} 
        animateOnMount={true} 
        onChange={handleSheetChanges}
         backdropComponent={
          (props) => {
            return <CustomBackdropforBottomsheet {...props} />;
          } 
          }
         handleComponent={BottomSheetHandleComponent}
      >
         <View style={{flexDirection:"row",top:15,left:15}}>
                { iteminfo.author!=null?<View style={{padding:12,backgroundColor: "black",
            borderRadius:25,alignSelf:"center",justifyContent:"center",flexDirection:"row",marginRight:12}}>
         <Ionicons name={"person-circle-outline"} color={colors.Outline} size={26} style={{top:1,right:5,}} />
          <Text style={{color:"white",top:3.9}}>{ iteminfo.articles[0].author}</Text>
            </View>
            :null}
           <View style={{padding:12,backgroundColor: colors.form,
            borderRadius:25,alignSelf:"center",justifyContent:"center",flexDirection:"row"}}>
           <Ionicons name={"time-outline"} color={colors.Outline} size={26} style={{top:1,right:5,}} />
          <Text style={{color:"black",top:3.9,maxWidth:98}}>{iteminfo.articles[0].publishedAt}</Text>
            </View>
            
</View>
 <Text style={{top:35,fontSize:20,fontWeight:"bold",left:15,}}>Content</Text>
<View style={{borderBottomWidth:2,borderBottomColor:"black",maxWidth:85,top:45,left:15}}/>
<Text style={{left:15,top:55,color:colors.Secondary_Text,width:370,fontSize:18}}>{iteminfo.articles[0].content}</Text>
<Touchme style={{top:69,height:200}} onPress={()=> Linking.openURL(iteminfo.articles[0].url)}>
<Text style={{fontSize:17,maxWidth:370,color:"black",left:15,}}>More info</Text>
</Touchme>
      </BottomSheet>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? 0 : 0,
    height:885,},
    btmsheetcolor:{backgroundColor:"white",borderRadius:30}
});
export default Specialscreenforhometop;