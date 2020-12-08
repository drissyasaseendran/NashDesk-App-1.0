import React, { Component } from 'react';
import {
  StyleSheet,ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,TextInput
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'
// import  'react-multiple-select-dropdown-lite/dist/index.css'
import  { useEffect, useState } from "react";
import { Dimensions } from 'react-native';
import {

    Avatar,
    Title,
    Caption,
  RadioButton

} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Notification (){
    const data = [
        {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
        {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
        {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
        {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
        {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
      ]
    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Add Agents</Text></View>
            <View style={styles.avatar}>

            <View style={styles.bodyContent}>
            <Timeline
          data={data}
          circleColor='orange'
          lineColor='orange'
          circleSize={20}
         
          
        //   timeContainerStyle={{minWidth:52, marginTop: -5, padding:5,}}
          timeStyle={{textAlign: 'center', backgroundColor:'orange', color:'white', padding:5, borderRadius:13}}
          titleStyle={{color:'gray', marginTop: -9}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
        />
                       
                       
                     
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
  width: 300,
  height:'auto',
    backgroundColor: "#fff",
    borderRadius:20,

    borderColor: "#c7c5c5",
    borderWidth: 1,
//    marginBottom:10,
    alignSelf:'center',
    // flex: 1,
    alignItems: 'center',
    padding:50,
  },
  caption:{

  fontWeight: 'bold',
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
export default Notification;
