import React, { useState ,useEffect} from "react";
import {
  Image,
	ScrollView,
  Text,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux'
import {styles} from '../../styles/agentStlyes'
import { FAB } from 'react-native-paper';
import {agentViewData,agentEditData,agentStatus} from '../../states/agents/agentAction'
import {agentApiPath,agentdeleteApiPath,groupApiPath} from '../../endpoints'
import {getAccessToken} from '../../utils/Authenticator'
import axios from "axios";
function Agents ({navigation}){
	
	const [Agents,setAgents] = useState([])
	const token = '2d9cc2e28cdae62ec7c6'
	const [visible,setVisible] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
    
		fetchAgentdata()
		
			  
		},[]);
  
	const fetchAgentdata = () =>
	  {
		const data = {
		  access_token: token,
		  "request_type":"view"
		};
			axios.post(agentApiPath, data).then((respData) => {
		 
		  if(respData.data.status == "success")
		  {
		   
		  let res = respData.data.payload.data
		  setAgents(res)

		  }
		  else
		  {
		
		  }
		});
	 
	}
	const editAgents = (agent) =>
	{
		dispatch(agentEditData([agent]))
		dispatch(agentStatus("Edit"))
		navigation.navigate('AgentEdit')
	}
	const deleteAgents = (id) =>
	{
		
      let data = 
      {
        "access_token": token,
        "agt_sett_id_lst":[id],
        "request_type":"delete"
     } 
  
     axios.post(agentdeleteApiPath, data).then((respData) => {

      if(respData.data.status == "success")
      {
      
        
      }
     
      else
      {
        
      }
  
    });
	}
	const SetModelbox = () =>
	{
		setVisible(!visible)
		dispatch(tagStatus('Add'))
	}

	return (
		<View>
			<ScrollView >
			<View style={styles.Content}>
		
			{
			Agents && Agents.map((agent) =>
				{
					return(
					<View  style={styles.AgentContentBg}>
					<View style={styles.AgentContent}>
					<View  style={styles.AgentContentInside}>
						<Image  style={{ width: 60, height: 60 }} source={require('../../../images/profile.jpeg')} />
					</View>
						<View  style={styles.AgentContentInside}>
							<Text style={styles.agenttextColor}>{agent.first_name.charAt(0).toUpperCase() + agent.first_name.slice(1)}</Text>
							<Text style={styles.agenttextColorEmail}>{agent.email_id}</Text>
							<Text style={styles.agenttextColorEmail}>{agent.agent_type.charAt(0).toUpperCase() +agent.agent_type.slice(1)}</Text>
						</View>
					</View>
					<View  style={styles.AgentSidebtn}>
						<Text style={styles.agentEdit} onPress={()=>editAgents(agent)}>Edit</Text>
						<Text style={styles.agentDelete} onPress={()=>deleteAgents(agent.agt_sett_id)} >Delete</Text>
					</View>
					</View>
					)
				})	
			}
		
		</View>
				
			</ScrollView>
			<FAB style={styles.fab} icon="plus"	onPress={()=> SetModelbox()}/> 
			</View>
	  );
  
  }
  
  export default Agents;
  