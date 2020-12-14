import React, { useEffect, useState } from "react";
import {View} from 'react-native';
import { FAB } from 'react-native-paper';
import axios from 'axios'
import {styles} from '../../styles/tagStyles'
import TagAdd from '../../screens/Settings/TagAdd'
import {tagApiPath} from '../../endpoints'
import DialogBox from '../../../components/DailogBox'
import TagView from '../Settings/TagView'
function Tags (){
	const [visible,setVisible] = useState(false)
	const token = '2d9cc2e28cdae62ec7c6'
	const [tag,setTag] = useState([])
	const [DailogVisible ,setDailogVisible] = useState(true)
	const [tagId,setTagId] = useState('')
	const [tagname,setTagname]= useState('')
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
	const  editTag = (tag) =>
	{
		setVisible(!visible)
	} 
	const deleteTagConfirm = (id) => 
	{
		setDailogVisible(true);
		setTagId(id)
		
	}
	const deleteTag = () =>
	{
	    	let data = { 
				"tag_id_lst":[tagId] ,     
				"access_token":token,   
				"request_type":"delete"   
		    }
			axios.post(tagApiPath, data).then((respData) => {
		 		if(respData.data.status == "success")
				{
					fetchTagdata()
				}
				else
				{
					fetchTagdata()
				}
		  
			});
	}
	const hideDialog = () =>
	{
		setDailogVisible(false);
	}
	const SetModelbox = () =>
	{
		setVisible(!visible)}
	return (
		<View>
			<TagView tag={tag} editTag={editTag} deleteGroupConfirm={deleteTagConfirm}/>
		 	<DialogBox DailogVisible={DailogVisible} delete={deleteTag} hideDialog={hideDialog}/>
			<TagAdd visible={visible} fetchTagdata={fetchTagdata} SetModelbox={SetModelbox}/>
			<FAB style={styles.fab} icon="plus"	onPress={()=> SetModelbox()}/> 
		</View>
	);
  
  }
  
 
  export default Tags;
  
