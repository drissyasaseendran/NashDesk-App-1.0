import React, { useEffect,useRef, useState } from "react";
import {TextInput,
ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import {styles} from '../../styles/cannedResponseStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModelBox from '../../reused/ModelBox'
import BottomSheet from 'reanimated-bottom-sheet';
function CannedResponse ({navigation}){
	const [afterPress , setafterPress] = useState(true)
	const [visible,setVisible] = useState(true)
	const [cannedFeild,setcannedFeild] = useState({canned: "", })
	const sheetRef = useRef(null)
	useEffect(() => {
	})
	const pressLong = () =>
	{
	
		setafterPress(false)
		
	}

	  const oncannedChange = (text ,stateProp) =>
      {
		setcannedFeild({ ...cannedFeild, [stateProp]: text });
        
	 }
	 const EditPress = () =>
	 {
		navigation.navigate('CannedResponseAdd')	
	}
	return (
	
			<View style={styles.cannedView}>
				<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.cannedBlock}>
							<View style={styles.View}>
									<View style={styles.cannedBlockView}>
										<View><Icon style={styles.cannedBlockIcon} name="reply-all-outline" /></View>
										<View style={styles.cannedcontent}>
											<Text style={styles.cannedTitle}>dsadsda</Text>
										</View>	
									</View>
								
									<View  style={styles.cannedBlockUpdation}> 
										<View  style={styles.BtnView}> 
											<TouchableOpacity onPress={EditPress}  style={styles.btnEdit}   >
												<Text style={styles.textColor}>Edit</Text>
											</TouchableOpacity>
											<TouchableOpacity   style={styles.btnDelete} >
												<Text style={styles.textColor}>Delete</Text>
											</TouchableOpacity>          
										</View>
									</View>
								
								
							</View>
				</TouchableOpacity>
				<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.cannedBlock}>
							<View style={styles.View}>
									
									<View style={styles.cannedBlockView}>
										<View><Icon style={styles.cannedBlockIcon} name="reply-all-outline"/></View>
										<View style={styles.cannedcontent}>
											<Text style={styles.cannedTitle}>dsadsda</Text>
										
											<Text style={styles.cannedTitleHash}>Size:50</Text>
										</View>	
									</View>
									<View  style={styles.cannedBlockUpdation}> 
										<View  style={styles.BtnView}> 
											<TouchableOpacity  onPress={EditPress} style={styles.btnEdit}   >
												<Text style={styles.textColor}>Edit</Text>
											</TouchableOpacity>
											<TouchableOpacity   style={styles.btnDelete} >
												<Text style={styles.textColor}>Delete</Text>
											</TouchableOpacity>          
										</View>
									</View>
								
								
							</View>
				</TouchableOpacity>
				<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.cannedBlock}>
							<View style={styles.View}>
									<View style={styles.cannedBlockView}>
										<View><Icon style={styles.cannedBlockIcon} name="reply-all-outline"/></View>
										<View style={styles.cannedcontent}>
											<Text style={styles.cannedTitle}>dsadsda</Text>
										</View>	
									</View>
								
									<View  style={styles.cannedBlockUpdation}> 
										<View  style={styles.BtnView}> 
											<TouchableOpacity  onPress={EditPress} style={styles.btnEdit}   >
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
	
	
	  );
  
  }
  
 
  export default CannedResponse;
  
