import React, { useEffect ,useState} from "react";
import {
    Text,
  View,
  TextInput,TouchableOpacity,
ScrollView
} from 'react-native';
import {styles} from '../../styles/groupStyles'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Select from "react-select-native";
import GroupAgentData from './GroupAgentData'
// import Dropd from 'react-dropd'
function GroupView ({navigation}){

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
     
      
        fetchGroupdata()
     
      },[]);
      const fetchGroupdata = () =>
      {
       
        if(GroupStatus == "Edit")
        {
         
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
      <ScrollView>
        <View style={styles.GroupAgentView}>
                  <View>   
                  <Text style={styles.editlabel} >Group Name</Text>
                  <TextInput 
                  style = {styles.groupProfile}
                  underlineColorAndroid = "transparent"
                  placeholder = "Code"
                  placeholderTextColor = "#666"
                  name="code"
                  value={groupFeilds.grpname} 
                  autoCapitalize = "none"
                  onChangeText={(text)=>onGroupChange(text, 'grpname')}
                  />
                  </View>
                  <View>   
                  <Text style={styles.editlabel} >Group Description</Text>
                  <TextInput
                    placeholder="Type Comment"
                    style = {styles.groupProfileTextarea}
                    value={groupFeilds.description} 
                    multiline={true}
                    numberOfLines={90}
                    onChangeText={(text)=>onGroupChange(text, 'description')}
                  />
                  </View>
                  <GroupAgentData/>
        </View>
      </ScrollView>
        <View style={styles.BtnViewEdit}> 
          <TouchableOpacity   style={styles.btnUpdate} onPress={() => groupUpdate()}  >
              <Text  style={styles.btnText} >UPDATE</Text>      
          </TouchableOpacity>          
        </View>  
    </View>
    );

}

export default GroupView;
