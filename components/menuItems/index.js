import React from 'react';
import {TextInput,Text,View,Pressable} from 'react-native';
import styles from './styles';
import DropDown from '../Picker/classDropDown';
import SubjectDropDown from '../Picker/Subjects';

const MenuItems=()=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            <TextInput
                style={styles.header}
                editable={false}
                value={'Add a Class'}
            />
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        Class
                    </Text>
                    <TextInput
                    styles={styles.bodyInput}
                        placeholder={'Dbs Class 10'}
                    />
                </View>

            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        Standard
                    </Text>
                    <DropDown/>
                </View>
            </View>


            <View style={styles.bodyContainer}>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        Subject
                    </Text>
                    <SubjectDropDown/>
                </View>

            </View>
            <View style={styles.button}>
            <Pressable style={styles.addButton}>
                <Text style={{color:'#ffffff',fontSize:15}}>Add</Text>
            </Pressable>
            <Pressable style={styles.cancelButton}>
                <Text style={{color:'#3FBD8D',fontSize:15}}>CANCEL</Text>
            </Pressable>
            </View>
        </View>
    );
}

export default MenuItems;
