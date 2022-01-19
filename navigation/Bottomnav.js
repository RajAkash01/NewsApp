import React, { useCallback, useMemo, useRef, useState} from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import colors from '../colors';
import Homeicon from '../Svg/HomeIcon';
import Tabicon from '../components/Tabicon';
import Profileicon from '../Svg/Profileicon';
import { Ionicons } from "@expo/vector-icons";
import store from "../reducers/store";
import { LogBox } from 'react-native';
import HomeScreen2 from '../Screens/HomeScreen2';
import SearchScreen from '../Screens/SearchScreen';
import Testscreen from '../Screens/Testscreen';

LogBox.ignoreLogs(['Warning: Cannot update a component from inside the function body of a different component.']);
function Bottomnav({navigation,route}) {
    const bottomSheetRef = useRef(null); 
    const snapPoints = useMemo( () =>{ return ['0%', '50%']; }, []);
  const handleSheetChanges = useCallback( (index)=> {null
}, []);
const [bottomnavval,setbottomnavval]=useState(false);
// const lowerthebottomnav=()=>{
//    // console.log("store changed",store.getState());
//     const val= store.getState();
     
//     //   setbottomnavval(val);
//     // if(bottomnavval==false){
//          console.log("from val here"+val);
//     // }
// }


store.subscribe(()=>{
   // lowerthebottomnav()
    const val= store.getState();
    setbottomnavval(val);
    // console.log("from val here"+val);
});
 
    //    const val= store.getState();
    //    console.log("from val"+JSON.stringify(val));
    const Tab = createBottomTabNavigator();
    //   const googleuser=route.params.user+"from google sign";
    //   const googleuser3=route.params.user2+"from signin with email";
    // const googleuser2= route.params.profile+"from profile"; 
        // console.log(googleuser3);
    
   return (
       <>
       
       {/* <BottomSheet
       
       ref={bottomSheetRef}
       index={0}
       snapPoints={snapPoints}
       animateOnMount={true} 
       onChange={handleSheetChanges}
     >
        <View style={{backgroundColor:"papayawhip",flex:1,borderRadius:25}}>
         <Text>Hello to you</Text>
         </View>
     </BottomSheet> */}
    
    <Tab.Navigator screenOptions={{headerShown:false , tabBarStyle:{position:"absolute",
    bottom:bottomnavval==true?-30:0,
    left:0,
    right:0,
    elevation:0,
    backgroundColor:colors.white,
    borderTopColor:colors.form , // can be transparent
    borderTopWidth: 1.8, 
    height:100 ,},
     tabBarShowLabel:false,
     tabBarHideOnKeyboard:true    
}}
//  tabBarOptions={{ showLabel:false ,keyboardHidesTabBar:true, 
//     }}
    >
           
    <Tab.Screen name="Home"  component={HomeScreen2}  options={{
         tabBarIcon:({focused})=> <Tabicon focused={focused} icon={ focused ?<Homeicon fill="black"/>:<Homeicon fill="#9FA5C0"/>} Name="Home"/> 
    }} />
    <Tab.Screen name="Search" component={SearchScreen}  options={{
        
        tabBarIcon:({focused})=> <Tabicon focused={focused} icon={focused ?<Ionicons name="search" size={26} color="black"/>:<Ionicons name="search-outline" size={26} color="#9FA5C0"/>} Name="Search" />

    }}   />
   
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon:({focused})=> <Tabicon focused={focused} icon={focused ?<Profileicon fill="black"/>:<Profileicon fill="#9FA5C0"/>} Name="Profile" />
    }}   />
      
  

</Tab.Navigator>

</>
    );
}
const styles = StyleSheet.create({
    container:{},
});
export default Bottomnav;