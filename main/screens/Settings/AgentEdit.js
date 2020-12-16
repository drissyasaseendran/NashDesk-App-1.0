import React, { useState ,useEffect} from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity, ScrollView,Picker} from 'react-native';
import {styles} from '../../styles/agentStlyes'
import SwitchSelector from "react-native-switch-selector";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {agentApiPath,groupApiPath} from '../../endpoints'
import { useSelector } from 'react-redux'
import { FAB } from 'react-native-paper';
import axios from "axios";
import Feather from 'react-native-vector-icons/Feather';

function AgentEdit ({navigation}){


   const token = '2d9cc2e28cdae62ec7c6'
   const item = [{id: 1, name: 'Bedroom'}, {id: 2, name: 'LivingRoom'}]
   const [groupSelected,setgroupSelected] = useState([])
   const [role, setRole] = useState('agent');
   const [groupData,setgroup] = useState([])
   const agentEditData = useSelector(state => state.agent.agent.agentedit)
   const agentStatus = useSelector(state => state.agent.agent.agentStatus)
   const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});
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

  useEffect(() => {
    fetchGroup()
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

   const fetchGroup = () =>
   {
      let data = {
    
        "access_token":token,
        "request_type":"view_grp_name"
       }
    axios.post(groupApiPath, data).then((respData) => {
    if(respData.data.status == "success")
    {
      let res = respData.data.payload.data
		  setgroup(res)
    }
    })
  }
  const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
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
               onChangeText={(text)=>onAgentChange(text, 'last_name')}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Email Id</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               editable={false} selectTextOnFocus={false}
               value={agentFeilds.email_id} 
               placeholderTextColor = "#666"
               name="email_id"
               readOnly
               autoCapitalize = "none"    
               onChangeText={(text)=>onAgentChange(text, 'email_id')}
               
        />
        </View>
       <View>
  
       </View>
        <View style={styles.EditFieldDropdown} >
        <Picker
         selectedValue={groupSelected}
         onValueChange={(itemValue, itemIndex) => setgroupSelected(itemValue)}
        >
          {
				groupData && groupData.map((group) =>
				{
				return (
          <Picker.Item  label={group.group_name} value={group.group_name} />
        )
        })
      }
      
        </Picker>
        </View>
        <View style={styles.EditFieldSwitch}> 
         <SwitchSelector
               initial={0}
               onPress={(value) => setRole(value)}
               textColor= '#888'
               borderRadius={5}
               buttonMargin={10}
               selectedColor='#fff'
               buttonColor='#1a73e8'
               borderColor='#eef'
               hasPadding
               options={[
                  { label: "Admin",      value: "admin",     },
                  { label: "Agent",      value: "agent",     },
                  { label: "Supervisor", value: "supervisor",}
               ]}
               />
        </View>
        <View > 
        
        <Text style={styles.editlabel} >Password</Text>
        <View style={styles.AgentPassword}>
        <TextInput style = {styles.EditFieldPass}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               name="password"
               placeholderTextColor = "#666"
               autoCapitalize = "none"
               value={agentFeilds.password} 
               secureTextEntry={data.confirm_secureTextEntry ? true : false}
               onChangeText={(text)=>onAgentChange(text, 'password')}
               
        />
         <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={17}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={17}
                    />
                    }
                </TouchableOpacity>
                </View>
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
  