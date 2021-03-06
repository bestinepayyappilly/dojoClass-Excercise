import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';


const styles=StyleSheet.create({
    container:{
        width:Dimensions.get('screen').width,
        alignItems:'center'
    },
    cardContainer:{
        width:'90%',
        height:100,
        borderLeftWidth:15,
        borderRadius:10,
        backgroundColor:'#ffffff',
        borderColor:'#3FBD8D',
    },
    header:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:10
    },
    headerText:{
        fontSize:20,
        fontWeight:'600'
    },
    Content:{
        flexDirection:'column',
        height:30,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    ContentText:{
        fontSize:15
    }
});

export default styles;