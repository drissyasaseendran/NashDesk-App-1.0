import React, { useEffect ,useState} from "react";
import {
    Text,
  View,
ScrollView
} from 'react-native';
import {styles} from '../../styles/groupStyles'
import {getAccessToken} from '../../utils/Authenticator'
import {agentApiPath} from '../../endpoints'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function GroupView ({navigation}){
	const [afterPress , setafterPress] = useState(false)
	const token = getAccessToken()
    const [group,setgroup] = useState([])
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
                let datalist = []
                let res = respData.data.payload.data
                if(res)
                {
                  if(res.length>0)
                  {
                    res.map((agent) => {
                    datalist.push(agent.agent_email)
                 
                   
                 })
                 fetchGroupAgents(datalist)
             }
            
            }
              
            }
          });
      }
    const fetchGroupAgents  = (datalist) =>
    {
        const data = {
            access_token: token,
            "request_type":"view"
          };
          axios.post(agentApiPath, data).then((respData) => {
          if(respData.data.status == "success")
            {
          
            let res = respData.data.payload.data
            const agents_list = [];
            if (res.length > 0) {
             
              res.map((agent) => {
                
                  if(!datalist.includes(agent.username))
                  {
                    
                    agents_list.push({ value: agent.username, label: agent.username, name: 'agent' })
                  }
                    
              })
          
              setAgents(agents_list)
            }
            }
            else
            {
          
            }
        
          });
    }

    return (
		<ScrollView>
			<View style={styles.GroupAgentView}>
                <View style={styles.GroupAgents}>
                    <Text style={styles.agentText}>Agents</Text>
                </View>
                <View style={styles.GroupAgentContent}>
                    <View  style={styles.GroupAgentContentInside}>
                        <Text style={styles.agenttextColor}>Drissya</Text>
                        <Text style={styles.agenttextColor}>drissyasaseendran@gmail.com</Text>
                    </View>
                    <View style={styles.GroupAgentIcon}>
                        <Icon name="trash-can-outline"/>
                    </View>
                </View>
			</View>
		</ScrollView>
    );

}

export default GroupView;
