import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
import Settings from '../views/Settings'
import {Button } from 'react-native';
import Dashboard from '../views/Dashboard'
import Groups from  '../views/Settings/Groups'
import Agents from  '../views/Settings/Agents'
import Tags from  '../views/Settings/Tags'
import Header from './HeaderMenu'
import CannedResponse from '../views/Settings/CannedResponse'
import GoBack from '../views/GoBack'

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
                    backgroundColor: '#0187CA'
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

