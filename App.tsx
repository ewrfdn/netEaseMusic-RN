/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomePage from "./views/homePage"
import Nav from "./components/nav"
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
      <Nav></Nav>
        <ScrollView
        style={style.viewStyle}
          contentInsetAdjustmentBehavior="automatic"
         >
           <HomePage></HomePage>
          
          
        </ScrollView>
      </SafeAreaView>
      
    </>
  );
};

const style=StyleSheet.create({
  viewStyle:{
    position:'absolute',
    backgroundColor:'#eee',
    top:0,
    minWidth:600,
    left:320
    
  }
})

export default App;
