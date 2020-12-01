import React, { useEffect, useState } from "react";
import {
ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import {styles} from '../../styles/tagStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModelBox from '../../reused/ModelBox'
function Tags (){
	const [afterPress , setafterPress] = useState(true)
	const [visible,setVisible] = useState(true)
	useEffect(() => {
	})
	const pressLong = () =>
	{
	
		setafterPress(false)
		
	}
  
	return (
		<ScrollView>
	
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
							
								<View  style={styles.tagBlockUpdation}> 
									<View  style={styles.BtnView}> 
										<TouchableOpacity  style={styles.btnEdit}   >
											<Text style={styles.textColor}>Edit</Text>
										</TouchableOpacity>
										<TouchableOpacity   style={styles.btnDelete} >
											<Text style={styles.textColor}>Delete</Text>
										</TouchableOpacity>          
									</View>
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
							
								<View  style={styles.tagBlockUpdation}> 
									<View  style={styles.BtnView}> 
										<TouchableOpacity  style={styles.btnEdit}   >
											<Text style={styles.textColor}>Edit</Text>
										</TouchableOpacity>
										<TouchableOpacity   style={styles.btnDelete} >
											<Text style={styles.textColor}>Delete</Text>
										</TouchableOpacity>          
									</View>
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
							
								<View  style={styles.tagBlockUpdation}> 
									<View  style={styles.BtnView}> 
										<TouchableOpacity  style={styles.btnEdit}   >
											<Text style={styles.textColor}>Edit</Text>
										</TouchableOpacity>
										<TouchableOpacity   style={styles.btnDelete} >
											<Text style={styles.textColor}>Delete</Text>
										</TouchableOpacity>          
									</View>
								</View>
							
							
						</View>
			</TouchableOpacity>
				
			</View>
			<ModelBox visible={visible}/>
		</ScrollView>
	  );
  
  }
  
 
  export default Tags;
  
