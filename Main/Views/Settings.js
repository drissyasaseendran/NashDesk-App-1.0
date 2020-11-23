import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,TextInput,Button,
  TouchableOpacity,ScrollView
} from 'react-native';

import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Settings ({navigation}){

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Settings</Text></View>
            <View style={styles.avatar}>

            <View style={styles.bodyContent}>
                  <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                       <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Groups')} >
                            <Icon
                                                name="account-group"
                                                color='#FFAE42'
                                                size={50}

                                                />
                            <Text style={styles.textStyle}>Gorup</Text>
                            </TouchableOpacity>
                        </View>
                       <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Agents')} >
                            <Icon
                                                name="account-outline"
                                                color='#FFAE42'
                                                size={50}

                                                />
                            <Text style={styles.textStyle}>Agents</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                       <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Tags')} >
                            <Icon
                                                name="message-reply-text"

                                                color='#FFAE42'
                                               size={50}

                                                />
                            <Text style={styles.textStyle}>Tags</Text>
                            </TouchableOpacity>
                        </View>
                       <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('CannedResponse')} >
                            <Icon
                                                name="message-reply-text"
                                                color='#FFAE42'
                                                size={50}

                                                />
                            <Text style={styles.textStyle}>CannedResponse</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                     <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                       <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                            <Icon
                                                name="blur"
                                                color='#FFAE42'
                                                size={50}

                                                />
                            <Text style={styles.textStyle}>Category</Text>
                            </TouchableOpacity>
                        </View>
                       <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Profile')} >
                            <Icon
                                                name="account-star-outline"
                                                color='#FFAE42'
                                                size={50}

                                                />
                            <Text style={styles.textStyle}>Profile</Text>
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
  fontWeight: 'bold',
  fontSize: 30,
},
textStyle:{
fontSize: 18,
color:'#504f4d'
},

  avatar: {
   width: windowWidth,
   height:'auto',
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#f5f5f5",
    borderWidth: 4,
    marginBottom:10,
    paddingBottom:50,
    alignSelf:'center',
    // position: 'absolute',
    marginTop:130
  },

  bodyContent: {
  marginTop:100,
//  borderColor:'#c7c5c5',
//   borderWidth: 1,
//    borderRadius:20,
//  backgroundColor:'#f5f5f5',
  alignSelf:'center',

  },

  caption:{
   paddingTop:20,
  fontSize: 14,
  },

  Settingscard:
    {
//     flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
//        padding:5,
        margin:20,
       
        width:180,
        height:180,
        shadowOpacity:0.25,
        borderRadius: 2,
        shadowRadius:13,

    },
});
export default Settings;



