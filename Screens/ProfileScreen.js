import React, { useEffect, useState } from 'react';
import { View,StyleSheet, StatusBar,Text, TouchableOpacity,TouchableWithoutFeedback,Alert,
  ScrollView,useWindowDimensions,BackHandler,Pressable,Modal,TextInput } from 'react-native';
  import { Rating, AirbnbRating } from 'react-native-ratings';
// import { auth } from '../components/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-paper';
import colors from '../colors';
import LottieView from 'lottie-react-native';
//import Recipestabscreen from './Recipestabscreen';
//import Liketabscreen from './Liketabscreen';
import { NavigationContainer } from '@react-navigation/native';
// import Topnav from '../navigation/Topnav';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import auth from '@react-native-firebase/auth';

function ProfileScreen({navigation}) {
    const [signout,setsignout]=useState();
    const [timesPressed, setTimesPressed] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [Suggestion,setsuggestion]=useState('');
  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
    // const [name,setname]=useState();
    // const [photo,setphoto]=useState();
    const [share,setshare]=useState();
    const [logout,setlogout]=useState();
    useEffect(()=>{
      const backAction = () => {
          navigation.navigate("Home");
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
         backAction
        );
    
        return () => backHandler.remove();
     },[]);
    const FirstRoute = () => (
      <View/>
    );
    const SecondRoute = () => (
       <View/>
    );

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'first', title: 'Recipes' },
      { key: 'second', title: 'Liked' },
    ]);
    


   

    const signout2= async()=>{
        Alert.alert(
            "LogOut",
            "Are you sure you want to logout?",
            [
              {
                text: "Yes",
                onPress:   async()=>{
                    await AsyncStorage.removeItem('login').then(navigation.replace("Signin")),
                    await AsyncStorage.removeItem('user');
                }
              },
              {
                text: "No",
                onPress: () => null,
                style: "cancel"
              },
              
            ],
            // { cancelable: false }
          );
     
       
    }

//     const user=async()=>{
//         const usertype=await AsyncStorage.getItem('usertype')
//         if(usertype=='emailandpass'){
//           const value = await AsyncStorage.getItem('user');
//           const newval=JSON.parse(value);
//           setname(newval.displayName);
//           setphoto(newval.photoURL);
//         }
//         else if(usertype=='googlesignin'){
//           const value = await AsyncStorage.getItem('user');
//           const newval=JSON.parse(value);
//           setname(newval.name);
//           setphoto(newval.photoUrl);
//         }
//       }
//  user();
    // const sign_out=()=>{
    //     auth.signOut().then(()=>{
    //        navigation.replace("Signin");
    //     }).catch((error)=>{
    //        console.log(error);
    //     });
    // }
    
   return (
  <View style={styles.container} >
      <View style={{justifyContent:"center",alignSelf:"center",marginLeft:317,top:45}}>
<TouchableWithoutFeedback  onPress={()=>share.play(30,154)}>   
        <LottieView
        source={require('../Svg/lottie_animation/share.json') } 
        ref={animation=>{
          setshare(animation);
        }}
         
        loop={false} 
       
        style={{width:50}} />
        </TouchableWithoutFeedback>
        </View>
      <View style={{justifyContent:"center",alignSelf:"center",marginLeft:310,top:45}}>
<TouchableWithoutFeedback  onPress={()=>logout.play(),signout2}>   
        <LottieView
        source={require('../Svg/lottie_animation/logout.json') } 
        ref={animation=>{
          setlogout(animation);
        }}
         
        loop={false} 
       
        style={{width:80}} />
        </TouchableWithoutFeedback>
        </View>
 <Avatar.Image style={{alignSelf:"center",justifyContent:"center"}} size={100}  source={{uri:auth().currentUser.photoURL}} />
 <Text style={{justifyContent:"center",alignSelf:"center",marginTop:20,fontSize:22,fontWeight:"bold",color:"#3E5481"}}>{auth().currentUser.displayName}</Text>
 <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,marginLeft:51,paddingLeft:15,marginRight:51 }}>
   <Text  style={{fontWeight:"bold",fontSize:20}} >{"32"}</Text>
   <Text  style={{fontWeight:"bold",fontSize:20,paddingLeft:8}}>{"782"}</Text>
   <Text  style={{fontWeight:"bold",fontSize:20}}>{"1.287"}</Text>
 </View>
 <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:2,marginLeft:30,marginRight:30 }}>
   <Text  style={{fontSize:17,paddingLeft:6,color:"#9FA5C0",left:-1}} >{"Reputation"}</Text>
   <Text  style={{fontSize:17,paddingLeft:1,color:"#9FA5C0",right:9}}>{"Following"}</Text>
   <Text  style={{fontSize:17,paddingRight:5,color:"#9FA5C0",right:10}}>{"Followers"}</Text>
 </View>
 <View style={{width:500,right:65,borderWidth:3.5,marginTop:29,borderColor:colors.Outline}}/>


 
 {/* <TabView 
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props =><TabBar {...props} style={{backgroundColor:"white"}} indicatorStyle={{backgroundColor:colors.primary}} inactiveColor="#9FA5C0" activeColor="#3E5481" />}
        
      /> */}
  
  
  <Pressable
          style={{width:"100%",flexDirection:"row",top:15,padding:8}}
          onPress={()=>navigation.navigate("nonewmsgscreen")}  
          android_ripple={{color: "grey", borderless: false,radius:225}}
        >
  <MaterialCommunityIcons style={{top:2,left:15}} name={"email-outline"} color={"grey"} size={26} />
