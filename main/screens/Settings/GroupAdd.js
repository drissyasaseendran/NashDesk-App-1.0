import React, { useEffect ,useState} from "react";
import { View,Text,TextInput, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from '../../styles/groupStyles'
import {groupApiPath,profileApiPath} from '../../endpoints'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";

function GroupAdd (props){
  const [groupname, setGroupname] = useState("");
  const [description, setDescrition] = useState("");
  const [username, setUsername] = useState("");
  const [agentType, setagentType] = useState("");
  const token = "2d9cc2e28cdae62ec7c6"

	useEffect(() => {
     fetchProfile()
	 
    },[props.visible]);
    const fetchProfile = () =>
    {
      const data = {
        access_token: token,
        "request_type":"view"
      };
      axios.post(profileApiPath, data).then((respData) => {
       
        if(respData.data.status == "success")
        {
        let res = respData.data.payload.data
        setUsername(res[0].username)
        setagentType(res[0].agentType) 
      }
       
    
      });
    }
    const handleSubmit = () => {
      alert(agentType)
      let data =
      { 
  
        "access_token": token,
        "fields":{
            "agt_sett_id":"",
            "group_name":groupname,
            "description":description,
            "agent_username":[username]
           },
        "agent_type":agentType,	   
        "request_type":"add"  
     
     }
     axios.post(groupApiPath, data).then((respData) => {
       
      if(respData.data.status == "success")
      {
        props.fetchGroupdata()
      }
      else
      {
   
      }
  
    });
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
        <View
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
         
             <TouchableOpacity onPress={()=>handleSubmit()} style={styles.button}><Text style={styles.textcolor}>Add</Text></TouchableOpacity>
        </View>
  </Modal>
    );

}

export default GroupAdd;
