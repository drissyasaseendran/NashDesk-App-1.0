import React, { useState } from 'react';
import {

  View,
ScrollView,Text, TouchableOpacity
} from 'react-native';
import {styles} from '../../styles/groupStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Group ({navigation}){
	const [afterPress , setafterPress] = useState(true)
	const press = () =>
	{
		
		
	}
	const  pressLong = () =>
	{
		setafterPress(!afterPress)
	}
    return (
		<ScrollView>
			<View style={styles.GroupView}>
				<TouchableOpacity   onLongPress={()=>pressLong()}  style={styles.GroupBlock}>
					{afterPress?<View style={styles.View}>
						<View style={styles.GroupBlockView}>
						<Text style={styles.GroupTitle}>Gorup</Text>
						<Text style={styles.GroupDescription}>The search function uses a depth-first algorithm to </Text>
						</View>
						<View   style={styles.GroupBlockAgents}> 
						<Text style={styles.Groupcount}>2 Agnets</Text>
						</View>
					</View>:
					<View style={styles.AftrePresView}>
						<Text style={styles.textTitle} >Group</Text>
					<View  style={styles.BtnView}> 
							
							<TouchableOpacity  style={styles.btnEdit}   >
								<Text style={styles.textColor}>Edit</Text>
							</TouchableOpacity>
							<TouchableOpacity   style={styles.btnDelete} >
							<Text style={styles.textColor}>Delete</Text>
							</TouchableOpacity>          
					</View>  
					</View>
					}
				</TouchableOpacity>
			</View>
		</ScrollView>
    );

}

export default Group;