<Text style={{left:29,top:5}}>Inbox</Text>
  <MaterialCommunityIcons style={{top:2,left:285}} name={"chevron-right"} color={"grey"} size={26} />
  </Pressable>
     
  <Pressable  onPress={()=>navigation.navigate("nonewmsgscreen")}  
          android_ripple={{color: "grey", borderless: false,radius:225}} style={{flexDirection:"row",top:19,width:"100%",height:45}}>
  <MaterialCommunityIcons style={{top:10,left:20}} name={"bookmark-outline"} color={"grey"} size={26} />
<Text style={{left:34,top:15}}>Favourities</Text>
  <MaterialCommunityIcons style={{top:10,left:258}} name={"chevron-right"} color={"grey"} size={26} />
    </Pressable>  

  <Pressable  onPress={()=>navigation.navigate("nonewmsgscreen")}  
          android_ripple={{color: "grey", borderless: false,radius:225}} style={{flexDirection:"row",top:19,width:"100%",height:45}}>
  <MaterialCommunityIcons style={{top:10,left:20}} name={"archive-arrow-down-outline"} color={"grey"} size={26} />
<Text style={{left:34,top:15}}>Offline Reading</Text>
  <MaterialCommunityIcons style={{top:10,left:230}} name={"chevron-right"} color={"grey"} size={26} />
    </Pressable> 

  <Pressable  onPress={()=>navigation.navigate("nonewmsgscreen")}  
          android_ripple={{color: "grey", borderless: false,radius:225}} style={{flexDirection:"row",top:19,width:"100%",height:45}}>
  <MaterialCommunityIcons style={{top:10,left:20}} name={"clock-time-seven-outline"} color={"grey"} size={26} />
<Text style={{left:34,top:15}}>Read it later</Text>
  <MaterialCommunityIcons style={{top:10,left:251}} name={"chevron-right"} color={"grey"} size={26} />
    </Pressable>  
   
      <View style={{width:500,right:65,borderWidth:3.5,marginTop:29,borderColor:colors.Outline,top:1}}/>

      <Pressable  onPress={()=>setModalVisible(!modalVisible)
      // navigation.navigate("nonewmsgscreen")
    }  
          android_ripple={{color: "grey", borderless: false,radius:225}} style={{flexDirection:"row",top:2,width:"100%",height:45}}>
              <Modal
        animationType="Fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <Pressable style={[ styles.androidBackdrop, styles.backdrop]} onPress={() =>setModalVisible(false)} />
          <View style={styles.androidAlertBox}>
            <Text style={styles.androidTitle}>{'Please rate us'}</Text>
            <Rating
               style={{marginBottom:15}}
               type='star'
               fractions={1}
               ratingCount={3}
               imageSize={50}
               showRating
               minValue='0'
               startingValue="0"
               onFinishRating={(value)=>[setModalVisible(false),alert(`rated${value}`)]}
                />
          </View>
        </Modal>
  <MaterialCommunityIcons style={{top:10,left:19}} name={"star-outline"} color={"grey"} size={26} />
<Text style={{left:35,top:15}}>Rate us</Text>
  <MaterialCommunityIcons style={{top:10,left:278}} name={"chevron-right"} color={"grey"} size={26} />
    </Pressable> 

      <Pressable  onPress={()=>setModalVisible1(!modalVisible1)}  
          android_ripple={{color: "grey", borderless: false,radius:225}} style={{flexDirection:"row",top:1,width:"100%",height:45}}>

<Modal
        animationType="Fade"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible1(!modalVisible1);
        }}>
          <Pressable style={[ styles.androidBackdrop, styles.backdrop]} onPress={() =>setModalVisible1(false)} />
          <View style={styles.androidAlertBox}>
            <Text style={styles.androidTitle}>{'Please Give us your Suggestion'}</Text>
            <TextInput
            style={{marginBottom:15}}
            placeholder="Write your review" 
             onChangeText={(val)=>setsuggestion(val)}
            autocorrect={false}
            autoCapitilize="none" 
            keyboardType="email-address"
            caretHidden={false}
            onSubmitEditing={()=>alert(Suggestion)}
            />
              </View>
        </Modal>


  <MaterialCommunityIcons style={{top:8,left:19}} name={"email-open-multiple-outline"} color={"grey"} size={26} />
<Text style={{left:35,top:15}}>{"Suggestion&Feedback"}</Text>
  <MaterialCommunityIcons style={{top:10,left:185}} name={"chevron-right"} color={"grey"} size={26} />
    </Pressable> 

     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,flex:1,backgroundColor:"white"},
    androidAlertBox: {
      maxWidth: 280,
      width: '100%',
      margin: 48,
      elevation: 24,
      borderRadius: 2,
      backgroundColor: '#FAFAFA',
      alignItems:"center",
      top:250
    },
    androidTitle: {
      margin: 24,
    },
    androidMessage: {
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 24,
    },
    androidBackdrop: {
      backgroundColor: "#232f34",
      opacity: 0.4
    },
    backdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    alertBox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    viewPager: {
      flex:1,
      width:"100%",
      height:"100%"
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});
export default ProfileScreen;