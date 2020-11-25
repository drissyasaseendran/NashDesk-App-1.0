import React, { useEffect ,useState} from "react";
import {styles} from '../styles/dasboardStyles'
import {statuscardanalytics} from '../endpoints'
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native';
import StatusCard from './DashboardStatusCard';
import PerformanceGraph from './DashboardPerformanceGraph'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'
function Dashboard ({navigation}){
    const token = getAccessToken()
    const [dueToday, setdueToday] = useState('')
    const [overDue, setoverDue] = useState('')
    const [assigned, setassigned] = useState('')
    const [unassigned, setunassigned] = useState('')
    const [resolved, setresolved] = useState('')
    const [closed, setclosed] = useState('')
    const [today,setToday] = useState('')
    useEffect(() => {
       
      dueTodayData()
      overDueData()
      assignedData()
      unassignedData()
      resolvedData()
      closedData()
     
    },[]);
    const setTodayData = () =>
    {
      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth()+1; 
      var yyyy = today.getFullYear();
      if(dd<10) 
      {
          dd='0'+dd;
      } 

      if(mm<10) 
      {
          mm='0'+mm;
      } 
      today = yyyy+'-' +mm+'-'+dd;
      setToday(today)
    
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
              
            var today = new Date();
            var dd = today.getDate();

            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
       
            if(today == dt.date)
            {
              // if(agenttype == 'agent')
              //            {
                           
              //             setunassigned(dt.pending_cnt)
              //            }else
              //            {
                          
              //             setunassigned(dt.unassigned_cnt)
              //            }
                       

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
          } )
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
              <PerformanceGraph/>
            </View>
            </View>
      </ScrollView>
    );

  
}


export default Dashboard;



