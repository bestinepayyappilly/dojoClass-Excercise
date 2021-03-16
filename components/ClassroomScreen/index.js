import React from 'react';
import {View,Text,Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../ClassroomScreen/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Cards from '../ClassRoomCards';


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
        <Cards/>
        <View style={styles.addButton}>
            <Pressable style={styles.addClassroom}>
            <AntIcon name='plus' size={20} color={'white'}/>
            <Text style={styles.buttonText}>Add Classroom</Text>
               
            </Pressable>
        </View>
        </View>
    );

}

export default ClassroomScreen;
