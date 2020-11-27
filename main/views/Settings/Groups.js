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
	const [afterPress , setafterPress] = useState(true)
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
	const  pressLong = () =>
	{
		setafterPress(!afterPress)
	}
    return (
		<ScrollView>
			<View style={styles.GroupView}>
			{
					
					group && group.map((group) =>
					
				   {
				return (<TouchableOpacity   onLongPress={()=>pressLong()}  style={styles.GroupBlock}>
				
				<View style={styles.View}>
						<View style={styles.GroupBlockView}>
						<Text style={styles.GroupTitle}>{group.group_name}</Text>
												</View>
					
						<View   style={styles.GroupBlockAgents}> 
						{afterPress?<Text style={styles.Groupcount}>{group.count} Agents</Text>:<View  style={styles.BtnView}> 
							
							<TouchableOpacity  style={styles.btnEdit}   >
								<Text style={styles.textColor}>Edit</Text>
							</TouchableOpacity>
							<TouchableOpacity   style={styles.btnDelete} >
							<Text style={styles.textColor}>Delete</Text>
							</TouchableOpacity>          
				   </View> }
						</View>
					</View>
					

				</TouchableOpacity>)
				   })
				}
				
			</View>
		</ScrollView>
    );

}

export default Group;
