import {StyleSheet} from 'react-native';


const styles= StyleSheet.create({
    container:{
        flex:1,
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

    },
    addButton:{
        position:'absolute',
        bottom:30,
        alignItems:'center',
        width:'100%'
        },
    addClassroom:{
        height:50,
        width:200,
        backgroundColor:'#6D9FDC',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:10,
        borderRadius:10,
        elevation:2
    },
    buttonText:{
        fontSize:20,
        color:'#ffffff'

    }
});

export default styles;