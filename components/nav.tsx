import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export default class NavComponent extends React.Component {
        render(){
            return (
                <ScrollView style={this.style.containerStyle} >
                     <View>
                    <Text>这是导航栏</Text>
                    <Button onPress={this.buttonClick.bind(this)} title="helloWord"></Button>
                </View>
                </ScrollView>
               
            )
        }
        buttonClick(){
            Alert.alert("helloWord")
        }
        style=StyleSheet.create({
            containerStyle:{
                width:320,
                left:0,
                minHeight:500,
                top:0,
                position:"absolute",
                backgroundColor:"#cc00ee"
            }
        })
        
        
}
