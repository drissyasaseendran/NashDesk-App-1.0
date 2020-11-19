import React, { useEffect, useState } from "react";
import {TextInput,TouchableHighlight,TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../Styles/styles' 
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from "react-redux";
function MessageMemmo (){
	const [content, setData] = useState([]);
	// const content = useSelector(state => state.data);
	// let windowSize = Dimensions.get('window')
	const dispatch = useDispatch(); //this hook gives us dispatch method
	useEffect(() => {
		let data = {
         
                "access_token": "cc5586e9ad7322a50c04",
                "start_date": new Date(),
                "end_date": new Date(),
                "request_type": "view"
           
		  }
		  fetch('http://127.0.0.1:5000/taskactions', {
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
	 
    <View style={styles.memoContainer}>
         
			<View>
            <Text  style={styles.memoText}>Complete task today itself</Text>
				{content !='' ? (
						content.map((item)=>
                        <View>		
                        <Text  style={styles.memoText}>{item.description}			
                        {item.updated_date}	
                        </Text>
                        </View>
				)
				) : (
					<Text></Text>
				)}
			</View> 
		

        {/* cccccc */}
               
		</View>
  );
}
  




export default MessageMemmo;

















