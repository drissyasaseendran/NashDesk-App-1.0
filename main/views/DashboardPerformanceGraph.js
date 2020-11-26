import React, { useEffect ,useState} from "react";
import {styles} from '../styles/dasboardStyles'
import {Text, View} from 'react-native';
import { LineChart} from 'react-native-svg-charts'
import {performancegraphApiPath} from '../endpoints'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'

function DashboardPerformanceGraph (props){
const [resolved,setResolved] = useState([])
const [traffic,setTraffic] = useState([])
const token = getAccessToken()

useEffect(() => {
    resolvedData()
    trafficData()
   
},[]);
const resolvedData = () =>
{
  let data =
  {
    "access_token": token ,
    "request_type":"resolved_view"
  }

  axios.post(performancegraphApiPath, data)
.then((resp) => {
  let performanceData = []
  if (resp.data.status === "success") {
      let res = resp.data.payload.data
      if(res)
      {
        if(res.length>0)
        {
          
                Object.keys(res).map((key, i) => (
                    performanceData.push(i)
                ))
                
          
            setResolved(performanceData)
        }
      }
     
    }

})
}
const trafficData = () =>
{
  let data =
  {
    "access_token": token ,
    "request_type":"ticket_traffic"
  }

  axios.post(performancegraphApiPath, data)
.then((resp) => {
  let trafficArray = []
  if (resp.data.status === "success") {
      let res = resp.data.payload.data
      if(res)
      {
        if(res.length>0)
        {
            res.map((per) =>
            {
                Object.keys(res).map((key, i) => (
                    trafficArray.push(i)
                ))
                
            })
            setTraffic(trafficArray)
        }
      }
     
    }

})
}
const data = [
    {
        data: resolved,
        svg: { stroke: '#3BB9FF'
     },
    },
    {
        data: traffic,
        svg: { stroke: '#95B9C7' },
    },
]
    return (
        <View style={styles.performanceContent}>
            <View>
              <Text style={styles.performanceText}>Performance Graph</Text>
              
                <View style={styles.performanceBg} >
             
                 <View style={ { height: 200 ,width:300,} }>
             
                 <LineChart
            style={{ height: 200 }}
            stroke={ {
                curve: 'smooth',
              }}
            gridMin={0}
            contentInset={{ top: 10, bottom: 10 }}
            svg={{ stroke: 'rgb(1, 135, 202)' }}
            data={ data }
          
        >
          
        </LineChart>
           
            </View>
                </View>
               
            </View>
     
    </View>

    );

}


export default DashboardPerformanceGraph;



