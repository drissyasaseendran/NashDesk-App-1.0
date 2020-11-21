import React from 'react';
import {styles} from '../Styles/dasboardStyles'
import {Text, View} from 'react-native';
import { LineChart} from 'react-native-svg-charts'

const linedata = [0, 10, 40,49, 5]
const data = [
    { date: 1577421956000,value: 0.36},
    { date: 1577940356000, value: 0.36 },
    { date: 1577508356000, value: 0.36 },
    { date: 1577594756000, value: 0.36 },
    { date: 1577681156000, value: 0.36 },
    { date: 1577767556000, value: 0.36 },
    { date: 1577853956000, value: 0.36 },
    { date: 1578026756000, value: 0.34 },
    { date: 1578113156000, value: 0.36 },
    { date: 1578199556000, value: 0.29 },
    { date: 1578285956000, value: 0.26 },
    { date: 1578458756000, value: 0.48 },
    ]

function DashboardPerformanceGraph (props){
    return (
        <View style={styles.performanceContent}>
            <View>
              <Text style={styles.performanceText}>Performance Graph</Text>
              
                <View style={styles.performanceBg} >
                <View style={{width:200, height: 200  }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={linedata}
                    gridMin={0}
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'rgb(1, 135, 202)' }}
                >
                </LineChart>
          
            </View>
                </View>
               
            </View>
     
    </View>

    );

}


export default DashboardPerformanceGraph;



