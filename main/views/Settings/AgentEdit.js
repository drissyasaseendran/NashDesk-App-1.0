import React from "react";
import {
  Image,
  Text,
  View,TextInput,TouchableOpacity,
  ScrollView
} from 'react-native';
import {styles} from '../../styles/agentStlyes'
import SwitchSelector from "react-native-switch-selector";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function AgentEdit ({navigation}){
    const options = [
        { label: "01:00", value: "1" },
        { label: "01:30", value: "1.5" },
        { label: "02:00", value: "2" }
      ];

	return (
	    <View>
        <ScrollView>
        {/* <View style={styles.header}></View> */}
        <View  style={styles.canvasEditBody}>
       
        <View style={styles.EditBody}> 
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >First Name</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#666"
               name="first_name"
            //    value={profileFeild.first_name} 
               autoCapitalize = "none"
               onChangeText={(text)=>onProfileChange(text, 'first_name')}
    
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Last Name</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Home"
               placeholderTextColor = "#666"
               name="address"
            //    value={profileFeild.address} 
               autoCapitalize = "none"
               onChangeText={(text)=>onProfileChange(text, 'address')}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Email Id</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "City"
               placeholderTextColor = "#666"
               name="city"
            //    value={profileFeild.city} 
               autoCapitalize = "none"    
               onChangeText={(text)=>onProfileChange(text, 'city')}
               
        />
        </View>
 
      
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Password</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               name="password"
               placeholderTextColor = "#666"

            //    value={profileFeild.password}  
               autoCapitalize = "none"
               onChangeText={(text)=>onProfileChange(text, 'password')}
               
        />
        </View>
        </View>    
          
     </View>

     </ScrollView>
     <View style={styles.BtnView}> 
        <TouchableOpacity  style={styles.btnCancel} onPress={() => ProfileUpdate()}  >
                      <Text  style={styles.btnTextCancel}>CANCEL</Text>      
                    </TouchableOpacity>
        <TouchableOpacity   style={styles.btnUpdate} onPress={() => ProfileUpdate()}  >
                      <Text  style={styles.btnText} >UPDATE</Text>      
                    </TouchableOpacity>          
      </View>  
     </View>
			/* <View  style={styles.AgentContentBg}>
            <SwitchSelector
            initial={0}
            // onPress={value => setState({ gender: value })}
            // textColor= '#7a44cf'
            // selectedColor='blue'
            // buttonColor='red'
            // borderColor='yellow'
            hasPadding
            options={[
                { label: "Feminino", value: "f", imageIcon: <Icon  fontColor='red' name="account-group"/>},
            { label: "Masculino", value: "m", imageIcon:  <Icon fontColor='red' name="account-group"/> }
            ]}
            />
			</View> */
	
		
	  );
  
  }
  
  export default AgentEdit;
  