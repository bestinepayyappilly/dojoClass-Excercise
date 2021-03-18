import { Picker,View } from 'react-native';

import React,{useState} from 'react';

const SubjectDropDown=()=>{
const [selectedSubject,setSelectedSubject] = useState('');

const[subjects] = useState(
    [
        'English',
        'Hindi',
        'Maths',
        'Biology',
        'Physics',
        'Chemistry',
        'Computer Science'
    ]
);
return(
<View style={{alignItems:'center',justifyContent:'center'}}>
    <Picker
        style={{width:200,height:50,lineHeight:20}}
        mode='dropdown'
        selectedValue={selectedSubject}
        onValueChange={(itemVal) => {setSelectedSubject(itemVal);}}    
    >
    {
        subjects.map((l)=> (
            <Picker.Item label={l} value={l} key={l}/>
        ))
    }
    </Picker>
</View>
);
}

export default SubjectDropDown;