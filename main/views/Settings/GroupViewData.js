import React, { useEffect ,useState} from "react";
import {Text, View} from 'react-native';
import {styles} from '../../styles/groupStyles'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function GroupViewData ({navigation}){

    const GroupEditData = useSelector(state => state.group.group.groupedit)
    const GroupStatus = useSelector(state => state.group.group.groupStatus)
    const AgentList = useSelector(state => state.group.group.groupedit)
    const login = useSelector(state => state.login)
    const [disable,setDisable] = useState(false)
    const [groupFeilds, setgroupFeilds] = useState({
      grpname: '',
      description: '',
      id:'',
      descid:''
    });
    useEffect(() => {
     
      if(GroupStatus != "Add")
      {
        fetchGroupdata()
       
      }
      },[GroupEditData]);
      const fetchGroupdata = () =>
      {
       
        if(GroupStatus == "Edit" || GroupStatus == "View")
        {
         
          if(GroupStatus == 'View')
          {
            setDisable(true)
          }
          if(GroupEditData)
          {
            if(GroupEditData.length>0)
            {
              if(GroupEditData[0].description == "")
              {
              setgroupFeilds({ ...groupFeilds,  grpname: GroupEditData[0].group_name,id:GroupEditData[0].grp_id });
              }
              else
              {
                setgroupFeilds({ ...groupFeilds,  grpname: GroupEditData[0].group_name,id:GroupEditData[0].grp_id ,description: GroupEditData[0].description[0].description,descid:GroupEditData[0].description[0].about_id });
            
              }
               
            }
          }
        }
          else
        {
           setgroupFeilds({ ...groupFeilds,  grpname: '', description: '' });
        }

      }
      const onGroupChange = (text ,stateProp) =>
      {
    
      
        setgroupFeilds({ ...groupFeilds, [stateProp]: text });
      }
      const groupUpdate = () =>
      {
        let data =
        { 
    
          "access_token": token,
          "fields":{
              "agt_sett_id":"",
              "group_name":groupadd.grpname,
              "description":groupadd.description,
              "agent_username":[login.loginData.username]
             },
          "agent_type":login.loginData.agentType,	   
          "request_type":"add"  
       
       }
       axios.post(groupApiPath, data).then((respData) => {
         
        if(respData.data.status == "success")
        {
          
        }
    })
  }
    return (
<View>
<View style={styles.GroupAgents}>
    <Text style={styles.agentText}>Agents</Text>
</View>
<View style={styles.GroupAgentContent}>
  <View  style={styles.GroupAgentContentInside}><Icon style={styles.GroupBlockIcon} name="face-agent"/></View>
    <View  style={styles.GroupAgentContentInside}>
        <Text style={styles.agenttextColor}>Drissya</Text>
        <Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
    </View>
    <View style={styles.GroupAgentIcon}>
        <Icon name="trash-can-outline" style={styles.Iconcolortrash} color='inherit'/>
    </View>
</View>
<View style={styles.GroupAgentContent}>
    <View  style={styles.GroupAgentContentInside}><Icon style={styles.GroupBlockIcon} name="face-agent"/></View>
 
    <View  style={styles.GroupAgentContentInside}>
        <Text style={styles.agenttextColor}>Drissya</Text>
        <Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
    </View>
    <View style={styles.GroupAgentIcon}>
        <Icon name="trash-can-outline" style={styles.Iconcolortrash} color='inherit'/>
    </View>
</View>
</View>
    );

}

export default GroupViewData;