import React, { useEffect ,useState} from "react";
import {styles} from '../styles/dasboardStyles'
import {statuscardanalytics,profileApiPath} from '../endpoints'
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native';
import StatusCard from './DashboardStatusCard';
import PerformanceGraph from './DashboardPerformanceGraph'
import {getAccessToken} from '../utils/Authenticator'
import moment from 'moment';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
function Dashboard ({navigation}){
  
    const [dueToday, setdueToday] = useState('')
    const [overDue, setoverDue] = useState('')
    const [assigned, setassigned] = useState('')
    const [unassigned, setunassigned] = useState('')
    const [resolved, setresolved] = useState('')
    const [closed, setclosed] = useState('')
    const [agentType, setagentType] = useState('')
    const today = moment(new Date()).format('YYYY-MM-DD')
    const [token,setToken] =  useState('')
     const getAccessToken = async () => {
      let userId = '';
      try {
        userId = await AsyncStorage.getItem('access_token') || 'none';
        setToken(userId)
      } catch (error) {
      }
   
    }
    useEffect(() => {
      alert(token)
      getAccessToken()
      profileView()
      dueTodayData()
      overDueData()
      assignedData()
      unassignedData()
      resolvedData()
      closedData()
     
    },[token]);
    const profileView = () =>
    {
      let data =
      {
        "access_token": token ,
        "request_type":"view"
      }
   
      axios.post(profileApiPath, data)
    .then((resp) => {

      if (resp.data.status === "success") {
          let res = resp.data.payload.data
          setagentType(res[0].agent_type)
        }
  
    })
  }
    const dueTodayData = () =>
    {
           
      let data =
      {
        "access_token": token ,
        "dashboard_type":{"status_card_dashboard_types":"dash_due_today"},
        "request_type":"view"
      }
   
      axios.post(statuscardanalytics, data)
    .then((resp) => {
      if (resp.data.status === "success") {
          let res = resp.data.payload.data
          if(res)
          {
            if(res.length>0)
            {
              res.map((dt)=>
              {
              if(today == dt.date)
              {
              
                setdueToday(dt.due_today_cnt)
              }
            } )
          }
      }
    }
  
    })
  }
  const overDueData = () =>
  {
    let data =
      {
        "access_token": token ,
        "dashboard_type":{"status_card_dashboard_types":"dash_over_due"},
        "request_type":"view"
      }
   
      axios.post(statuscardanalytics, data)
    .then((resp) => {
      if (resp.data.status === "success") {
          let res = resp.data.payload.data
          if(res)
          {
            if(res.length>0)
            {
              res.map((dt)=>
              {
                
            
              if(today == dt.date)
              {
              

                setoverDue(dt.over_due_cnt)
              }
            } )
          }
      }
    }
  
    })
  }
  const assignedData = () =>
  {
    let data =
    {
      "access_token": token ,
      "dashboard_type":{"status_card_dashboard_types":"dash_assigned"},
      "request_type":"view"
    }
 
    axios.post(statuscardanalytics, data)
  .then((resp) => {
    if (resp.data.status === "success") {
        let res = resp.data.payload.data
        if(res)
        {
          if(res.length>0)
          {
            res.map((dt)=>
            {
            if(today == dt.date)
            {
            

              setassigned(dt.assigned_cnt)
            }
          } )
        }
    }
  }

  })
  }
  const unassignedData = () =>
  {
    let data =
    {
      "access_token": token ,
      "dashboard_type":{"status_card_dashboard_types":"dash_unassigned"},
      "request_type":"view"
    }
 
    axios.post(statuscardanalytics, data)
  .then((resp) => {
    if (resp.data.status === "success") {
        let res = resp.data.payload.data
        if(res)
        {
          if(res.length>0)
          {
            res.map((dt)=>
            {
          
       
            if(today == dt.date)
            {
              if(agentType == 'agent')
                         {
                           
                          setunassigned(dt.pending_cnt)
                         }else
                         {
                          
                          setunassigned(dt.unassigned_cnt)
                         }
                       

            }
          } )
        }
    }
  }

  })
  }
  const resolvedData = () =>
  {
    let data =
    {
      "access_token": token ,
      "dashboard_type":{"status_card_dashboard_types":"dash_resolved"},
      "request_type":"view"
    }
 
    axios.post(statuscardanalytics, data)
  .then((resp) => {
    if (resp.data.status === "success") {
        let res = resp.data.payload.data
        if(res)
        {
          if(res.length>0)
          {
            res.map((dt)=>
            {
              
     
            if(today == dt.date)
            {
            

              setresolved(dt.resolved_date_cnt)
            }
          } )
        }
    }
  }

  })
  }
  const closedData = () =>
  {
    let data =
    {
      "access_token": token ,
      "dashboard_type":{"status_card_dashboard_types":"dash_closed"},
      "request_type":"view"
    }
 
    axios.post(statuscardanalytics, data)
  .then((resp) => {
    if (resp.data.status === "success") {
        let res = resp.data.payload.data
        if(res)
        {
          if(res.length>0)
          {
            res.map((dt)=>
            {
              if(today == dt.date)
              {
                setclosed(dt.closed_date_cnt)
              }
          })
        }
    }
  }

  })
  }

    return (
      <ScrollView >
            <View style={styles.header}></View>
            <View style={styles.heading}>
              <Text style={styles.headingTitle}>Dashboard</Text>
            </View>
            <View style={styles.canvasBody}>
            <View style={styles.statusBody}>
              <StatusCard  title="Due today"  type='simple-line-icon'        icon="check"          count={dueToday} />
              <StatusCard  title="OverDue"    type="simple-line-icon"        icon="like"           count={overDue} />
              <StatusCard  title="Assigned"   type="simple-line-icon"        icon="like"           count={assigned} />
              <StatusCard  title="Unassigned" type="simple-line-icon"        icon="check"          count={unassigned} />
              <StatusCard  title="Resolved"   type="simple-line-icon"        icon="check"          count={resolved} />
              <StatusCard  title="Closed"     type="simple-line-icon"        icon="like"           count={closed}  />
            </View>
            <View style={styles.PerformanceBody}>
              <PerformanceGraph token = {token}/>
            </View>
            </View>
      </ScrollView>
    );

  
}


export default Dashboard;



