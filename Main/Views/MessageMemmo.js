import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Dimensions } from 'react-native';
import {

    Avatar,
    Title,
    Caption,


} from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Memo (){
  const [Message, setMessage] = useState("");
  const Memmos = useSelector(state => state.MessageMemo.MessageMemo)

  const dispatch = useDispatch(); //this hook gives us dispatch method

  useEffect(() => {
    let data = {
      "access_token": "5fa7c9921dd251c96965",
      "request_type": "view"
      }
      
      fetch('http://127.0.0.1:5000/messagememos', {
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
        type: "FETCH_MESSAGE_MEMO",
        data: result.payload.data
        })
      
  
    
      }
      }).catch(error => {
      return error
      });
  })
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Message Memmos</Text></View>
            <View style={styles.avatar}>

            <View style={styles.bodyContent}>
            {Memmos &&  Memmos.map((Memmos)=>
                      <View style={{height:'auto',paddingBottom:30 ,width:400}}>
                            <View>
                                <Title style={styles.title}>{Memmos.message}
                                    </Title>
                                         <View style={{
                                                paddingVertical: 15,
                                                paddingHorizontal: 10,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}>
                                                <Caption style={styles.caption}>{Memmos.date}</Caption>
                                              <Icon  onPress={() => dispatch({ type: "REMOVE_MEMOS", data: {
                                                  "access_token": "55b18168dcc32806699d",
                                                "msg_id":[Memmos.msg_id],
                                                "request_type":"delete"

                                              }})}  name="trash" color={'#FFAE42'}/>
                                            </View>

                                            <View
                                              style={{
                                                borderBottomColor: '#c7c5c5',
                                                borderBottomWidth: 1,
                                                marginLeft: 5,
                                                marginRight: 5
                                              }}
                                            />
                            </View>
                        </View>
            )}



            </View>


            <View>
            <TextInput
                  multiline={true}

                  style={styles.memoinput}
                  placeholder="Type a message here"
                  onChange={e => setMessage(e.target.value)}
                  underlineColorAndroid='rgba(0,0,0,0)' />
              <View style={styles.sendContainer}>
                <TouchableOpacity
                  underlayColor={'#4e4273'}
                  onPress={() => dispatch({ type: "ADD_MEMOS", data: {
                    "access_token": "55b18168dcc32806699d",
                    "message":`${Message}`,
                    "request_type":"add"

                }})} 
                  >
                  <Text style={styles.sendLabel}>SEND</Text>
                </TouchableOpacity>
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
  fontWeight: 'bold',
  fontSize: 30,
},
title:{
fontSize: 18,
color:'#504f4d'
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
  
  alignSelf:'center',

  },

  caption:{
   paddingTop:20,
  fontSize: 14,
  },
     memoinput: {
        color: '#555555',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 15,
        width: 400,
        height: 100,
        borderColor: '#FFAE42',
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
      sendContainer: {
        padding: 20,

    },
     sendLabel: {
          color: '#fff',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 15,
        width: 400,
        height: 80,
        borderColor: '#FFAE42',
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
        textAlign:'center',
        backgroundColor: '#FFAE42'
    },
});
export default Memo;
