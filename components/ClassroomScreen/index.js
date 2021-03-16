import React from 'react';
import {View,Text,Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../ClassroomScreen/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Cards from '../ClassRoomCards';
import BottomSheet from '../bottomSheet';

import { FlatList } from 'react-native-gesture-handler';


const ClassroomScreen =(props) =>{
    return(
        <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                Classroom
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.sortBy} onPress={()=>{console.warn('Sort By button pressed')}}>
            <Icon name="arrow-drop-down" />
            <Text>Sort By</Text>
            </Pressable>
        </View>
        <View style={{marginTop:150,flex:1}}>

        <Cards standard={"9"} subject={"Maths"} studentsNumber={"15"}/>
        <Cards standard={"9"} subject={"Maths"} studentsNumber={"15"}/>
        <Cards standard={"9"} subject={"Maths"} studentsNumber={"15"}/>
        <Cards standard={"9"} subject={"Maths"} studentsNumber={"15"}/>
        </View>
        <BottomSheet/>
        </View>
    );

}

export default ClassroomScreen;
