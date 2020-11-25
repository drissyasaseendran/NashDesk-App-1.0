import React, { useEffect ,useState} from "react";
import {styles} from '../Styles/dasboardStyles'
import {statuscardanalytics} from '../endpoints'
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native';
import StatusCard from './DashboardStatusCard';
import PerformanceGraph from './DashboardPerformanceGraph'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'
function Dashboard ({navigation}){
    const token = getAccessToken()
    useEffect(() => {
      alert(token)
      axios.post(statuscardanalytics, { access_token: token })
    .then((resp) => {
      if (resp.data.status === "success") {
        setcompanyExtId(resp.data.payload.company_ext_id)
      }
    })
   
    },[]);

    return (
      <ScrollView >
            <View style={styles.header}></View>
            <View style={styles.heading}>
              <Text style={styles.headingTitle}>Dashboard</Text>
            </View>
            <View style={styles.canvasBody}>
            <View style={styles.statusBody}>
              <StatusCard  title="Due today"  type='simple-line-icon'        icon="check"          count={20} />
              <StatusCard  title="OverDue"    type="simple-line-icon"        icon="like"           count={28} />
              <StatusCard  title="Assigned"   type="simple-line-icon"        icon="like"           count={25} />
              <StatusCard  title="Unassigned" type="simple-line-icon"        icon="check"          count={20} />
              <StatusCard  title="Resolved"   type="simple-line-icon"        icon="check"          count={50} />
              <StatusCard  title="Closed"     type="simple-line-icon"        icon="like"           count={'02'}  />
            </View>
            <View style={styles.PerformanceBody}>
              <PerformanceGraph/>
            </View>
            </View>
      </ScrollView>
    );

  
}


export default Dashboard;



