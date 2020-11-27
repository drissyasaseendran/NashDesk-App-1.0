import React, { useEffect ,useState} from "react";
import {

  View,
ScrollView,Text, TouchableOpacity
} from 'react-native';
import {styles} from '../../styles/groupStyles'
import {groupApiPath} from '../../endpoints'
import {getAccessToken} from '../../utils/Authenticator'
import axios from 'axios'
function Group ({navigation}){
	const [afterPress , setafterPress] = useState(false)
	const token = getAccessToken()
	const [group,setgroup] = useState([])
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
	const editGroup = () =>
	{
		alert("dgys")
	}
	const deleteGroup = (id) =>
	{
		alert("yd")
		let data =
		{
		  "access_token":token,
		  "grp_id_list": [id],
		  "request_type": "delete"
		 
	  }
	  axios.post(groupApiPath, data).then((respData) => {
		alert(respData.data)
		if(respData.data.status == "success")
		{
		alert("succes")
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
								<Text style={styles.GroupTitle}>{group.group_name}</Text>
							</View>
							<View   style={styles.GroupBlockAgents}> 
							{!afterPress["afterPress" + group.grp_id] ?<Text style={styles.Groupcount}>{group.count} Agents</Text>:
							<View  style={styles.BtnView}> 
								<View  onPress={() => editGroup(group.grp_id)}  style={styles.btnEdit}   >
									<Text style={styles.textColor}>Edit</Text>
								</View>
								<View onPress={() => deleteGroup(group.grp_id)}    style={styles.btnDelete} >
								<Text style={styles.textColor}>Delete</Text>
								</View>          
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
