import { Picker,View } from 'react-native';

import React,{useState} from 'react';

const DropDown =()=>{

const [selectedClass,setSelectedClass] = useState('');


const [classes] = useState(
    [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',

    ].sort()
);

return(
    <View style={{alignItems:'center',justifyContent:'center',width:80}}>
    <Picker
    style={{width:80,height:50,lineHeight:20,fontWeight:'800'}}
    itemStyle={{fontWeight:'bold',textAlign:'center'}}
    mode='dropdown'
    selectedValue={selectedClass}
    onValueChange={(itemVal) => {setSelectedClass(itemVal);}}    
    >
    {
        classes.map((l)=> (
            <Picker.Item label={l} value={l} />
        ))
        
    }
    </Picker>
    </View>
);
}

export default DropDown;




