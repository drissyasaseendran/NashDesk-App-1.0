import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,Button,TextInput,
  TouchableOpacity,ScrollView
} from 'react-native';

import { Dimensions } from 'react-native';
// import TextInput from 'react-native-textinput-with-icons'
import { SearchBar ,CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {

    Avatar,
    Title,
    Caption,


} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useDispatch, useSelector } from "react-redux";
function Tags (){
	const [items, setItems] = useState([]);
	const [Tagname, setTagName] = useState("");
	const Tags = useSelector(state => state.Tags.Tags)
	const dispatch = useDispatch(); //this hook gives us dispatch method
	useEffect(() => {
		
		let data = {
			"access_token": "5fa7c9921dd251c96965",
			"request_type": "view_count"
		  }
		  fetch('http://127.0.0.1:5000/tags', {
		 
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		  }).then(response => {
			return response.json();
		  }).then(result => { 
		
		  if (result.status === "success") {
		
			// let count_view = d.payload.data
			setItems(Object.entries(result.payload.data).map(([key, value]) => ({ "tag": key, "value": value })));


		
			dispatch({
				type: "FETCH_TAGS",
				data: items
			  })
		  }
		  }).catch(error => {
			return error
		  });
	},[items])
	const onKeyDown = (e) => {
		if (e.key === 'Enter') {
			alert("eneter")
			dispatch({
				type: "ADD_TAGS",
				data: {

					"access_token": "5fa7c9921dd251c96965",
					"tags":`${Tagname}`,   
					"request_type":"add"   
				
				 }
			  })
		
		
		}
		
}
  
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}></View>
			  <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Tags</Text></View>
			  <View style={styles.avatar}>
		  
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
											
											  <TouchableOpacity  style={styles.appButtonContainer}>
												  <Text style={styles.appButtonText}>Delete</Text>
											  </TouchableOpacity>
											  </View>
										  
										  </View>

										  <View style={styles.plusSection}>
													<Icon style={styles.plusIcon} name="plus" size={20} color="#000"/>
													  <TextInput
													  multiline={true}
													  onChange={e => setTagName(e.target.value)}
													  style={styles.plusinput}
													  placeholder="Search here"
													  onKeyPress={onKeyDown}
													  underlineColorAndroid='rgba(0,0,0,0)' /></View>
										  <View style={{flexDirection:'row',alignItems: 'center',flex:1,alignContent:'center'}}>
											 
										
											 <View style={{paddingLeft:55,width:80, flexDirection:'column'}}>
											 <CheckBox
												  //   value={this.state.checked}
												  //   onValueChange={() => this.setState({ checked: !this.state.checked })}
												  />
											  
											  </View>
											  <View style={{paddingLeft:55,width:400,  flexDirection:'column'}}>
												  <Title style={styles.title}>Tag Name</Title>
											  
											  </View>
											  <View style={{paddingLeft:55, width:200, flexDirection:'column'}}>
												  <Title style={styles.title}>Ticket count</Title>
											  
											  </View>
											  <View style={{paddingLeft:55, width:200, flexDirection:'column'}}>
												  <Title style={styles.title}>Correlated Tags</Title>
											  
											  </View>
											  
										  </View>
										  {Tags &&  Tags.map((Tags)=>
										  <View style={{flexDirection:'row',alignItems: 'center', flex:1,alignContent:'center'}}>
											 <View style={{paddingLeft:55,width:80, flexDirection:'column'}}>
											 <CheckBox
											  //   value={this.state.checked}
											  //   onValueChange={() => this.setState({ checked: !this.state.checked })}
											  />
											  
											  </View>
											  <View style={{paddingLeft:55,width:400,  flexDirection:'column'}}>
										  
												  <Title style={styles.content}>{Tags.tag}</Title>
											  
											  </View>
											  <View style={{paddingLeft:55, width:200, flexDirection:'column'}}>
												  <Title style={styles.content}>{Tags.value.count}</Title>
											  
											  </View>
											  <View style={{paddingLeft:55, width:200, flexDirection:'column'}}>
												  <Title style={styles.content}>#syft</Title>
											  
											  </View>
											  <View style={{paddingLeft:55, width:80, flexDirection:'column'}}>
											  <View style={{paddingLeft:55, width:80, flexDirection:'row'}}>
											  <Icon color={'#FFAE42'} onPress={() => dispatch({ type: "REMOVE_TAGS", data: {
												"access_token": "5fa7c9921dd251c96965",
												"tag_id_lst":[Tags.value.tag_id] ,     
												
												"request_type":"delete"   
												} })}   name="trash-2"/>
												  <Icon color={'#FFAE42'}  name="edit"/>
											  </View>
											  </View>
										  </View>
										  )}
									  
			  </View>
			  
		  </View>
		</ScrollView>
	  );
  
  }
  
  const styles = StyleSheet.create({
	header:{
	  backgroundColor: "#FFAE42",
	  height:200,
	},
	avatarHeading: {
	  top: 0, left: 0,
	  right: 0, bottom: 130,
	  justifyContent: 'center',
	  alignItems: 'center',
	  position: 'absolute',
  
  },
  HeaderTitle:
  {
  
	color:'#fff',
	// fontWeight: 'bold',
	fontSize: 30,
  },
	avatar: {
	 width: windowWidth,
	 height:windowHeight,
	  backgroundColor: "#f5f5f5",
	  borderRadius: 50,
	  borderWidth: 4,
	  borderColor: "#f5f5f5",
	  borderWidth: 4,
	  marginBottom:10,
	  alignSelf:'center',
	  position: 'absolute',
	  marginTop:130
	},
  
	bodyContent: {
	marginTop:100,
	width: windowWidth-200,
	height:windowHeight-200,
	  backgroundColor: "#fff",
	  borderRadius:20,
	  padding:50,
	  borderColor: "#c7c5c5",
	  borderWidth: 1,
  //    marginBottom:10,
	  alignSelf:'center',
	  flex: 1,
	  // alignItems: 'center',
	  padding:30,
	},
	caption:{
  
	// fontWeight: 'bold',
	fontSize: 18,
	},
	title:{
		color:'orange',
		fontSize:17
	},
	content:{
	  color:'#666',
	  fontSize:14
  },
  appButtonContainer: {
	  // elevation: 8,
	  width:80,
	  height:30,
	  backgroundColor: "#fff",
	  borderRadius: 10,
	  borderColor: "#c7c5c5",
	  borderWidth: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginRight:2,
	  // borderBottomColor: '#0f0',
	  // paddingVertical: 10,
	  // paddingHorizontal: 12
	},
	appButtonText: {
	  fontSize: 14,
	  color: "#c7c5c5",
	  // fontWeight: "bold",
	  alignSelf: "center",
	  // textTransform: "uppercase"
	},
  
  searchSection: {
	  width: 250,
	  height: 40,
	  borderColor: '#c7c5c5',
	  borderWidth: 1,
	  borderRadius: 25,
	  // flex: 1,
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#fff',
  },
  searchIcon: {
	  color:'#c7c5c5',
	  padding: 10,
  },
  input: {
	  
	  // flex: 1,
	  padding: 8,
	  // paddingRight: 10,
	  // paddingBottom: 10,
	  // paddingLeft: 0,
	  // backgroundColor: '#fff',
	  color: '#424242',
  },
  plusSection: {
	marginTop:125,
	width: 250,
	height: 40,
	borderColor: '#c7c5c5',
	borderBottomWidth: 1,
	// borderRadius: 25,
	// flex: 1,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#fff',
},
plusIcon: {
	color:'#c7c5c5',
	padding: 10,
},
plusinput: {
	width: 250,
	// flex: 1,
	padding: 8,
	// paddingRight: 10,
	// paddingBottom: 10,
	// paddingLeft: 0,
	// backgroundColor: '#fff',
	color: '#424242',
},
  });
  export default Tags;
  
