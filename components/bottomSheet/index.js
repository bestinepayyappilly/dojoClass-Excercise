import React, { useRef } from "react";
import { View,Text,Pressable } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MenuItems from '../menuItems';

export default function BottomSheet() {


  const refRBSheet = useRef();
  return (
    <View style={styles.addButton}>
            <Pressable 
            style={styles.addClassroom} 
            onPress={()=>refRBSheet.current.open()}>
            <AntIcon name='plus' size={20} color={'white'}/>
            <Text style={styles.buttonText}>Add Classroom</Text>
            </Pressable>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        closeOnPressBack={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          container:{
            borderRadius:20,height:380
          },
          
        }}
      >
        <MenuItems/>
      </RBSheet>
    </View>
  );
}