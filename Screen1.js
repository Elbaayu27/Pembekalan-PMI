/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Screen1 = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.teks}> React Native</Text>


      {/* <View style={{flex:1, backgroundColor:'powderblue'}}/>
      <View style={{flex:2, backgroundColor:'skyblue'}}/>
      <View style={{flex:3, backgroundColor:'steelblue'}}/> */}

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <View style={{height:50, width:50, backgroundColor:'powderblue'}}/>
      <View style={{height:100, width:100, backgroundColor:'skyblue'}}/>
      <View style={{height:150, width:150, backgroundColor:'steelblue'}}/>
      </View>

      <Button onPress={() => props.navigation.navigate('Screen2') }
          title="Press Me"/>
    </>
  );
};

const styles = StyleSheet.create({
  teks:{
    color:'green', fontSize:30, fontWeight:'bold'
  }
  
});

export default Screen1;
