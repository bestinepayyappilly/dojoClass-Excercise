import React from 'react';
import {View,Text,Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../ClassroomScreen/styles';


const ClassroomScreen =() =>{
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
        </View>
    );

}

export default ClassroomScreen;
