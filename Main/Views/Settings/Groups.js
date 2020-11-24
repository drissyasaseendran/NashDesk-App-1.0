import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,Button,TextInput,
  TouchableOpacity,ScrollView
} from 'react-native';
import { Dimensions } from 'react-native';
import {styles} from '../../Styles/groupStyles'
import { useDispatch, useSelector } from "react-redux";
import { CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {

    Avatar,
    Title,
    Caption,


} from 'react-native-paper';

function Group ({navigation}){

    return (
      <ScrollView>
      <View style={styles.header}></View>
          <View style={styles.canvasBody}>
		
            <View style={styles.bodyContent}>
		                    <View style={{
                                                paddingVertical: 15,
                                                paddingHorizontal: 10,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}>
												<View style={styles.searchSection}>
												  <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
													<TextInput
													multiline={true}

													style={styles.input}
													placeholder="Search here"

													underlineColorAndroid='rgba(0,0,0,0)' /></View>
                                         
											<View style={{flexDirection:'row'}}>
											<TouchableOpacity  style={styles.appButtonContainer} onPress={() => navigation.navigate('AddGroup')}>
												<Text style={styles.appButtonText} >Add</Text>
											</TouchableOpacity>
											<TouchableOpacity  style={styles.appButtonContainer} >
												<Text style={styles.appButtonText}>Delete</Text>
											</TouchableOpacity>
											</View>
										
         							   </View>
										<View style={{flexDirection:'row',alignItems: 'center',flex:1,alignContent:'center'}}>
										   <View style={{paddingLeft:55,width:200, flexDirection:'column'}}>
										   <CheckBox
											
												/>
											
											</View>
											<View style={{paddingLeft:55,width:200,  flexDirection:'column'}}>
												<Title style={styles.title}>Group</Title>
											
											</View>
											<View style={{paddingLeft:55, width:200, flexDirection:'column'}}>
												<Title style={styles.title}>No of Agents</Title>
											
											</View>
											
										</View>
								
										<View style={{flexDirection:'row',alignItems: 'center', flex:1,alignContent:'center'}}>
                    <CheckBox
											
                      />
											<View style={{paddingLeft:55,width:200,  flexDirection:'column'}}>
										
												<Title style={styles.content}>Account</Title>
											
											</View>
											<View style={{paddingLeft:55, width:200, flexDirection:'column'}}>
												<Title style={styles.content}>54785</Title>
											
											</View>
											<View style={{paddingLeft:55, width:200, flexDirection:'column'}}>
											<View style={{paddingLeft:55, width:200, flexDirection:'row'}}>
											<Icon color={'#FFAE42'}  name="trash-2"/>
												<Icon color={'#FFAE42'}  name="edit"/>
											</View>
											</View>
										</View>
                   
            </View>
			
        </View>
      </ScrollView>
    );

}

export default Group;
