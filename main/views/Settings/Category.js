import React, { useEffect,useRef, useState } from "react";
import {TextInput,
ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import {styles} from '../../styles/tagStyles'
import Icon from 'react-native-vector-icons/Fontisto';
import ModelBox from '../../reused/ModelBox'
import BottomSheet from 'reanimated-bottom-sheet';
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

	  const onTagChange = (text ,stateProp) =>
      {
		settagFeild({ ...tagFeild, [stateProp]: text });
        
	 }
	 const EditPress = () =>
	 {
		sheetRef.current.snapTo(1)
	 }
	return (
	
			<View style={styles.tagView}>
			
			<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.tagBlock}>
						<View style={styles.View}>
								
								<View style={styles.tagBlockView}>
									<View><Icon style={styles.tagBlockIcon} name="nav-icon-grid-a"/></View>
									<View style={styles.tagcontent}>
										<Text style={styles.tagTitle}>dsadsda</Text>
									
										<Text style={styles.tagTitleHash}>Size:50</Text>
									</View>	
								</View>
							
								<View  style={styles.tagBlockUpdation}> 
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
			<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.tagBlock}>
						<View style={styles.View}>
								
								<View style={styles.tagBlockView}>
									<View><Icon style={styles.tagBlockIcon} name="nav-icon-grid-a"/></View>
									<View style={styles.tagcontent}>
										<Text style={styles.tagTitle}>dsadsda</Text>
									
										<Text style={styles.tagTitleHash}>Size:50</Text>
									</View>	
								</View>
								<View  style={styles.tagBlockUpdation}> 
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
			<TouchableOpacity  onLongPress={()=>pressLong()}    style={styles.tagBlock}>
						<View style={styles.View}>
								
								<View style={styles.tagBlockView}>
									<View><Icon style={styles.tagBlockIcon} name="nav-icon-grid-a"/></View>
									<View style={styles.tagcontent}>
										<Text style={styles.tagTitle}>dsadsda</Text>
									
										<Text style={styles.tagTitleHash}>Size:50</Text>
									</View>	
								</View>
							
								<View  style={styles.tagBlockUpdation}> 
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
  
 
  export default Tags;
  
