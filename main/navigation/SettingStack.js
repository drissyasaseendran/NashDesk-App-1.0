import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
import Settings from '../screens/Settings'
import {Button } from 'react-native';
import Dashboard from '../screens/Dashboard'
import Groups from  '../screens/Settings/Groups'
import Agents from  '../screens/Settings/Agents'
import Tags from  '../screens/Settings/Tags'
import Header from './HeaderMenu'
import CannedResponse from '../screens/Settings/CannedResponse'
import GoBack from '../screens/GoBack'

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
                    backgroundColor: '#1a73e8'
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
      
    },
    Agents:{
        screen:Agents,
        
    },
    CannedResponse:{
        screen:CannedResponse,
        
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

