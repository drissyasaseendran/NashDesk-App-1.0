import React, { useEffect ,useState} from "react";
import {styles} from '../styles/dasboardStyles'
import {Text, View} from 'react-native';
import {performancegraphApiPath} from '../endpoints'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {LineChart,} from "react-native-chart-kit";
function DashboardPerformanceGraph (props){
const [resolved,setResolved] = useState([])
const [traffic,setTraffic] = useState([])
const token = getAccessToken
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
  legend: ["Rainy Days","Sunny day"], 
  labels: ['05', '08' ,'05', '08', '09', '10', '11', '12'],
  datasets: [{ data: [ 4, 15, 2, 9, 20, 5,20,8 ],
    color: (opacity = 1) => `rgb(0, 138, 209)`, 
  },
  { data: [ 0, 20, 16, 40, 30, 20 ,14,12], color: (opacity = 1) => `rgb(128, 201, 232)`,  }] ,
};
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



