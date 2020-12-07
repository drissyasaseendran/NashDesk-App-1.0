import React, { useEffect ,useState} from "react";
import {styles} from '../styles/dasboardStyles'
import {Text, View} from 'react-native';
import {performancegraphApiPath} from '../endpoints'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'
import { Dimensions } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import {LineChart,} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
function DashboardPerformanceGraph (props){
const [resolved,setResolved] = useState([0])
const [traffic,setTraffic] = useState([0])
// const token = getAccessToken()
const token =  props.token
const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 105, 106, ${opacity})`,
  strokeWidth: 0.5, 
  propsForBackgroundLines:{strokeWidth: 0},
  useShadowColorFromDataset: false 
};
const data = { 
  legend: ["Ticket  Traffic","Resolved"], 
  // labels: ['05', '08' ,'05', '08', '09', '10', '11', '12'],
  datasets: [{ data: traffic,
    color: (opacity = 1) => `rgb(0, 138, 209)`, 
  },
  { data: resolved, color: (opacity = 1) => `rgb(128, 201, 232)`,  }] ,
};
useEffect(() => {

  resolvedData()
  trafficData()
},[props.token]);

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
        
              Object.keys(res).map((key, i) => (
               
                trafficArray.push(i)
              ))
           
        
              setTraffic(trafficArray)
        
      }
    }
   
  }

})
}

    return (
        <View style={styles.performanceContent}>
            <View>
              <Text style={styles.performanceText}>Performance Graph</Text>
              
                <View style={styles.performanceBg} >
                <LineChart
                  data={data}
                  width={screenWidth}
                  height={256}
                  chartConfig={chartConfig}
                  bezier
                />
                </View>
               
            </View>
     
    </View>

    );

}


export default DashboardPerformanceGraph;



