import React, { useEffect,useRef, useState } from "react";
import {TextInput,ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import { FAB } from 'react-native-paper';
import axios from 'axios'
import {styles} from '../../styles/tagStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TagAdd from '../../screens/Settings/TagAdd'
import {tagApiPath} from '../../endpoints'
function Tags (){
	const [visible,setVisible] = useState(true)
	const token = '2d9cc2e28cdae62ec7c6'
	const [tag,setTag] = useState([])
	const sheetRef = useRef(null)
	useEffect(() => {
		fetchTagdata()
	},[])

	const fetchTagdata = () =>
	{
		let data = {
			"access_token":token,
			"request_type":"view_count"
		 } 
		 axios.post(tagApiPath, data).then((respData) => {
		   
		  if(respData.data.status == "success")
		  {
			let ar = []
			let count_view = respData.data.payload.data
			const count = Object.entries(count_view).map(([key, value]) => {
				
				let data = {
					"tag": key,
					"value": value
				}
				ar.push(data)
	
			  })
	
			  setTag(ar)
		
		  }
	  
		});
	   
	}
	return (
	
		<View>
			<ScrollView  
				showsVerticalScrollIndicator={false}
				rollEventThrottle={16}
				>
			<View style={styles.tagView}>
			{tag && tag.map((tag) =>
				{
				return(<TouchableOpacity   style={styles.tagBlock}>
						<View style={styles.View}>
								<View style={styles.tagBlockView}>
									<View><Icon style={styles.tagBlockIcon} name="tag-outline"/></View>
									<View style={styles.tagcontent}>
									<Text style={styles.tagTitle}>{tag.tag} </Text>
									<Text style={styles.tagTitlesub}>Used in {tag.value.count} Tickets</Text>
									<Text style={styles.tagTitleHash}>#reused,#refund</Text>
									</View>	
								</View>
								<View  style={styles.btn} > 
										<TouchableOpacity  onPress={() => editGroup(tag.value.tag_id)}   >
										<Icon name="pencil-outline" style={styles.IconcolorEdit} fontSize='inherit' color='inherit'/>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => deleteGroup(tag.value.tag_id)}  >
										<Icon name="trash-can-outline" style={styles.Iconcolortrash} fontSize='inherit' color='inherit'/>
									
										</TouchableOpacity>          
									</View>
						</View>
			</TouchableOpacity>)
			 })
			}
	   

			</View>
			</ScrollView>
			<TagAdd visible={false}/>
			<FAB
				style={styles.fab}
				icon="plus"
				onPress={()=>setVisible(true)}
			/> 
			  
			</View>
	
	
	  );
  
  }
  
 
  export default Tags;
  
