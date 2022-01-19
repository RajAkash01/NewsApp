import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreennav from './navigation/OnboardingScreennav';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PortalProvider } from '@gorhom/portal';
import store from './reducers/store';
import Signinnav from './navigation/Signinnav';
import Testscreen from './Screens/Testscreen';
import Drawernavigation from './navigation/Drawernavigation';
import Animationscreen from './Screens/Animationscreen';

export default function App() {
  const [firstlaunch, setfirstlaunch] = useState(null);
  // const store=createStore(rootReducer);
  useEffect(() => {
    AsyncStorage.getItem("alreadylaunched").then(value => {
      if (value == null) {
        AsyncStorage.setItem("alreadylaunched", "true");
        setfirstlaunch(true);
      }
      else {
        setfirstlaunch(false);
      }
    })
  }, []);

  if (firstlaunch == null) return null;
  else if (firstlaunch == true) {
    return (
      <NavigationContainer>
        <PaperProvider>
        <Provider store={store}>
          <PortalProvider>
          <OnboardingScreennav />
          </PortalProvider>
          </Provider>
        </PaperProvider>
      </NavigationContainer>
    );
  }
  else {
    return (
      <NavigationContainer>
        <PaperProvider>
          <Provider store={store}>
            <PortalProvider>
        <Signinnav />
        {/* <Animationscreen/> */}
        {/* <Testscreen/> */}
        {/* <SearchScreen/> */}
        </PortalProvider>
        </Provider>
        </PaperProvider>
      </NavigationContainer>
    );
  }
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
