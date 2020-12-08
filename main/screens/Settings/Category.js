import React, { useEffect,useRef, useState } from "react";
import {TextInput,
ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import {styles} from '../../styles/categoryStyles'
import Icon from 'react-native-vector-icons/Fontisto';

function Category ({navigation}){

	 const EditPress = () =>
	 {
		navigation.navigate('CategoryAdd')
	 }
	return (
	
			<View style={styles.categoryView}>
			<TouchableOpacity style={styles.categoryBlock}>
						<View style={styles.View}>
								
								<View style={styles.categoryBlockView}>
									<View><Icon style={styles.categoryBlockIcon} name="nav-icon-grid-a"/></View>
									<View style={styles.categorycontent}>
										<Text style={styles.categoryTitle}>dsadsda</Text>
									
										<Text style={styles.categoryTitleHash}>Size:50</Text>
									</View>	
								</View>
							
								<View  style={styles.categoryBlockUpdation}> 
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
			<TouchableOpacity    style={styles.categoryBlock}>
						<View style={styles.View}>
								
								<View style={styles.categoryBlockView}>
									<View><Icon style={styles.categoryBlockIcon} name="nav-icon-grid-a"/></View>
									<View style={styles.categorycontent}>
										<Text style={styles.categoryTitle}>dsadsda</Text>
									
										<Text style={styles.categoryTitleHash}>Size:50</Text>
									</View>	
								</View>
								<View  style={styles.categoryBlockUpdation}> 
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
			<TouchableOpacity    style={styles.categoryBlock}>
						<View style={styles.View}>
								<View style={styles.categoryBlockView}>
									<View><Icon style={styles.categoryBlockIcon} name="nav-icon-grid-a"/></View>
									<View style={styles.categorycontent}>
										<Text style={styles.categoryTitle}>dsadsda</Text>
									
										<Text style={styles.categoryTitleHash}>Size:50</Text>
									</View>	
								</View>
							
								<View  style={styles.categoryBlockUpdation}> 
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
  
 
  export default Category;
  
