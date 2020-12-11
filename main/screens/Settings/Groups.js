import React, { useEffect ,useState} from "react";
import { View,ScrollView,Text, TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux'
import { FAB } from 'react-native-paper';
import {styles} from '../../styles/groupStyles'
import {groupApiPath,agentApiPath} from '../../endpoints'
import {getAccessToken} from '../../utils/Authenticator'
import axios from 'axios'
import {groupEditData,groupStatus} from '../../states/group/groupAction'
import {agentViewData} from '../../states/agents/agentAction'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GroupAdd from '../Settings/GroupAdd'

function Group ({navigation}){
	const [afterPress , setafterPress] = useState(false)
	const token = '2d9cc2e28cdae62ec7c6'
	const [group,setgroup] = useState([])
	const [visible,setVisible] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
  
		fetchGroupdata()
		fetchAgentdata()
	 
		},[]);
  
	  const fetchGroupdata = () =>
	  {
		const data = {
		  access_token: token,
		  "request_type":"view_grp_name"
		};
		axios.post(groupApiPath, data).then((respData) => {
		 
		  if(respData.data.status == "success")
		  {
	   
		  let res = respData.data.payload.data
		  setgroup(res)
		  }
	  
		});
	  }
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
			dispatch(agentViewData(res))
		  }
		});
	  }


	const  pressLong = (id) =>
	{
	
		setafterPress({ ["afterPress" + id] :true })
	
	}
	const editGroup = (group) =>
	{
		dispatch(groupStatus("Edit"))
		let data = {   
			"access_token": token,
			"grp_id":group.grp_id,
			"group_name":group.group_name,
			"request_type":"view"
		 }
		  axios.post(groupApiPath, data).then((respData) => {
			if(respData.data.status == "success")
			{
			let res = respData.data.payload.data
			dispatch(groupEditData(res))
			navigation.navigate('GroupView')
			}
		  });
		
		 
	}
	const deleteGroup = (id) =>
	{
		
		let data =
		{
		  "access_token":token,
		  "grp_id_list": [id],
		  "request_type": "delete"
		 
	  }
	  axios.post(groupApiPath, data).then((respData) => {
		
		if(respData.data.status == "success")
		{
			GroupView()
		}
		else
		{
	
		}
	
	  });
   
	}
	const navigateGroup = () =>
	{
		setVisible(true)
	}
    return (
		<View>
			<GroupAdd visible={visible}/>	
		<ScrollView  
		    showsVerticalScrollIndicator={false}
            rollEventThrottle={16}
            >
		
			<View style={styles.GroupView}>
			{
				group && group.map((group) =>
				{
				return (
					<TouchableOpacity   onLongPress={()=>pressLong(group.grp_id)}  style={styles.GroupBlock}>
						<View style={styles.View}>
								<View style={styles.GroupBlockView}>
									<Icon style={styles.GroupBlockIcon} name="account-group"/>
									<Text style={styles.GroupTitle}>{group.group_name}</Text>
								</View>
								<View style={styles.GroupBlockAgents}> 
									{!afterPress["afterPress" + group.grp_id] ?
									<View  style={styles.BtnView}> 
										<Text style={styles.Groupcount}>{group.count} Agents</Text>
									</View>
									:
									<View  style={styles.BtnView}> 
										<TouchableOpacity  onPress={() => editGroup(group)} style={styles.btnEdit}   >
											<Text style={styles.textColor}>Edit</Text>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => deleteGroup(group.grp_id)}  style={styles.btnDelete} >
											<Text style={styles.textColor}>Delete</Text>
										</TouchableOpacity>          
									</View>
									}
								</View>
						</View>
					</TouchableOpacity>
				)
				   })
				}
		   
			</View>
		
			         
		
		</ScrollView>
				<FAB
				style={styles.fab}
				icon="plus"
				onPress={navigateGroup}
			/>    
			
		
			</View>
			
    );

}

export default Group;
