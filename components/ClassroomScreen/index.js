import React from 'react';
import {FlatList,View,Text,Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../ClassroomScreen/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Cards from '../ClassRoomCards';
import classes from './classes';
import BottomSheet from '../bottomSheet';


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
        <View style={{marginTop:150}}>
        <FlatList
        data={classes}
        renderItem={({item})=><Cards item={item}/>}
        />
        
        </View>
        <BottomSheet/>
        </View>
    );

}

export default ClassroomScreen;
