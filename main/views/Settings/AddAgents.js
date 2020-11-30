import React, { Component } from 'react';
import {
  StyleSheet,ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MultiSelect from  'react-multiple-select-dropdown-lite'
import { useDispatch, useSelector } from "react-redux";
// import  'react-multiple-select-dropdown-lite/dist/index.css'
import  { useEffect, useState } from "react";
import { Dimensions } from 'react-native';

import {

    Avatar,
  RadioButton

} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function AddAgents ({navigation}){
    const [checked, setChecked] = React.useState('first');
    const dispatch = useDispatch(); //this hook gives us dispatch method
    const [options, setOptions] = useState([]);
    const [value, setvalue] = useState('')
    const Group = useSelector(state => state.Group.Group);
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    useEffect(() => {
    
      setOptions(Group &&  Group.map((group) =>
      
      
      ({ label: group.group_name, value: group.group_name })));
    },[])

    const  handleOnchange  =  val  => {
    
        setvalue(val)
    }
    let data = {
			"access_token": "5fa7c9921dd251c96965",
			"request_type": "view"
		  }
		  fetch('http://127.0.0.1:5000/agentsettings', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		  }).then(response => {
			return response.json();
		  }).then(result => { 
		  if (result.status === "success") {
			 
			dispatch({
				type: "FETCH_AGENTS",
				data: result.payload.data
			  })
			

		
		  }
		  }).catch(error => {
			return error
      });
      
      const AddAgent = () => {
     
       
       console.log(JSON.stringify(data))
       dispatch({
				type: "ADD_AGENTS",
				data:  {
          "access_token": "5fa7c9921dd251c96965",
          "fields":{
           "first_name":`${first_name}`,
              "last_name":`${last_name}`,
              
              "email_id":`${email}`,
              "agent_username":`${email}`,
              "password":`${password}`,
              "address":"",
              "mobile":"",
              "image":"",
              "country":"",
              "city":"",
              "code":"",
              "agent_type":`${checked}`,
                        "group":[value]
       
                  },
          "request_type":"add" 
       }
			  })
        navigation.navigate('Agents')
     
      }
   
      const handleChange = e => 
      {
        setState({
          ...state,
          [e.target.name]:e.target.value
        });
        alert(state.name+state.password+state.email)
      }
    // const  options  = [
    //     { label:  'Option 1', value:  'option_1'  },
    //     { label:  'Option 2', value:  'option_2'  },
    //     { label:  'Option 3', value:  'option_3'  },
    //     { label:  'Option 4', value:  'option_4'  },
    // ]
    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Add Agents</Text></View>
            <View style={styles.avatar}>

            <View style={styles.bodyContent}>

                  <View style={{flexDirection:'row',alignItems: 'center'}}>
                            
                            <View style={{paddingLeft:55, flexDirection:'column',alignItems: 'center'}}>
                           

{/*                            
                              <Avatar.Image
                            
                                 source={require('../../../assets/im2.jpeg')}
                                size={100}
                            /> */}
                            <View style={styles.searchSection}>
                            <TextInput
													multiline={true}
                          name='first_name'
                          style={styles.input}
                          onChange={e => setFirstName(e.target.value)}
													placeholder="First Name"
                          onPress={() => setChecked('Agent')}
													underlineColorAndroid='rgba(0,0,0,0)' />
                               

                            </View>
                            <View style={styles.searchSection}>
                            <TextInput
													multiline={true}
                          name='last_name'
													style={styles.input}
													placeholder="Last Name"
                          onChange={e => setLastName(e.target.value)}
													underlineColorAndroid='rgba(0,0,0,0)' />
                               

                            </View>
                            <View style={styles.searchSection}>
                            <TextInput
													multiline={true}
                          onChange={e => setEmail(e.target.value)}
													style={styles.input}
													placeholder="Email"
                          name='email'
													underlineColorAndroid='rgba(0,0,0,0)' />
                               

                            </View>
                            <View style={styles.searchSection}>
                            <TextInput
													multiline={true}
                          onChange={e => setPassword(e.target.value)}
													style={styles.input}
													placeholder="Password"
                          name='password'
													underlineColorAndroid='rgba(0,0,0,0)' />
                               

                            </View>
                            </View>

                        </View>
                       
                        <View  style={{flexDirection:'row', padding:20,    marginLeft: 52}}>
                            
                        <View style={{width:100, flexDirection:'column',alignItems: 'center', justifyContent: 'center',}}>
                        <RadioButton
                            value="admin"
                            status={ checked === 'admin' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('admin')}
                        />
                          <Text style={{color:'#666'}}>Admin</Text>
                        </View>
                        <View style={{width:100, flexDirection:'column',alignItems: 'center', justifyContent: 'center',}}>
                      
                        <RadioButton
                            value="supervisor"
                            status={ checked === 'supervisor' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('supervisor')}
                        />
                            <Text style={{color:'#666'}}>Supervisor</Text>
                        </View>
                        <View style={{width:100,flexDirection:'column',alignItems: 'center', justifyContent: 'center',}}>
                      
                         <RadioButton
                            value="agent"
                            status={ checked === 'agent' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('agent')}
                        />
                            <Text style={{color:'#666'}}>Agent</Text>
                        </View>

                        
                        </View>
                        <View   style={{width: 245}}>
                        {/* <MultiSelect
                          onChange={handleOnchange}
                          options=
                            {options
                      }
                          style={{width: 245}}
                          /> */}
                           <View style={{
                                                            paddingVertical: 15,
                                                            paddingHorizontal: 10,
                                                            flexDirection: "row",
                                                            justifyContent: "space-between",
                                                            alignItems: "center"
                                                        }}>
                                                       <View></View>
                                     <TouchableOpacity  style={styles.appButtonContainer}   onPress={AddAgent} >
                                        <Text style={styles.appButtonText}>Save</Text>
                                    </TouchableOpacity>
                              
                       
                                             </View>
                          </View>
                       
                       
                     
            </View>
        </View>
      </ScrollView>
    );

}


export default AddAgents;
