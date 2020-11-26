import React, { useEffect ,useState} from "react";
import {styles} from '../styles/dasboardStyles'
import {Text, View} from 'react-native';
import { LineChart, YAxis, XAxis} from 'react-native-svg-charts'
import {performancegraphApiPath} from '../endpoints'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'

function DashboardPerformanceGraph (props){
const [resolved,setResolved] = useState('')
const [traffic,setTraffic] = useState('')
const token = getAccessToken()
const data1 = [10,4,24,14,3,0,45  ]
const data2 = [1,14,40,4,3,20,45  ]
useEffect(() => {
    resolvedData()
   
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
            res.map((per) =>
            {
                
                performanceData.push(per[0])
            })
            setResolved(performanceData)
        }
      }
     
    }

})
}
const data = [
    {
        data: data1,
        svg: { stroke: '#3BB9FF'
     },
    },
    {
        data: data2,
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



