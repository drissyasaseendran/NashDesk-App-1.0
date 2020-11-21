import { createDrawerNavigator  } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import React from 'react'
import Settings from '../Views/Settings'
import {Button } from 'react-native';
import Dashboard from '../Views/Dashboard'
import Groups from  '../Views/Settings/Groups'
import Agents from  '../Views/Settings/Agents'
import Tags from  '../Views/Settings/Tags'
import Header from './Navstructure'
import CannedResponse from '../Views/Settings/cannedResponse'
import GoBack from '../Views/GoBack'

const SettingStack = createStackNavigator(
    {
    Settings:{
        screen:Settings,
        navigationOptions:({navigation}) => {
            return{
            headerTitle: () => <Header navigation={navigation} title='Settings'/>
            }
        }
    },
    Groups:{
        screen:Groups,
        navigationOptions:({navigation}) => {
           
            return{
                headerStyle: {
                    // height: '45%',
                    backgroundColor: '#ffae19'
                  },
                  headerTintColor: 'white',
                  headerLeft: (
                    <Button onPress={() => navigation.goBack()} title="Back" />
                  ),
            headerTitle: () => <GoBack navigation={navigation} title='Group'/>
            }
        }
    },
    Tags:{
        screen:Tags,
        // navigationOptions:({navigation}) => {
        //     return{
        //     headerTitle: () => <Header navigation={navigation} title='Tags' />
        //     }
        // }
    },
    Agents:{
        screen:Agents,
        // navigationOptions:({navigation}) => {
        //     return{
        //     headerTitle: () => <Header navigation={navigation} title='Agents'/>
        //     }
        // }
    },
    CannedResponse:{
        screen:CannedResponse,
        // navigationOptions:({navigation}) => {
        //     return{
        //     headerTitle: () => <Header navigation={navigation} title='CannedResponse'/>
        //     }
        // }
    },
    Dashboard:{
        screen:Dashboard,
        navigationOptions:({navigation}) => {
            return{
            headerTitle: () => <Header navigation={navigation} title='DashBoard'/>
            }
        }
    }
     
     
}
,  {
    defaultNavigationOptions:{
        headerTintColor:'#666',
        headerStyle:{background:'red'}

    }
}
    )

export default SettingStack

