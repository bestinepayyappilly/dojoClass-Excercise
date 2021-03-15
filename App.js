import * as React from 'react';
import {View,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/NavBar';
import {StatusBar} from  'expo-status-bar';


export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})