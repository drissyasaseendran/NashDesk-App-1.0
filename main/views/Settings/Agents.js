import React, { useState ,useEffect} from "react";
import {
  Image,
  Text,
  View,

} from 'react-native';
import {styles} from '../../styles/agentStlyes'
import {agentViewData,agentEditData,agentStatus} from '../../states/agents/agentAction'
import {agentApiPath,agentdeleteApiPath,groupApiPath} from '../../endpoints'
import {getAccessToken} from '../../utils/Authenticator'
import axios from "axios";
function Agents ({navigation}){
	const token = getAccessToken()
	const [Agents,setAgents] = useState([])
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

	return (
			<View>
			<View style={styles.Agents}>
				<Text style={styles.agentText}>Agents</Text>
			</View>
			{
			Agents && Agents.map((agent) =>
				{
			return(<View  style={styles.AgentContentBg}>
			<View style={styles.AgentContent}>
			<View  style={styles.AgentContentInside}>
				<Image  style={{ width: 60, height: 60 }} source={require('../../../images/profile.jpeg')} />
			</View>
				<View  style={styles.AgentContentInside}>
					<Text style={styles.agenttextColor}>{agent.first_name}</Text>
							<Text style={styles.agenttextColorEmail}>{agent.email_id}</Text>
			<Text style={styles.agenttextColorEmail}>{agent.role}</Text>
				</View>
			</View>
			<View  style={styles.AgentSidebtn}>
					<Text style={styles.agentEdit}>Edit</Text>
					<Text style={styles.agentDelete}>Delete</Text>
			</View>
			</View>)
				})	
		}
			<View  style={styles.AgentContentBg}>
			<View style={styles.AgentContent}>
			<View  style={styles.AgentContentInside}>
				<Image  style={{ width: 60, height: 60 }} source={require('../../../images/profile.jpeg')} />
			</View>
				<View  style={styles.AgentContentInside}>
					<Text style={styles.agenttextColor}>Drissya</Text>
							<Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
							<Text style={styles.agenttextColorEmail}>Admin</Text>
				</View>
			</View>
			<View  style={styles.AgentSidebtn}>
					<Text style={styles.agentEdit}>Edit</Text>
					<Text style={styles.agentDelete}>Delete</Text>
			</View>
			</View>
			<View  style={styles.AgentContentBg}>
			<View style={styles.AgentContent}>
			<View  style={styles.AgentContentInside}>
				<Image  style={{ width: 60, height: 60 }} source={require('../../../images/profile.jpeg')} />
			</View>
				<View  style={styles.AgentContentInside}>
					<Text style={styles.agenttextColor}>Drissya</Text>
							<Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
							<Text style={styles.agenttextColorEmail}>Admin</Text>
				</View>
			</View>
			<View  style={styles.AgentSidebtn}>
					<Text style={styles.agentEdit}>Edit</Text>
					<Text style={styles.agentDelete}>Delete</Text>
			</View>
			</View>
			</View>
	  );
  
  }
  
  export default Agents;
  