
import React, { Component } from 'react';
import SparkLine from '../Views/SparkLine'
import {
  StyleSheet,
  Text,
  View,
  Image,TextInput,Button,
  TouchableOpacity
} from 'react-native';

import { Dimensions,ScrollView,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Dashboard ({navigation}){

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Dashboard</Text></View>
            <View style={styles.avatar}>

            <View style={styles.bodyContent}>

                  <View style={{flex:1, flexDirection:'row'}}>
                       <View >

                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                           <View style={ {flexDirection: 'row'} }>
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                             </View>
                            <Text style={styles.textStyle}>Due Today</Text>
                            </TouchableOpacity>
                        </View>
                       <View >
                           <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                           <View style={ {flexDirection: 'row'} }>
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                             </View>
                            <Text style={styles.textStyle}>OverDue</Text>
                            </TouchableOpacity>
                        </View>
                       <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                           <View style={ {flexDirection: 'row'} }>
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                             </View>
                            <Text style={styles.textStyle}>Assigned</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                       <View >
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                           <View style={ {flexDirection: 'row'} }>
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                             </View>
                            <Text style={styles.textStyle}>Unassigned</Text>
                            </TouchableOpacity>
                        </View>
                         <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                           <View style={ {flexDirection: 'row'} }>
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                             </View>
                            <Text style={styles.textStyle}>Resolved</Text>
                            </TouchableOpacity>
                        </View>
                       <View >
                         <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                           <View style={ {flexDirection: 'row'} }>
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                             </View>
                            <Text style={styles.textStyle}>Closed</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                     <Text style={styles.PerformanceTitle}>Performance Graph</Text>
                      <View style={ {
//                      flexDirection: 'row',
//                       justifyContent: 'center',
//                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderColor: "#f5f5f5",
//                        borderColor:'red',
                        borderRadius: 20,
                        } }>
                      <View style={{
                                                            paddingVertical: 15,
                                                            paddingHorizontal: 10,
                                                            flexDirection: "row",
                                                            // justifyContent: "right",
                                                            alignItems: "center",
                                                            paddingRight:45,
                                                       
                                                            paddingTop:45
                                                        }}>
                                                        <View style={{
                                                         width:70, height: 30, borderTopLeftRadius: 15, borderBottomLeftRadius: 15,
                                                         borderColor: '#ccc', borderWidth: 1,  
                                                        }}><Text style={{ fontSize:12 ,padding:7,color:'#666'}}>Resolved</Text></View>
                                                          <View style={{
                                                        borderLeft:0,  width:70, height: 30, borderBottomRightRadius: 15, borderTopRightRadius: 15,
                                                        borderColor: '#ccc', borderWidth: 1
                                                        }}><Text  style={{ fontSize:12,padding:7,color:'#666'}}>Traffic</Text></View>

                                             <View>
                                             </View>
                                             </View>
                                                  <SafeAreaView style={{ flex: 1,backgroundColor:'#fff', justifyContent: 'center',
    alignItems: 'center', }}>
                                                  <SparkLine/>
                                                </SafeAreaView>

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
textStyle:{
paddingTop:27,
fontSize: 14,
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
    alignSelf:'center',
    position: 'absolute',
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
        backgroundColor: '#fff',
        width:150,
        height:150,
//        border:5,
//        borderColor: "#f5f5f5",
        borderColor:'red',
        borderRadius: 20,
//        shadowRadius:13,

    },
    PerformanceTitle:
    {
    padding:25,
       fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
//                                                  alignItems: 'center', alignSelf:'center'
    },

});
export default Dashboard;



