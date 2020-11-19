import React, { useEffect, useState } from "react";
import {TextInput,TouchableHighlight,TouchableOpacity, View, Text} from 'react-native';
import { styles } from '../Styles/styles' 
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from "react-redux";
function onlineAgents (){
	const [content, setData] = useState([]);
	// const content = useSelector(state => state.data);
	// let windowSize = Dimensions.get('window')
	const dispatch = useDispatch(); //this hook gives us dispatch method
	useEffect(() => {
		let data = {
			"access_token": "b06dfc53f204f7380a58",
			"request_type": "view"
		  }
		  fetch('http://127.0.0.1:5000/onlineagents', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		  }).then(response => {
			return response.json();
		  }).then(result => { 
		  if (result.status === "success") {
			
			setData(result.payload.data)
			dispatch({
				type: "FETCH_DATA",
				data: result.payload.data
			  })
			
		  }
		  }).catch(error => {
			return error
		  });
	})
	function onFetchdata()
	{
		alert("dhsudg")
	}
	
  return (
	 
    <View style={styles.agentsContainer} >
      
   		<TextInput
              style={styles.agentsearch}
              placeholder="Search Agnets here"
              underlineColorAndroid="transparent"
              icon="person-add"
              inlineImagePadding={2}
          />
				{content !='' ? (
						content.map((item)=>
										
				<Text  style={styles.agentsText}>{item.first_name}</Text>)
				) : (
					<Text></Text>
				)}
		
			<View><Text style={styles.agentsText}>{"Anu"}</Text>
			<Text style={styles.agentsText}>{"Malu"}</Text>
			<Text style={styles.agentsText}>{"Banu"}</Text>
			<Text style={styles.agentsText}>{"Jacob"}</Text></View>
			

        {/* cccccc */}
               
		</View>
  );
}
  




export default onlineAgents;

















