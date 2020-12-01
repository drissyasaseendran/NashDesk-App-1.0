import React, { useState ,useEffect} from "react";
import {
  Image,
  Text,
  View,TextInput,TouchableOpacity,
  ScrollView
} from 'react-native';
import {styles} from '../../styles/agentStlyes'
import SwitchSelector from "react-native-switch-selector";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux'
function AgentEdit ({navigation}){
   const [groupSelected,setgroupSelected] = useState([])
   const [role, setRole] = useState('agent');

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
   const agentEditData =  useSelector(state => state.agent.agent.agentedit)
   useEffect(() => {
      if(agentEditData)
      {
        if(agentEditData.length>0)
        {
      setagentFeilds({ ...agentFeilds, agt_sett_id:agentEditData[0].agt_sett_id,first_name:agentEditData[0].first_name,last_name:agentEditData[0].last_name,email_id:agentEditData[0].email_id,agent_type:agentEditData[0].agent_type,password:agentEditData[0].password,image:agentEditData[0].image  });
      }
        }     
   },[]);
   const onAgentChange = (text ,stateProp) =>
   {
      setagentFeilds({ ...agentFeilds, [stateProp]: text });
   }
   const UpdateAgents = () =>
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
   const AgentRole = (value) =>
   {
      setRole(value)
   }
	return (
	    <View>
        <ScrollView>
        {/* <View style={styles.header}></View> */}
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
            //    value={profileFeild.city} 
               autoCapitalize = "none"    
               onChangeText={(text)=>onAgentChange(text, 'city')}
               
        />
        </View>
        <View style={styles.EditField}> 
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
            /></View>
        <View style={styles.EditField}>
            
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
          
     </View>

     </ScrollView>
     <View style={styles.ViewAgentEditbtn}> 
        <TouchableOpacity  style={styles.btnUpdate} onPress={() => UpdateAgents()}  >
                  <Text  style={styles.btnText} >UPDATE</Text>      
         </TouchableOpacity>          
      </View>  
     </View>

	  );
  
  }
  
  export default AgentEdit;
  