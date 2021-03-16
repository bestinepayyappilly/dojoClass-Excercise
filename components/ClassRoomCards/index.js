import React from 'react';
import {View,Text} from 'react-native';
import {Card, CardItem} from 'native-base';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cards = (props) => {

    const { standard,subject,studentsNumber} = props;


    return(
        <View style={styles.container}>
        
        <Card style={styles.cardContainer}>
        
        <CardItem style={styles.header}>
        
        <Text style={styles.headerText}>Group 12 Class {standard}</Text>
        
        <Icon name='dots-vertical' size={25}/>
        
        </CardItem>
        <CardItem style={styles.Content}>
        
        <Text style={styles.ContentText}>Class {standard} {subject}</Text>
        <Text style={styles.ContentText}>Students {studentsNumber}</Text>
                
        </CardItem>

        
        </Card>
        
        </View>
    );

}

export default Cards;