import React from 'react';
import {View,Text} from 'react-native';
import {Card, CardItem} from 'native-base';
import styles from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cards = (props) => {
    return(
        <View style={styles.container}>
        
        <Card style={styles.cardContainer}>
        
        <CardItem style={styles.header}>
        
        <Text style={styles.headerText}>Group 12 class 9</Text>
        
        <Icon name='dots-vertical' size={25}/>
        
        </CardItem>
        <CardItem style={styles.Content}>
        
        <Text style={styles.ContentText}>Class 9 Physics</Text>
        <Text style={styles.ContentText}>Students 10</Text>
                
        </CardItem>

        
        </Card>
        
        </View>
    );

}

export default Cards;