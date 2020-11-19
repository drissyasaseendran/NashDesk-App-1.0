import React from 'react';
import SparkLine from '../Views/SparkLine'
import {styles} from '../Styles/dasboardStyles'
import {Text, View,TouchableOpacity} from 'react-native';
import {ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function Dashboard ({navigation}){
    return (
      <ScrollView >
            <View style={styles.header}></View>
            <View >
              <Text >Dashboard</Text>
            </View>
            <View style={styles.statusBody}>
            
                       <View>

                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                         
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                            
                            <Text style={styles.textStyle}>Due Today</Text>
                            </TouchableOpacity>
                        </View>
                       <View >
                           <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                        
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                          
                            <Text style={styles.textStyle}>OverDue</Text>
                            </TouchableOpacity>
                        </View>
                       <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                    
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                          
                            <Text style={styles.textStyle}>Assigned</Text>
                            </TouchableOpacity>
                        </View>

           
                       <View >
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                         
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                            
                            <Text style={styles.textStyle}>Unassigned</Text>
                            </TouchableOpacity>
                        </View>
                         <View style={styles.iconStyle}>
                          <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                       
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                           
                            <Text style={styles.textStyle}>Resolved</Text>
                            </TouchableOpacity>
                        </View>
                       <View >
                         <TouchableOpacity style={styles.Settingscard} onPress={() => navigation.navigate('Category')} >
                         
                            <Icon
                            style={{paddingTop:4,}}
                                                name="group"
                                                color='#FFAE42'
                                                size={20}

                                                />
                                                 <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                                                  alignItems: 'center', alignSelf:'center'}}>80</Text>
                            
                            <Text style={styles.textStyle}>Closed</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                     <Text style={styles.PerformanceTitle}>Performance Graph</Text>
                      <View style={ {

                        backgroundColor: '#fff',
                        borderColor: "#f5f5f5",
                        borderRadius: 20,
                        } }>
                      <View style={{
                                                            paddingVertical: 15,
                                                            paddingHorizontal: 10,
                                                            flexDirection: "row",
                                                   
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
        





      </ScrollView>
    );

}


export default Dashboard;



