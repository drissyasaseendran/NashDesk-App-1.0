import React from 'react';
import {

  View,
ScrollView,Text
} from 'react-native';
import {styles} from '../../styles/groupStyles'


function Group ({navigation}){

    return (
		<ScrollView>
			<View style={styles.GroupView}>
				<View style={styles.GroupBlock}>
					<View style={styles.GroupBlockView}>
					<Text style={styles.GroupTitle}>Gorup</Text>
					<Text style={styles.GroupDescription}>The search function uses a depth-first algorithm to </Text>
					</View>
					<View style={styles.GroupBlockAgents}> 
					<Text style={styles.Groupcount}>2 Agnets</Text>
					</View>
				</View>
			</View>
		</ScrollView>
    );

}

export default Group;
