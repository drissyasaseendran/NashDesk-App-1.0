import React, { useEffect, useState } from "react";
import {TextInput,TouchableHighlight,TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../Styles/styles' 
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from "react-redux";
function Leader (){
	const [content, setData] = useState([]);
	// const content = useSelector(state => state.data);
	// let windowSize = Dimensions.get('window')
	const dispatch = useDispatch(); //this hook gives us dispatch method
	useEffect(() => {
		let data = {
			"access_token": "5fa7c9921dd251c96965",
			"request_type": "view"
		  }
		  fetch('http://127.0.0.1:5000/leadershipboard', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		  }).then(response => {
			return response.json();
		  }).then(result => { 
		  if (result.status === "success") {
		
			// setData(result.payload.data)
			dispatch({
				type: "FETCH_DATA",
				data: result.payload.data
			  })
			
		  }
		  }).catch(error => {
			return error
		  });
	})

  return (
	 
    <View style={styles.memoContainer}>
         
          
		
			<View>
            <Text  style={styles.memoText}>Jacobb : 01545458748</Text>
				{content !='' ? (
						content.map((item)=>
				<View>					
                <Text  style={styles.memoText}>{item.first_name}:{item.count}</Text>
               
                </View>)
				) : (
					<Text></Text>
				)}
			</View> 
		
			

        {/* cccccc */}
               
		</View>
  );
}
  




export default Leader;

















