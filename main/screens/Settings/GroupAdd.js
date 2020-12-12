import React, { useEffect ,useState} from "react";
import { View,Text,TextInput, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from '../../styles/groupStyles'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function GroupAdd (props){
  const [groupname, setGroupname] = useState("");
  const [description, setDescrition] = useState("");


	useEffect(() => {
     
	 
    },[props.visible]);

    const handleSubmit = () => {
      if(username != '')
      {
      if(usrErrorCode === 0 && pwdErrorCode === 0)
      { 
        loginCall(username, password)
        setuserError('')
        setpassError('')
      }
      
      else if(usrErrorCode === 1)
      {
        setuserError('Enter Valid Email id required')
      }
      else if(pwdErrorCode == 1)
      {
        setpassError("Enter Valid password")
      }
    }
  }
    return (
        <Modal
        style={styles.addGroupModal}
        animationType={"slide"}
        transparent={true} 
        hasBackdrop={true}
        backdropColor="black"
        backdropOpacity= {1}
        visible={props.visible}
        onRequestClose={() => {}}>
        <TouchableOpacity
          style={styles.GroupModal}
          activeOpacity={1}
          onPressOut={() => {}}>
              <View style={styles.modelClose} >
                  <Text style={styles.modlTextAdd}>Add Group</Text>
              <Icon onPress={props.Close} style={styles.modelCloseicon}  name="close"/>
                  
              </View>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Group Name"
               placeholderTextColor = "#888"
               autoCapitalize = "none"
               onChangeText={groupname => setGroupname(groupname)}
               />
                <Text style={styles.Error}>Group name required</Text>
                <TextInput
            placeholder="Type Comment"
            style = {styles.inputTextarea}
            multiline={true}
            maxLength={200}
            numberOfLines={5}
            onChangeText={description => setDescrition(description)}
          />
         
             <TouchableOpacity onPress={handleSubmit} style={styles.button}><Text style={styles.textcolor}>Add</Text></TouchableOpacity>
        </TouchableOpacity>
  </Modal>
    );

}

export default GroupAdd;
