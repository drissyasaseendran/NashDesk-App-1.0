import React, { useEffect,useRef, useState } from "react";
import {TextInput,
ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import {styles} from '../../styles/categoryStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CategoryAdd (){
    const EditPress = () =>
    {

    }
    

	return (
        <View>  
            <View style={styles.center}>  <Text style={styles.clustername} >Cluster Name</Text></View>
                      
            <View style = {styles.inputBtn} >
           
                <View >
                    <TextInput style = {styles.categoryLabel}
                    underlineColorAndroid = "transparent"
                    placeholder = "Samples"
                    name="password"
                    placeholderTextColor = "#666"
                    autoCapitalize = "none"
                
                    />
                </View >
                <View style={styles.textSend}> 
                    <Text style={styles.textlabel} >Save</Text>
                </View>
          
            </View>
            <View style={styles.center}> <Text style={styles.clustername} >Samples</Text></View>
            
            <View style = {styles.inputBtn} >
          
                <View >
                    <TextInput style = {styles.CategoryInput}
                    underlineColorAndroid = "transparent"
                    placeholder = "Samples"
                    name="password"
                    placeholderTextColor = "#666"
                    autoCapitalize = "none"
                
                    />
                </View>
                <View style={styles.textSend}> 
                    <Text style={styles.textlabel} >Save</Text>
                </View>
          
            </View>

			<View style={styles.categoryView}>
			
			<TouchableOpacity    style={styles.categoryBlock}>
						<View style={styles.View}>
								<View style={styles.categoryBlockView}>
									<Text style={styles.text}>dsadsda</Text>
								</View>
								<View  style={styles.categoryBlockUpdation}> 
									<View  style={styles.BtnView}> 
									
										<TouchableOpacity   >
                                        <Icon style={styles.categorytrashIcon} name="trash-can-outline"/>
									
										</TouchableOpacity>          
									</View>
								</View>
							
							
						</View>
			</TouchableOpacity>
         
			<TouchableOpacity    style={styles.categoryBlock}>
						<View style={styles.View}>
								<View style={styles.categoryBlockView}>
									<Text style={styles.text}>dsadsda</Text>
								</View>
								<View  style={styles.categoryBlockUpdation}> 
									<View  style={styles.BtnView}> 
									
										<TouchableOpacity   >
                                        <Icon style={styles.categorytrashIcon} name="trash-can-outline"/>
									
										</TouchableOpacity>          
									</View>
								</View>
							
							
						</View>
			</TouchableOpacity>
       
			<TouchableOpacity    style={styles.categoryBlock}>
						<View style={styles.View}>
								<View style={styles.categoryBlockView}>
									<Text style={styles.text}>dsadsda</Text>
								</View>
								<View  style={styles.categoryBlockUpdation}> 
									<View  style={styles.BtnView}> 
									
										<TouchableOpacity   >
                                        <Icon style={styles.categorytrashIcon} name="trash-can-outline"/>
									
										</TouchableOpacity>          
									</View>
								</View>
							
							
						</View>
			</TouchableOpacity>
	
			</View>
	
            </View>
	  );
  
  }
  
 
  export default CategoryAdd;
  
