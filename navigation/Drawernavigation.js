import React from 'react';
import { View,StyleSheet, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Testscreen from '../Screens/Testscreen';
import Bottomnav from './Bottomnav';
const Drawer = createDrawerNavigator();
function Drawernavigation(props) {
    return (
        <Drawer.Navigator   screenOptions={{headerShown:false , presentation:"modal",drawerActiveBackgroundColor:"#e4e6eb",drawerLabelStyle:{color:"black"}}} >
          <Drawer.Screen name="Home" component={Bottomnav} />
          {/* <Drawer.Screen name="About" component={A} /> */}
        
        </Drawer.Navigator>
      );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
});
export default Drawernavigation;