import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
//   Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { BarChart,StackedBarChart, LineChart,YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import {

    Avatar,
    Title,
    Caption,


} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stackdata = [
    {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400,
    },
    {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
    },
    {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
    },
]
const linedata = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

const colors = ['#FF8C00', '#FFA500', '#F0E68C', '#FFE4B5']
const keys = ['apples', 'bananas', 'cherries', 'dates']
const data1 = [ 14, 51, 100, 95, 94, 24 ]
            .map((value) => ({ value }))
        const data2 = [ 24, 28, 93, 77, 42, 62 ]
            .map((value) => ({ value }))

        const barData = [
            {
                data: data1,
                svg: {
                    fill: '#FFA500',
                },
            },
            {
                data: data2,
            },
        ]


        const pieData = [
            {
                key: 1,
                amount: 50,
                svg: { fill: '#FF8C00' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: '#FFA500' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: '#F0E68C' }
            },
            {
                key: 4,
                amount: 95,
                svg: { fill: '#FFE4B5' }
            },
            {
                key: 5,
                amount: 35,
                svg: { fill: '#FFFFE0' }
            }
        ]
        const x = [50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80]
        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }
        const contentInset = { top: 20, bottom: 20 }
function Analytics (){

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Leadership Board</Text></View>
            <View style={styles.avatar}>

            <View style={styles.bodyContent}>
           
            <BarChart
                style={ { height: 200 } }
                data={ barData }
                yAccessor={({ item }) => item.value}
                svg={{
                    fill: '#F0E68C',
                }}
                contentInset={ { top: 30, bottom: 30 } }
                // { ...this.props }
            >
                {/* <Grid/> */}
            </BarChart>
            <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={linedata}
                    // formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />

                </View>
         

      
               <View style={styles.bodyContent}>
               <View  style={{flexDirection:'row', padding:20,    marginLeft: 52}}>
                            
                            <View style={{width:200, flexDirection:'column'}}>
                            <Text style={{color:'#666'}}>Ticket by Priority</Text>
                            <PieChart
                            style={{ height: 150 }}
                            valueAccessor={({ item }) => item.amount}
                            data={pieData}
                            spacing={0}
                            outerRadius={'95%'}>
                            <Labels/>
                            </PieChart>
                           
                            </View>
                            <View style={{width:200, flexDirection:'column'}}>
                            <Text style={{color:'#666'}}>Ticket By Traffic</Text>
                            <PieChart
                            style={{ height: 150 }}
                            valueAccessor={({ item }) => item.amount}
                            data={pieData}
                            spacing={0}
                            maxAngle={180}
                            outerRadius={'95%'}>
                            <Labels/>
                            </PieChart>
                            
                                
                            </View>
                            <View style={{width:200, flexDirection:'column'}}>
                            <Text style={{color:'#666'}}>Tickets By channel</Text>
                            <PieChart
                            style={{ height: 150 }}
                            valueAccessor={({ item }) => item.amount}
                            data={pieData}
                            spacing={0}
                            outerRadius={'95%'}>
                            <Labels/>
                            </PieChart>
                    
                            </View>
    
                            
                            </View>

                </View> 






            <View style={styles.bodyContent}>
                    
                            {/*  */}
                            <StackedBarChart
                                style={{ height: 200,}}
                                keys={keys}
                                colors={colors}
                                data={Stackdata}
                                showGrid={false}
                                contentInset={{ top: 30, bottom: 30 }}
                            />
            </View>
         
                 
            {/* </View> */}






            {/* <View style={{ height: 200, padding: 20 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={linedata}
                    gridMin={0}
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid />
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={linedata}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View> */}
        </View>
      </ScrollView>
    );

}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#FFAE42",
    height:200,
  },
  avatarHeading: {
    top: 0, left: 0,
    right: 0, bottom: 130,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',

},
HeaderTitle:
{

  color:'#fff',
//   fontWeight: 'bold',
  fontSize: 30,
},
  avatar: {
   width: windowWidth,
   height:'auto',
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#f5f5f5",
    borderWidth: 4,
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },

  bodyContent: {
  marginTop:30,
     width: 800,
     padding:30,
//    height:500,
    backgroundColor: "#fff",
    borderRadius:20,

    borderColor: "#c7c5c5",
    // borderWidth: 1,
//    marginBottom:10,
    alignSelf:'center',
    // flex: 1,
    // alignItems: 'center',
    // padding:30,
  },
  caption:{

//   fontWeight: 'bold',
  fontSize: 18,
  },
});
export default Analytics;
