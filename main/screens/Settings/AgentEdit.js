import React, { useState ,useEffect} from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity, ScrollView,Picker} from 'react-native';
import {styles} from '../../styles/agentStlyes'
import SwitchSelector from "react-native-switch-selector";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux'
import { FAB } from 'react-native-paper';

function AgentEdit ({navigation}){
  const options = [{name: 'Srigar', id: 1},{name: 'Sam', id: 2}]
 
   const [groupSelected,setgroupSelected] = useState([])
   const [role, setRole] = useState('agent');
   const agentEditData = useSelector(state => state.agent.agent.agentedit)
   const agentStatus = useSelector(state => state.agent.agent.agentStatus)
   const [agentFeilds, setagentFeilds] = useState({
         agt_sett_id:'',
         first_name:'',
         last_name:'',
         email_id:'',
         agent_type: '',
         password:'',
         image:"",
         group:[]
  });
  const [selectedValue,setSelectedValue] = useState('')
  useEffect(() => {
    if(agentStatus == 'Edit')
    {
      if(agentEditData)
      {
        if(agentEditData.length>0)
        {
      setagentFeilds({ ...agentFeilds, agt_sett_id:agentEditData[0].agt_sett_id,first_name:agentEditData[0].first_name,last_name:agentEditData[0].last_name,email_id:agentEditData[0].email_id,agent_type:agentEditData[0].agent_type,password:agentEditData[0].password,image:agentEditData[0].image  });
      }
        }  
      }
      else
      {
        setagentFeilds({ ...agentFeilds, agt_sett_id:'',first_name:'',last_name:'',email_id:'',agent_type:'',password:'',image:''});
     
      }   
  },[]);
  const onAgentChange = (text ,stateProp) =>
  {
      setagentFeilds({ ...agentFeilds, [stateProp]: text });
  }
  const AgentEdits = () =>
  {
    if(agentStatus == 'Edit')
    {
      let data = {
   
         "access_token":token,
         "agt_sett_id":agentFeilds.agt_sett_id,      
         "fields":{"first_name":agentFeilds.first_name,
         "last_name":agentFeilds.last_name,
         "agent_type":role,'image':agentFeilds.image,
         "group":groupSelected},
         "request_type":"update"   
     
      }
   
     axios.post(agentApiPath, data).then((respData) => {

       if(respData.data.status == "success")
       {
    
       }
     else
     {
       
 
     }

     });
    }
    else
    {

    }
   }
   const AgentRole = (value) =>
   {
      setRole(value)
   }
	return (
	    <View>
        <ScrollView showsVerticalScrollIndicator={false} rollEventThrottle={16}>
     
        <View  style={styles.canvasEditBody}>
        <View style={styles.EditBody}> 
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >First Name</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#666"
               name="first_name"
               value={agentFeilds.first_name} 
               autoCapitalize = "none"
               onChangeText={(text)=>onAgentChange(text, 'first_name')}
          
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Last Name</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Home"
               placeholderTextColor = "#666"
               name="last_name"
               value={agentFeilds.last_name} 
               autoCapitalize = "none"
               onChangeText={(text)=>onAgentChange(text, 'address')}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Email Id</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "City"
               value={agentFeilds.email_id} 
               placeholderTextColor = "#666"
               name="city"
               autoCapitalize = "none"    
               onChangeText={(text)=>onAgentChange(text, 'city')}
               
        />
        </View>
       
        <View style={styles.EditFieldDropdown} >
        <Picker
          
          selectedValue={selectedValue}
      
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Java" value="java" />
        </Picker>
        </View>
        <View style={styles.EditFieldSwitch}> 
         <SwitchSelector
               initial={0}
               onPress={(value) => AgentRole(value)}
               textColor= '#888'
               selectedColor='#fff'
               buttonColor='#0187CA'
               borderColor='#eef'
               hasPadding
               options={[
                  { label: "Admin",      value: "admin",      imageIcon:  <Icon  fontColor='red' name="account-group"/>},
                  { label: "Agent",      value: "agent",      imageIcon:  <Icon fontColor='red' name="account-group"/> },
                  { label: "Supervisor", value: "supervisor", imageIcon:  <Icon fontColor='red' name="account-group"/> }
               ]}
               />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Password</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               name="password"
               placeholderTextColor = "#666"
               autoCapitalize = "none"
               value={agentFeilds.password} 
               onChangeText={(text)=>onAgentChange(text, 'password')}
               
        />
        </View>
        </View>    
        <View>

        </View>
     </View>
     </ScrollView>
     <FAB style={styles.fab} icon="check"	onPress={()=> AgentEdits()}/>  
     </View>

	  );
  
  }
  const pickerStyle = StyleSheet.create({
    picker: {
      textDecorationLine: 'underline'
    }
  });

  export default AgentEdit;
  