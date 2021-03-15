import React from 'react';
import {Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import {Icon} from 'react-native-elements';
import ClassroomScreen from '../ClassroomScreen';

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
      activeTintColor:'#00B2EE',
      inactiveTintColor:'#000000',
      labelStyle:{
        fontSize:15
      },
      style:{height:50}
    }}
    >
      <Tab.Screen  name="Practice" component={PracticeScreen} options={{
        tabBarIcon:() =>(
          <Icon name='book' size={30} />
        )
      }}/>
      <Tab.Screen name="Classroom" component={ClassScreen} options={{
        tabBarIcon:() =>(
          <Icon name='book' size={30}/>
          )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarIcon:() =>(
          <Icon name='person' size={30} />
          )
      }} />
    </Tab.Navigator>
  );
}


export default MyTabs;