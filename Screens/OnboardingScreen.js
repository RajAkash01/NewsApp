import React from 'react';
import { Text, ImageBackground, View,StyleSheet,StatusBar,Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../colors';
import AppButton2 from '../components/AppButton2';
function OnboardingScreen({navigation}) {
   return (
 <View style={styles.screen} >
  <Image style={styles.container} source={require("../assets/Newsonboardscrn.png")}/>
   
  
  <View style={{alignItems:"center"}}>
  <Text style={styles.text} >Start Reading</Text>
  <Text style={styles.subtext} >Lets join our community{'\n'}              to read!</Text>
  </View>
  <View style={{paddingTop:250,padding:25}} >
  <AppButton2 title="Get Started" onPress={()=>navigation.replace("Signin")}  backgroundColor="black" btnsecondarycolor="#D8CCC9" />
  </View>
     </View>
    );
}
const styles = StyleSheet.create({
    screen:{ paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,backgroundColor:"white",flex:1},
    container:{
    // flex:1,
    top:129,
    alignItems:"center",
    justifyContent:"center",  
    width:400,
    height:300
    },
    text:{
       top:210,
        color:colors.Main_Text,
        fontSize:29,
        fontWeight: "bold",
         alignItems:"center",
            
    },
    subtext:{
      color:colors.Secondary_Text,
      paddingBottom:40,
      top:220,
     fontSize:16,
    

    },
    
});
export default OnboardingScreen;