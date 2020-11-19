import React, {useEffect, useState, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import {

    Avatar,
    Title,
    Caption,


} from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Leader (){
  const Leader = useSelector(state => state.Leader.Leader);
  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      "access_token": "5fa7c9921dd251c96965",
      "request_type":"view"
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
        alert(result.status)
      if (result.status === "success") {
        result.payload.data.map((d) => {
         
          if (d.image.trim() != "") {
              
              fetch('http://127.0.0.1:5000/download?hashcode=' + d.image)
                  .then(response => response.blob(), console.log("*****_____________________logo_________**********"))
                  .then(images => {
                    
                      var outside = URL.createObjectURL(images)
                      var reader = new FileReader();
                      reader.readAsDataURL(images);
                      reader.onloadend = function () {
                     
                          var base64data = reader.result;
                          const session_image = base64data
                          d.image = base64data
                          dispatch({
                            type: "FETCH_LEADER",
                            data: result.payload.data
                            })
                        

                      }
                  })
          } 



      })
      // setData(result.payload.data)
     
      }
      }).catch(error => {
      return error
      });
  })
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Leadership Board</Text></View>
            <View style={styles.avatar}>

            <View style={styles.bodyContent}>

            {Leader &&  Leader.map((Leader)=>
                  
                  <View style={{flexDirection:'row',alignItems: 'center',height:100}}>
                      <Avatar.Image
                          source={Leader.image}
                          size={80}
                      />
                      <View style={{paddingLeft:45,width:300, flexDirection:'column'}}>
                      <Title style={styles.title}>{Leader.first_name}</Title>
                          <Caption style={styles.caption}>{Leader.count}</Caption>

                      </View>

                  </View>

              )}
                         
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
     width: 500,
   height:500,
    backgroundColor: "#fff",
    borderRadius:20,

    borderColor: "#c7c5c5",
    borderWidth: 1,
//    marginBottom:10,
    alignSelf:'center',
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  caption:{

  fontWeight: 'bold',
  fontSize: 18,
  },
});
export default Leader;
