import React from 'react';
import { View,StyleSheet, StatusBar,Image,Dimensions,Text } from 'react-native';

const {width,height}=Dimensions.get("screen");
function Nonewmsgscreen(props) {
   return (
  <View style={styles.container} >
   <Image source={require("../assets/Nonewmsg.png")} style={{width,height:300,top:140}}/>
   <Text style={{fontWeight:"bold",fontSize:20,alignSelf:"center",top:160}}>No data</Text>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,backgroundColor:"white",flex:1},
});
export default Nonewmsgscreen;