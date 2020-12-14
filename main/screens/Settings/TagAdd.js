import React, { useEffect ,useState} from "react";
import { View,Text,TextInput, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux'
import {styles} from '../../styles/tagStyles'
import {tagApiPath} from '../../endpoints'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";

function TagAdd (props){
  const token = '2d9cc2e28cdae62ec7c6'
  const [visible,setVisible] = useState(false)
  const [tagerror,settagError] = useState('')
  const tagData = useSelector(state => state.tag.tag.tagEdit)
  const tagStatus = useSelector(state => state.tag.tag.tagStatus)
	const [tagId,setTagId] = useState('')
	const [tagname,setTagname]= useState('')
  useEffect(() =>{
    alert(tagStatus)
  },[tagData])
	useEffect(() => {
     setVisible(props.visible)
     
  },[props.visible]);

  const TagSubmit = () =>
  {
    let data =
    { 

      "access_token": token,
      "tags":tagname,   
      "request_type":"add"   
    }
   axios.post(tagApiPath, data).then((respData) => {
    if(respData.data.status == "success")
    {
      props.fetchTagdata()
      props.SetModelbox()
    }
    else
    {
     
    }

  });
  }
    return (
      <Modal
        style={styles.addtagModal}
        animationType={"slide"}
        transparent={true} 
        hasBackdrop={true}
        backdropOpacity={0.5}
        backdropColor={'rgba(0, 0, 0, 0.8)'}
        visible={visible}
        onRequestClose={() => {}}>
        <View
          style={styles.tagModal}
          activeOpacity={1}
          onPressOut={() => {}}>
              <View style={styles.modelClose} >
                  <Text style={styles.modlTextAdd}>Add Tag</Text>
                  <Icon onPress={()=> props.SetModelbox()} style={styles.modelCloseicon}  name="close"/>
              </View>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Tag Name"
               placeholderTextColor = "#888"
               autoCapitalize = "none"
               onChangeText={tagname => setTagname(tagname)}
               />
              <Text style={styles.Error}>{tagerror}</Text>
             <TouchableOpacity onPress={()=>TagSubmit()} style={styles.button}><Text style={styles.textcolor}>Add</Text></TouchableOpacity>
        </View>
      </Modal>
    );

}

export default TagAdd;
