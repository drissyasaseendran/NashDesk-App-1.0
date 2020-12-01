import React, { useEffect, useState } from "react";
import {
ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import {styles} from '../../styles/tagStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function Tags (){
	const [afterPress , setafterPress] = useState(true)
	useEffect(() => {
	})
	const pressLong = () =>
	{
	
		setafterPress(false)
		
	}
  
	return (
		<ScrollView>
		{alert(afterPress)}
			<View style={styles.GroupView}>
			
			<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.GroupBlock}>
						<View style={styles.View}>
								<View style={styles.GroupBlockView}>
									<Icon style={styles.GroupBlockIcon} name="tag-outline"/>
									<Text style={styles.GroupTitle}>dsadsda</Text>
								</View>
								{afterPress?<View   style={styles.GroupBlockAgents}> 
									<View  style={styles.BtnView}> 
										<TouchableOpacity  style={styles.btnEdit}   >
											<Text style={styles.textColor}>Edit</Text>
										</TouchableOpacity>
										<TouchableOpacity   style={styles.btnDelete} >
											<Text style={styles.textColor}>Delete</Text>
										</TouchableOpacity>          
									</View>
								</View>:
								<View   style={styles.GroupBlockAgents}> 
									<View  style={styles.BtnView}> 
										<TouchableOpacity  style={styles.btnEdit}   >
											<Text style={styles.textColor}>Edit</Text>
										</TouchableOpacity>
										<TouchableOpacity   style={styles.btnDelete} >
											<Text style={styles.textColor}>Delete</Text>
										</TouchableOpacity>          
									</View>
								</View>}
							
						</View>
			</TouchableOpacity>
				
			<TouchableOpacity     style={styles.GroupBlock}>
						<View style={styles.View}>
								<View style={styles.GroupBlockView}>
									<Icon style={styles.GroupBlockIcon} name="tag-outline"/>
									<Text style={styles.GroupTitle}>dsadsda</Text>
								</View>
							
						</View>
					</TouchableOpacity>
			<TouchableOpacity     style={styles.GroupBlock}>
						<View style={styles.View}>
								<View style={styles.GroupBlockView}>
									<Icon style={styles.GroupBlockIcon} name="tag-outline"/>
									<Text style={styles.GroupTitle}>dsadsda</Text>
								</View>
							
						</View>
					</TouchableOpacity>
				
			</View>
		</ScrollView>
	  );
  
  }
  
 
  export default Tags;
  
