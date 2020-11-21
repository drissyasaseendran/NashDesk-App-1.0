import React from 'react';
import SparkLine from '../Views/SparkLine'
import {styles} from '../Styles/dasboardStyles'
import {Text, View} from 'react-native';
import {ScrollView,SafeAreaView} from 'react-native';
import DashboardStatusCard from './DashboardStatusCard';

function Dashboard ({navigation}){
    return (
      <ScrollView >
            <View style={styles.header}></View>
            <View style={styles.heading}>
              <Text style={styles.headingTitle}>Dashboard</Text>
            </View>
            <View style={styles.canvasBody}>
            <View style={styles.statusBody}>
              <DashboardStatusCard  title="Due today"  icon="rocket"  count={20} />
              <DashboardStatusCard  title="OverDue"    icon="clock"  count={28} />
              <DashboardStatusCard  title="Assigned"   icon="clock"  count={25} />
              <DashboardStatusCard  title="Unassigned" icon="facebook"  count={20} />
              <DashboardStatusCard  title="Resolved"   icon="clock"  count={50} />
              <DashboardStatusCard  title="Closed"     icon="clock"  count={2}  />
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
        


                    </View>


      </ScrollView>
    );

}


export default Dashboard;



