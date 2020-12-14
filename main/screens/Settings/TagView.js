import React, { useEffect} from "react";
import {ScrollView,View,TouchableOpacity,Text
} from 'react-native';
import {styles} from '../../styles/tagStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function TagView (props){

	useEffect(() => {
		
	},[props.tag])

	
	return (
		<ScrollView  showsVerticalScrollIndicator={false} rollEventThrottle={16}>
        <View style={styles.tagView}>
		{props.tag && props.tag.map((tag) =>
				{
				return(<TouchableOpacity  key={tag.value.tag_id} style={styles.tagBlock}>
						<View style={styles.View}>
								<View style={styles.tagBlockView}>
									<View><Icon style={styles.tagBlockIcon} name="tag-outline"/></View>
									<View style={styles.tagcontent}>
									<Text style={styles.tagTitle}>{tag.tag.charAt(0).toUpperCase() + tag.tag.slice(1)}  </Text>
									<Text style={styles.tagTitlesub}>Used in {tag.value.count} Tickets</Text>
									<Text style={styles.tagTitleHash}>#reused,#refund</Text>
									</View>	
								</View>
								<View  style={styles.btn} > 
										<TouchableOpacity  onPress={() => props.editTag(tag)}   >
										<Icon name="pencil-outline" style={styles.IconcolorEdit} fontSize='inherit' color='inherit'/>
										</TouchableOpacity>
										<TouchableOpacity
										 onPress={() => props.deleteTagConfirm(tag.value.tag_id)}
										//  onPress={() => deleteGroup(tag.value.tag_id)}
										>
										<Icon name="trash-can-outline" style={styles.Iconcolortrash} fontSize='inherit' color='inherit'/>
									
										</TouchableOpacity>          
								</View>
									
						</View>
			
			</TouchableOpacity>)
			 })
			}
	   
	</View>
	</ScrollView>
	
	  );
  
  }
  
 
  export default TagView;
  
