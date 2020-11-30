import React, { useEffect ,useState} from "react";
import { View,ScrollView,Text, TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux'
import {styles} from '../../styles/groupStyles'
import {groupApiPath} from '../../endpoints'
import {getAccessToken} from '../../utils/Authenticator'
import axios from 'axios'
import {groupEditData,groupStatus} from '../../states/group/groupAction'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function Group ({navigation}){
	const [afterPress , setafterPress] = useState(false)
	const token = getAccessToken()
	const [group,setgroup] = useState([])
	const dispatch = useDispatch()
	useEffect(() => {
        GroupView()
       
    },[]);
    const GroupView = () =>
    {
        let data =
        {
          "access_token": token ,
          "request_type":"view_grp_name"
        }
		
        axios.post(groupApiPath, data)
		.then((resp) => {	
			if (resp.data.status === "success") {
				let res = resp.data.payload.data
				
				setgroup(res)
			
			}
		
		})
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
    return (
		<ScrollView>
		
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
								<View   style={styles.GroupBlockAgents}> 
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
    );

}

export default Group;
