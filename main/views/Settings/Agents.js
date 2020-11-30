import React from "react";
import {
  Image,
  Text,
  View,

} from 'react-native';
import {styles} from '../../styles/agentStlyes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function Agents ({navigation}){


	return (
			<View>
			<View style={styles.Agents}>
				<Text style={styles.agentText}>Agents</Text>
			</View>
			<View  style={styles.AgentContentBg}>
			<View style={styles.AgentContent}>
			<View  style={styles.AgentContentInside}>
				<Image  style={{ width: 60, height: 60 }} source={require('../../../images/profile.jpeg')} />
			</View>
				<View  style={styles.AgentContentInside}>
					<Text style={styles.agenttextColor}>Drissya</Text>
							<Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
							<Text style={styles.agenttextColorEmail}>Admin</Text>
				</View>
			</View>
			<View  style={styles.AgentSidebtn}>
					<Text style={styles.agentEdit}>Edit</Text>
					<Text style={styles.agentDelete}>Delete</Text>
			</View>
			</View>
			<View  style={styles.AgentContentBg}>
			<View style={styles.AgentContent}>
			<View  style={styles.AgentContentInside}>
				<Image  style={{ width: 60, height: 60 }} source={require('../../../images/profile.jpeg')} />
			</View>
				<View  style={styles.AgentContentInside}>
					<Text style={styles.agenttextColor}>Drissya</Text>
							<Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
							<Text style={styles.agenttextColorEmail}>Admin</Text>
				</View>
			</View>
			<View  style={styles.AgentSidebtn}>
					<Text style={styles.agentEdit}>Edit</Text>
					<Text style={styles.agentDelete}>Delete</Text>
			</View>
			</View>
			<View  style={styles.AgentContentBg}>
			<View style={styles.AgentContent}>
			<View  style={styles.AgentContentInside}>
				<Image  style={{ width: 60, height: 60 }} source={require('../../../images/profile.jpeg')} />
			</View>
				<View  style={styles.AgentContentInside}>
					<Text style={styles.agenttextColor}>Drissya</Text>
							<Text style={styles.agenttextColorEmail}>drissyasaseendran@gmail.com</Text>
							<Text style={styles.agenttextColorEmail}>Admin</Text>
				</View>
			</View>
			<View  style={styles.AgentSidebtn}>
					<Text style={styles.agentEdit}>Edit</Text>
					<Text style={styles.agentDelete}>Delete</Text>
			</View>
			</View>
			</View>
	  );
  
  }
  
  export default Agents;
  