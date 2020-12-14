import React, { useEffect ,useState} from "react";
import { View,Text,TextInput, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux'
import {styles} from '../../styles/tagStyles'
import {groupApiPath,profileApiPath} from '../../endpoints'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";

function TagAdd (props){

  const [visible,setVisible] = useState(false)
  const [tagerror,settagError] = useState('')
  const token = "2d9cc2e28cdae62ec7c6"

	useEffect(() => {
    
   
      setVisible(true)
 
    },[props.visible]);

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
                  <Text style={styles.modlTextAdd}>Add Group</Text>
                  <Icon onPress={()=>setVisible(false)} style={styles.modelCloseicon}  name="close"/>
              </View>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Group Name"
               placeholderTextColor = "#888"
               autoCapitalize = "none"
               onChangeText={groupname => setGroupname(groupname)}
               />
                <Text style={styles.Error}>{tagerror}</Text>
           
             <TouchableOpacity onPress={()=>handleSubmit()} style={styles.button}><Text style={styles.textcolor}>Add</Text></TouchableOpacity>
        </View>
  </Modal>
    );

}

export default TagAdd;
