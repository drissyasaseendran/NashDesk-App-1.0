import React, { useEffect,useRef, useState } from "react";
import {TextInput,
ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import {styles} from '../../styles/categoryStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CannedResponseAdd (){
    const EditPress = () =>
    {

    }
    

	return (
        <View>  
            <View style={styles.center}> 
			   <Text style={styles.clustername} >CannedResponse Name</Text>
			</View>
            <View style = {styles.inputBtn} >
                <View  style={styles.inputFeildLabel} >
                    <TextInput style = {styles.categoryLabel}
                    underlineColorAndroid = "transparent"
                    placeholder = "Canned Response name"
                    name="password"
                    placeholderTextColor = "#666"
                    autoCapitalize = "none"
                
                    />
                </View >
            
            </View>
       
            <View style={styles.center}> 
			   <Text style={styles.clustername} >Description</Text>
			</View>
            <View style = {styles.inputBtn} >
                <View  style={styles.inputFeildLabel} >
                 <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Type something"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    />
                </View >
            
            </View>

	
            </View>
	  );
  
  }
  
 
  export default CannedResponseAdd;
  
