import React from 'react';
import {Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ClassroomScreen from '../ClassroomScreen';
import { color } from 'react-native-reanimated';

function PracticeScreen() {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.text}>Practice</Text>
    </View>
  );
}

function ClassScreen() {
  return (
      <ClassroomScreen/>
  );
}
function ProfileScreen() {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      inactiveTintColor:'#000000',
      activeTintColor:'#6D9FDC',
      
      labelStyle:{
        fontSize:12
      },
      style:{height:50}
    }}
    >
      <Tab.Screen  name="Practice" component={PracticeScreen} options={{
        tabBarIcon:({tintColor}) =>(
          <AntIcon name='book' color={'#6D9FDC'} size={25} />
        ),
        tabBarOptions:{activeTintColor:'red'}
      }}/>
      <Tab.Screen name="Classroom" component={ClassScreen} options={{
        tabBarIcon:({tintColor}) =>(
          <AntIcon name='book' color={tintColor} size={25}/>
          )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarIcon:({tintColor}) =>(
          <AntIcon name='user' color={tintColor} size={25} />
          )
      }} />
    </Tab.Navigator>
  );
}


export default MyTabs;