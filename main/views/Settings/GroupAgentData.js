import React, { useEffect ,useState} from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../styles/groupStyles'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function GroupAgentData (props){
    const Agents = props.Agents

    return (
<View>
<View style={styles.GroupAgents}>
    <Text style={styles.agentText}>Agents</Text>
</View>
{
Agents && Agents.map((agents) =>
				{
                   
return(<View style={styles.GroupAgentContent}>
  <View  style={styles.GroupAgentContentInside}><Icon style={styles.GroupBlockIcon} name="face-agent"/></View>
    <View  style={styles.GroupAgentContentInside}>
        <Text style={styles.agenttextColor}>{agents.first_name}</Text>
                <Text style={styles.agenttextColorEmail}>{agents.username}</Text>
    </View>
    <TouchableOpacity onPress={() => props.agentDelete(agents.username)} style={styles.GroupAgentIcon}>
        <Icon name="trash-can-outline" style={styles.Iconcolortrash} color='inherit'/>
    </TouchableOpacity>
</View>)
})}

</View>
    );

}

export default GroupAgentData;