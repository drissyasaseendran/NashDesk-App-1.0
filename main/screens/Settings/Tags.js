import React, { useEffect,useRef, useState } from "react";
import {TextInput,ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import { FAB } from 'react-native-paper';
import {styles} from '../../styles/tagStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TagAdd from '../../screens/Settings/TagAdd'
function Tags (){
	const [afterPress , setafterPress] = useState(true)
	const [visible,setVisible] = useState(true)
	const [tagFeild,settagFeild] = useState({
		tag: "", })
	const sheetRef = useRef(null)
	useEffect(() => {
	})
	const pressLong = () =>
	{
	
		setafterPress(false)
		
	}
    const renderContent = () => (
		<View style={styles.EditFeild}>
				<TextInput style = {styles.editProfile}
					underlineColorAndroid = "transparent"
					placeholder = "Code"
					placeholderTextColor = "#666"
					name="tag"
					value={tagFeild.tag}
					autoCapitalize = "none"
					onChangeText={(text)=>onTagChange(text, 'tag')} 
				/>
				<TouchableOpacity   style={styles.btnUpdate} onPress={() => ProfileUpdate()}  >
						<Text  style={styles.btnText} >UPDATE</Text>      
				</TouchableOpacity>  
		</View>
	  );
	  const onTagChange = (text ,stateProp) =>
      {
		settagFeild({ ...tagFeild, [stateProp]: text });
        
	 }
	 const EditPress = () =>
	 {
		sheetRef.current.snapTo(1)
	 }
	return (
	
		<View>
			<ScrollView  
				showsVerticalScrollIndicator={false}
				rollEventThrottle={16}
				>
					<View style={styles.tagView}>
			<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.tagBlock}>
						<View style={styles.View}>
								<View style={styles.tagBlockView}>
									<View><Icon style={styles.tagBlockIcon} name="tag-outline"/></View>
									<View style={styles.tagcontent}>
									<Text style={styles.tagTitle}>dsadsda</Text>
									<Text style={styles.tagTitlesub}>Used in 50 Tickets</Text>
									<Text style={styles.tagTitleHash}>#reused,#refund</Text>
									</View>	
								</View>
								<View  style={styles.btn} > 
										<TouchableOpacity  onPress={() => editGroup(group)}   >
										<Icon name="pencil-outline" style={styles.IconcolorEdit} fontSize='inherit' color='inherit'/>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => deleteGroup(group.grp_id)}  >
										<Icon name="trash-can-outline" style={styles.Iconcolortrash} fontSize='inherit' color='inherit'/>
									
										</TouchableOpacity>          
									</View>
						</View>
			</TouchableOpacity>
			<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.tagBlock}>
						<View style={styles.View}>
								
								<View style={styles.tagBlockView}>
									<View><Icon style={styles.tagBlockIcon} name="tag-outline"/></View>
									<View style={styles.tagcontent}>
									<Text style={styles.tagTitle}>dsadsda</Text>
									<Text style={styles.tagTitlesub}>Used in 50 Tickets</Text>
									<Text style={styles.tagTitleHash}>#reused,#refund</Text>
									</View>	
								</View>
							
								<View  style={styles.btn} > 
										<TouchableOpacity  onPress={() => editGroup(group)}   >
										<Icon name="pencil-outline" style={styles.IconcolorEdit} fontSize='inherit' color='inherit'/>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => deleteGroup(group.grp_id)}  >
										<Icon name="trash-can-outline" style={styles.Iconcolortrash} fontSize='inherit' color='inherit'/>
									
										</TouchableOpacity>          
									</View>
							
							
						</View>
			</TouchableOpacity>
			<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.tagBlock}>
						<View style={styles.View}>
								
								<View style={styles.tagBlockView}>
									<View><Icon style={styles.tagBlockIcon} name="tag-outline"/></View>
									<View style={styles.tagcontent}>
									<Text style={styles.tagTitle}>dsadsda</Text>
									<Text style={styles.tagTitlesub}>Used in 50 Tickets</Text>
									<Text style={styles.tagTitleHash}>#reused,#refund</Text>
									</View>	
								</View>
								<View  style={styles.btn} > 
										<TouchableOpacity  onPress={() => editGroup(group)}   >
										<Icon name="pencil-outline" style={styles.IconcolorEdit} fontSize='inherit' color='inherit'/>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => deleteGroup(group.grp_id)}  >
										<Icon name="trash-can-outline" style={styles.Iconcolortrash} fontSize='inherit' color='inherit'/>
									
										</TouchableOpacity>          
									</View>
						
						</View>
			</TouchableOpacity>
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
  
