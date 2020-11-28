import React, { useEffect ,useState} from "react";
import {
    Text,
  View,
  TextInput,TouchableOpacity,
ScrollView
} from 'react-native';
import {styles} from '../../styles/groupStyles'
import {getAccessToken} from '../../utils/Authenticator'
import { useSelector } from 'react-redux'
import {agentApiPath,groupApiPath} from '../../endpoints'
import axios from 'axios'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Select from "react-select-native";
// import Dropd from 'react-dropd'
function GroupView ({navigation}){
	const [afterPress , setafterPress] = useState(false)
  const token = getAccessToken()
  
    const [group,setgroup] = useState([])
    const [Agents,setAgents] = useState([])
    const AgentList = useSelector(state => state.group.group.groupedit)
    var data = [["Big Data", "Hadoop", "Spark", "Hive"], ["Data Science" ,"Python","Ruby"]];
    return (
      <View>
		<ScrollView>
			<View style={styles.GroupAgentView}>
                
                <View>   
                <TextInput 
                style = {styles.groupProfile}
                underlineColorAndroid = "transparent"
                placeholder = "Code"
                placeholderTextColor = "#666"
                name="code"
                // value={profileFeild.code}  
                autoCapitalize = "none"
                onChangeText={(text)=>onProfileChange(text, 'code')}
               />
                </View>
                <View>   
                <TextInput 
                style = {styles.groupProfile}
                underlineColorAndroid = "transparent"
                placeholder = "Code"
                placeholderTextColor = "#666"
                name="code"
                // value={profileFeild.code}  
                autoCapitalize = "none"
                onChangeText={(text)=>onProfileChange(text, 'code')}
               />
                </View>
                <View style={styles.GroupAgents}>
                    <Text style={styles.agentText}>Agents</Text>
                </View>
                <View style={styles.GroupAgentContent}>
                  <View  style={styles.GroupAgentContentInside}><Icon style={styles.GroupBlockIcon} name="face-agent"/></View>
                    <View  style={styles.GroupAgentContentInside}>
                        <Text style={styles.agenttextColor}>Drissya</Text>
                        <Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
                    </View>
                    <View style={styles.GroupAgentIcon}>
                        <Icon name="trash-can-outline" style={styles.Iconcolortrash} color='inherit'/>
                    </View>
                </View>
                <View style={styles.GroupAgentContent}>
                    <View  style={styles.GroupAgentContentInside}><Icon style={styles.GroupBlockIcon} name="face-agent"/></View>
                 
                    <View  style={styles.GroupAgentContentInside}>
                        <Text style={styles.agenttextColor}>Drissya</Text>
                        <Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
                    </View>
                    <View style={styles.GroupAgentIcon}>
                        <Icon name="trash-can-outline" style={styles.Iconcolortrash} color='inherit'/>
                    </View>
                </View>
			</View>
		</ScrollView>
    <View style={styles.BtnView}> 
      
        <TouchableOpacity   style={styles.btnUpdate} onPress={() => ProfileUpdate()}  >
                      <Text  style={styles.btnText} >UPDATE</Text>      
                    </TouchableOpacity>          
      </View>  
    </View>
    );

}

export default GroupView;
