import React, { useReducer } from 'react';
import { View,StyleSheet, StatusBar,Pressable } from 'react-native';
import { MotiView, AnimatePresence } from 'moti'
function Animationscreen(props) {
    const [visible, toggle] = useReducer((s) => !s, true)
function Shape() {
    return (
        <MotiView
      from={{
        translateY: -100,
      }}
      animate={{
        translateY: 0,
      }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 1500,
        delay: 100,
      }}
      style={styles.shape}
    />
    )
  }
   return (
  <View style={styles.container} >
<Pressable onPress={toggle} style={styles.container}>
      {visible && <Shape />}
    </Pressable>
     </View>
    );
}
const styles = StyleSheet.create({
    // container:{},
    shape: {
        justifyContent: 'center',
        height: 250,
        width: 250,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: 'white',
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#9c1aff',
      }
});
export default Animationscreen;