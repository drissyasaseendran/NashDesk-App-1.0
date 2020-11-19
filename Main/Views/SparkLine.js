//
//import { ScrollView, View, Text, SafeAreaView } from 'react-native';
//import React, { useEffect, useState } from "react";
//import * as shape from 'd3-shape'
//import {styles} from '../Styles/styles'
//import { AreaChart,XAxis, Path } from 'react-native-svg-charts'
//import {  LineChart as Lines} from "react-native-chart-kit";
//import { useDispatch, useSelector } from "react-redux";
//import { Dimensions } from "react-native";
//
////https://github.com/JesperLekland/react-native-svg-charts-examples/blob/master/storybook/stories/grid-min-max.js
////https://github.com/JesperLekland/react-native-svg-charts-examples
//const SparkLine = ({ }) => {
//
//  const [Due, setTheArray] = useState([]);
//  const [Date, setTheDate] = useState([]);
//  const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
//	const dispatch = useDispatch();
//	const DueToday = useSelector(state => state.DueToday.DueToday);
//    const dataset = {
//
//        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//        datasets: [{
//          data: [10,14,58,45,45,8]
//        }],
//        pointRadius: 0
//      }
//      const chartConfig = {
//        backgroundColor: 'red',
//        backgroundGradientFrom: '#13636485',
//        backgroundGradientTo: '#efefef',
//        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
//
//    }
//    useEffect(() => {
//
//      setFullName({name:'Marco',familyName: 'Shaw'});
//
//
//      let data =
//            {
//                "access_token": "39d72a016693f5609aef",
//                "dashboard_type":{"status_card_dashboard_types":"dash_due_today"},
//                "request_type":"view"
//            }
//
//		  fetch('http://127.0.0.1:5000/statuscardanalytics', {
//			method: 'POST',
//			headers: {
//			  'Content-Type': 'application/json'
//			},
//			body: JSON.stringify(data)
//		  }).then(response => {
//			return response.json();
//		  }).then(result => {
//		 if (result.status === "success") {
//        dispatch({
//				type: "FETCH_DUE_TODAY",
//				data: result.payload.data
//			  })
//		 }
//		  }).catch(error => {
//			return error
//		  });
//
//      let dash_over_due =
//      {
//          "access_token": "39d72a016693f5609aef",
//          "dashboard_type":{"status_card_dashboard_types":"dash_over_due"},
//          "request_type":"view"
//      }
//
//      fetch('http://127.0.0.1:5000/statuscardanalytics', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(dash_over_due)
//      }).then(response => {
//      return response.json();
//      }).then(result => {
//      if (result.status === "success") {
//        dispatch({
//        type: "FETCH_OVER_DUE",
//        data: result.payload.data
//        })
//      }
//      }).catch(error => {
//      return error
//      });
//
//      let Assigned =
//      {
//          "access_token": "39d72a016693f5609aef",
//          "dashboard_type":{"status_card_dashboard_types":"dash_assigned"},
//          "request_type":"view"
//      }
//
//      fetch('http://127.0.0.1:5000/statuscardanalytics', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(Assigned)
//      }).then(response => {
//      return response.json();
//      }).then(result => {
//      if (result.status === "success") {
//            dispatch({
//        type: "FETCH_ASSIGNED",
//        data: result.payload.data
//        })
//      }
//      }).catch(error => {
//      return error
//      });
//
//      let UnAssigned =
//      {
//          "access_token": "39d72a016693f5609aef",
//          "dashboard_type":{"status_card_dashboard_types":"dash_unassigned"},
//          "request_type":"view"
//      }
//
//      fetch('http://127.0.0.1:5000/statuscardanalytics', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(UnAssigned)
//      }).then(response => {
//      return response.json();
//      }).then(result => {
//      if (result.status === "success") {
//        dispatch({
//        type: "FETCH_UNASSIGNED",
//        data: result.payload.data
//        })
//      }
//      }).catch(error => {
//      return error
//      });
//      let Resolved =
//      {
//          "access_token": "39d72a016693f5609aef",
//          "dashboard_type":{"status_card_dashboard_types":"dash_resolved"},
//          "request_type":"view"
//      }
//
//      fetch('http://127.0.0.1:5000/statuscardanalytics', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(Resolved)
//      }).then(response => {
//      return response.json();
//      }).then(result => {
//      if (result.status === "success") {
//            dispatch({
//        type: "FETCH_RESOLVED",
//        data: result.payload.data
//        })
//      }
//      }).catch(error => {
//      return error
//      });
//
//      let Closed =
//      {
//          "access_token": "39d72a016693f5609aef",
//          "dashboard_type":{"status_card_dashboard_types":"dash_closed"},
//          "request_type":"view"
//      }
//
//      fetch('http://127.0.0.1:5000/statuscardanalytics', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(Closed)
//      }).then(response => {
//      return response.json();
//      }).then(result => {
//      if (result.status === "success") {
//
//        dispatch({
//        type: "FETCH_CLOSED",
//        data: result.payload.data
//        })
//      }
//      }).catch(error => {
//      return error
//      });
//
//
//      if (DueToday) {
//
//        if (DueToday.length > 0) {
//
//          DueToday.map((d) => {
//            // alert(JSON.stringify(d.due_today_cnt))
//            setTheArray([...Due, d.due_today_cnt])
//
//            // const newState =[ ...Date, d.date ]
//            // setTheDate(newState);
//            //   setTheDate(...Date, d.date)
//            //    setTheDate([...Date, d.date])
//
//                // console.log("TEH DARATATA _____________"+JSON.stringify(Due))
//            })
//
//            // Date.sort((a, b) => (new Date(a) - new Date(b)));
//            // Date.map((date) => {
//            //   DueToday.map((due) => {
//            //         if (date === due.date) {
//            //         setTheArray([...Due, due.due_today_cnt])
//            //           this.setState({ duetoday })
//
//            //         }
//            //     })
//
//            // })
//        }
//      }
//
//
//
//
//
//  },[])
//
//
//    const Duetoday = [ 0,25,3,14,25,4,78,2]
//    const OverDue = [ 10,5,3,14,2,4,8,2]
//    const Assigned = [ 50,51,31,4,50,4,78,2]
//    const Unassigned = [ 0,2,3,4,5,4,8,2]
//    const Resolved = [ 0,5,3,1,2,4,7,2]
//    const Closed = [14,5,6,8,14,2,10,0]
//
//
//    const Line = ({ line }) => (
//        <Path
//            key={ 'line ' }
//            d={ line }
//            stroke={ '#13636485' }
//            fill={ 'none' }
//        />
//    )
//       const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
//
//
//  return (
//
//
//
//
//
//
//
//
//
//
//
//    <ScrollView style={{ flex: 1, backgroundColor:'#F2F2F2' }}>
//
//            <View style={styles.SparkboxSimple}>
//            <AreaChart
//                style={{ height: 200 }}
//                data={ OverDue }
//                svg={{ stroke: '#13636485' }}
//                curve={ shape.curveNatural }
////                gridMax={ 1 }
//                gridMin={ 0 }
//            >
//                <Line/>
//            </AreaChart>
//            <XAxis
//          style={{ marginHorizontal: -10 }}
//          data={ data }
//          formatLabel={ (value, index) => index }
//          contentInset={{ left: 10, right: 10 }}
//          svg={{ fontSize: 10, fill: 'black' }}
//        />
//            <Text style={styles.Sparktext}>OverDue</Text>
//            </View >
//            <View style={styles.SparkboxSimple}>
//            <AreaChart
//                style={{ height: 200 }}
//                data={ Assigned }
//                svg={{ fill: '#13636485' }}
//                curve={ shape.curveNatural }
//                gridMax={ 1 }
//                gridMin={ -1 }
//            >
//                <Line/>
//            </AreaChart>
//            <Text style={styles.Sparktext}>Assigned</Text>
//            </View>
//            <View style={styles.SparkboxSimple}>
//            <AreaChart
//                style={{ height: 200 }}
//                data={ Unassigned }
//                svg={{ fill: '#13636485' }}
//                curve={ shape.curveNatural }
//                gridMax={ 1 }
//                gridMin={ -1 }
//            >
//                <Line/>
//            </AreaChart>
//            <Text style={styles.Sparktext}>Unassigned</Text>
//            </View>
//            <View style={styles.SparkboxSimple}>
//            <AreaChart
//                style={{ height: 200 }}
//                data={ Resolved }
//                svg={{ fill: '#13636485' }}
//                curve={ shape.curveNatural }
//                gridMax={ 1 }
//                gridMin={ -1 }
//            >
//                <Line/>
//            </AreaChart>
//            <Text style={styles.Sparktext}>Resolved</Text>
//            </View>
//            <View style={styles.SparkboxSimple}>
//            <AreaChart
//                style={{ height: 200 }}
//                data={ Closed }
//                svg={{ fill: '#13636485' }}
//                curve={ shape.curveNatural }
//                gridMax={ 1 }
//                gridMin={ -1 }
//            >
//                <Line/>
//            </AreaChart>
//            <Text style={styles.Sparktext}>Closed</Text>
//            </View>
//            <View style={styles.SparkboxSimple}>
//                <Lines
//          checkPoints={false}
//          data={dataset}
//          width={350}
//          height={220}
//          chartConfig={chartConfig}
//          // bezier
//        /></View>
//    </ScrollView>
//  );
//}
//
//export default SparkLine;

import React from 'react'
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
// import format from 'date-fns/format'
import { BarChart,StackedBarChart, LineChart,YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
const linedata = [0, 10, 40,49, 5]

const SparkLine = ({ }) => {
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

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        return (
             <View style={{width:500, height: 200, padding: 20 ,backgroundColor:'#fff'
          }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={linedata}
                    gridMin={0}
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'orange' }}
                >
                    {/* <Grid /> */}
                </LineChart>
                {/* <XAxis
                        data={ data }
                        svg={{
                        fill: 'black',
                        fontSize: 10,
                        fontWeight: 'bold',
                        // rotation: 20,
                        // originY: 30,
                        // y: 5,
                        }}
                        xAccessor={ ({ item }) => item.date }
                        scale={ scale.scaleTime }

                                    style={{ marginHorizontal: -15, height: 20 }}
                                    contentInset={{ left: 10, right: 25 }}
                                    formatLabel={ (value) => format(value, 'dd:MMM') }
                                /> */}
            </View>
        )


}

export default SparkLine