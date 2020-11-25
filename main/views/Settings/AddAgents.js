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
  marginTop:50,
  width: windowWidth,
  height:windowHeight,
  // width: windowWidth-100,/
  // height:windowHeight-100,
    // backgroundColor: "#fff",
    // borderRadius:20,

    // borderColor: "#c7c5c5",
    // borderWidth: 1,
//    marginBottom:10,
    alignSelf:'center',
    // flex: 1,
    alignItems: 'center',
    // padding:30,/
  },
  caption:{

  // fontWeight: 'bold',
  fontSize: 18,
  },
  input: {
	
    // flex: 1,
    padding: 8,
    paddingRight: 10,
    paddingBottom: 10,
    // paddingLeft: 0,
    // backgroundColor: '#fff',
    color: '#424242',
},
searchSection: {
    marginTop:10,
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
    color: "#666",
    // fontWeight: "bold",
    justifyContent: 'center',
	alignItems: 'center',
    // textTransform: "uppercase"
  },
});
export default AddAgents;
