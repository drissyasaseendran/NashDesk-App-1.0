import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,TextInput
} from 'react-native';

import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {

    Avatar,
    Title,
    Caption,
  RadioButton

} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function AddCategory (){
    const [checked, setChecked] = React.useState('first');

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>AddCategory</Text></View>
            <View style={styles.avatar}>
      <View style={styles.bodyContent}>
           
            <TextInput
													multiline={true}

													style={styles.input}
													placeholder="Category Name"

													underlineColorAndroid='rgba(0,0,0,0)' />
                                
            <TextInput
													multiline={true}

													style={styles.input}
													placeholder="Enter the Samples"

													underlineColorAndroid='rgba(0,0,0,0)' />

                  <View style={styles.samplespace}>
                  <View style={{
                                                paddingVertical: 5,
                                                paddingHorizontal: 5,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}>
                                                <Text>Ugu chuscg ghvdu7sgv vhdsuvg</Text>
											  <View style={{paddingLeft:55, width:100, flexDirection:'row'}}>
											  <Icon color={'#FFAE42'}  name="trash-2"/>
												  <Icon color={'#FFAE42'}  name="edit"/>
										
											  </View>
                                            </View>

                  </View>
                  <View style={styles.samplespace}>
                  <View style={{
                                                paddingVertical: 5,
                                                paddingHorizontal: 5,
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}>
                                                <Text>Ugu chuscg ghvdu7sgv vhdsuvg</Text>
											  <View style={{paddingLeft:55, width:100, flexDirection:'row'}}>
											  <Icon color={'#FFAE42'}  name="trash-2"/>
												  <Icon color={'#FFAE42'}  name="edit"/>
										
											  </View>
                                            </View>

                  </View>

                  <TouchableOpacity  style={styles.appButtonContainer}>
												  <Text style={styles.appButtonText}>Delete</Text>
											  </TouchableOpacity>
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
    marginTop:20,
     width: 500,
  // height:windowHeight-100,
    borderColor: '#c7c5c5',
    backgroundColor: '#fff',
	borderWidth: 1,
	borderRadius: 25,
    // flex: 1,
    padding: 8,
    paddingRight: 10,
    paddingBottom: 10,
    // paddingLeft: 0,
    // backgroundColor: '#fff',
    color: '#424242',
},
samplespace:{
  marginTop:20,
  width: 500,
// height:windowHeight-100,
 borderColor: '#c7c5c5',
 backgroundColor: '#fff',
borderWidth: 1,
borderRadius: 25,
 // flex: 1,
 padding: 8,
 paddingRight: 10,
 paddingBottom: 10,
 // paddingLeft: 0,
 // backgroundColor: '#fff',
 color: '#424242',
},  appButtonContainer: {
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
});
export default AddCategory;
