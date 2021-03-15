import {StyleSheet} from 'react-native';


const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    textContainer:{
        position:'absolute',
        top:50
    },
    text:{
        fontSize:25,
        fontFamily:'sans-serif',
        fontWeight:'600'
    },
    buttonContainer:{
        position:'absolute',
        top:100
    },
    sortBy:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        left:100

    }
});

export default styles;