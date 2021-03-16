import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles=StyleSheet.create({
    headerContainer:{
        padding:30,
        
    },
    header:{
        fontSize:25,
        fontWeight:'700',
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:"100%",
        color:'#000000'
    },
    bodyContainer:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:5,
        paddingBottom:20,

        
        
    },
    body:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    bodyText:{
        fontSize:15,
    },
    bodyInput:{
        fontSize:15,
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:30,
        marginTop:0,
        marginBottom:0
    },
    addButton:{
        height:50,
        width:120,
        backgroundColor:'#3FBD8D',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    cancelButton:{
        height:50,
        width:120,
        backgroundColor:'#ffffff',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#3FBD8D',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default styles;
