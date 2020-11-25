import React, { Component,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,TextInput
} from 'react-native';

import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function AddGroup ({navigation}){
  const [Grorpname, setGroupName] = useState("");
  const [Description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
      // evt.preventDefault();
   
       let  data={
          "access_token": "5fa7c9921dd251c96965",
          "fields":{
                "agt_sett_id":"",
                "group_name":`${Grorpname}`,
                "description":`${Description}`,
                "agent_username":["nash@gmail.com"]
               },
            "agent_type":"superadmin",	   
            "request_type":"add"  
         
        
         
          }
        
        fetch('http://127.0.0.1:5000/groups', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then(response => {
        return response.json();
        }).then(result => { 
         
        if (result.status === "success") {
          
          alert("Add group successfully")
          navigation.navigate('Groups')
        }
        }).catch(error => {
        return error
        });
  }
   
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Add Group</Text></View>
            <View style={styles.avatar}>

            <View style={styles.bodyContent}>

                  <View style={{flexDirection:'row',alignItems: 'center'}}>
                           
                            <View style={{paddingLeft:55, flexDirection:'column'}}>
                         
                            <View style={styles.searchSection}>
                            <TextInput
													multiline={true}
                          name='GroupName'
													style={styles.input}
													placeholder="Title"
                          onChange={e => setGroupName(e.target.value)}
													underlineColorAndroid='rgba(0,0,0,0)' />
                               

                            </View>
                            <View style={styles.groupSection}>
                            <TextInput
													multiline={true}
                          name='Description'
													style={styles.groupinput}
													placeholder="Description"
                          onChange={e => setDescription(e.target.value)}
													underlineColorAndroid='rgba(0,0,0,0)' />
                               

                            </View>
                            <View style={{
                                                            paddingVertical: 15,
                                                            paddingHorizontal: 10,
                                                            flexDirection: "row",
                                                            justifyContent: "space-between",
                                                            alignItems: "center"
                                                        }}>
                                                       <View></View>
                                     <TouchableOpacity  style={styles.appButtonContainer} onPress={handleSubmit} >
                                        <Text style={styles.appButtonText}>Add</Text>
                                    </TouchableOpacity>
                              
                       
                                             </View>
                           
                            </View>
                            

                        </View>
                       
                      
                       
                     
            </View>
        </View>
      </View>
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
  width: windowWidth-100,
  height:windowHeight-100,
    // backgroundColor: "#fff",
    // borderRadius:20,

    // borderColor: "#c7c5c5",
    // borderWidth: 1,
//    marginBottom:10,
    alignSelf:'center',
    flex: 1,
    alignItems: 'center',
    padding:30,
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
    // color: '#424242',
},
  groupinput: {
   // flex: 1,
   borderColor: '#fff',
    padding: 8,
    paddingRight: 10,
    paddingBottom: 10,
    height: 140,
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
groupSection: {
    marginTop:10,
    height:100,
	width: 250,
	height: 140,
	borderColor: '#c7c5c5',
	borderWidth: 1,
	borderRadius: 25,
    // flex: 1,
    // flexDirection: 'row',
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
export default AddGroup;
