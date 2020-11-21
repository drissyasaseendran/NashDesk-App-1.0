import { createAppContainer, } from 'react-navigation'
import { createBottomTabNavigator, } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Dashboard from '../Views/Dashboard'
import Profile from '../Views/Profile'
import React from 'react'
import Settings from '../Views/Settings'
import Groups from  '../Views/Settings/Groups'
import Agents from  '../Views/Settings/Agents'
import Tags from  '../Views/Settings/Tags'
import Header from './HeaderMenu'
import CannedResponse from '../Views/Settings/cannedResponse'
import Leader from '../Views/LeaderShip'
import MessageMemo from '../Views/MessageMemmo'
import Category from '../Views/Settings/Category'
import AddGroup from '../Views/Settings/AddGroup'
import AddAgents from '../Views/Settings/AddAgents'
import AddCategory from '../Views/Settings/AddCategory'
import AddCannedResponse from '../Views/Settings/AddCannedResponse'
import Analytics from '../Views/Analytics'
import Notification from '../Views/Settings/Notification'


const NotificationTab = createStackNavigator({

  Notification: {
    screen: Notification,
    navigationOptions:({navigation}) => {

      return{
          headerStyle: {
         
              borderBottomWidth: 0,
              backgroundColor: '#0187CA'
            },
            headerTintColor: 'white',
           
      }
  }
  },

})
const AnalyticsTab = createStackNavigator({

  Analytics: {
    screen: Analytics,
    navigationOptions:({navigation}) => {

      return{
          headerStyle: {
         
              borderBottomWidth: 0,
              backgroundColor: '#0187CA'
            },
            headerTintColor: 'white',
      
      }
  }
  },
    

})
const HomeTab = createStackNavigator({
  
   
    Dashboard: {
      screen: Dashboard,
      navigationOptions:({navigation}) => {
        return{
          headerStyle: {
         
              
              borderBottomWidth: 0,
              backgroundColor: '#0187CA'
            },
            headerTintColor: 'white',
            headerTitle: () => <Header navigation={navigation} title='Settings'/>
        
      }
    }
  },
    Profile: {
      screen: Profile,
      navigationOptions:({navigation}) => {
       
        return{
            headerStyle: {
          
                borderBottomWidth: 0,
                backgroundColor: '#0187CA'
              },
              headerTintColor: 'white',
           
        }
    }
    },
      
   Analytics: {
    screen: Analytics,
    navigationOptions:({navigation}) => {

      return{
          headerStyle: {
          
              borderBottomWidth: 0,
              backgroundColor: '#0187CA'
            },
            headerTintColor: 'white',
        
      }
  }
  },
    
   Leader: {
      screen: Leader,
      navigationOptions:({navigation}) => {

        return{
            headerStyle: {
             
                borderBottomWidth: 0,
                backgroundColor: '#0187CA'
              },
              headerTintColor: 'white',
      
        }
    }
    },
      MessageMemo: {
      screen: MessageMemo,
      navigationOptions:({navigation}) => {

        return{
            headerStyle: {
            
                borderBottomWidth: 0,
                backgroundColor: '#0187CA'
              },
              headerTintColor: 'white',

              
        }
    }
    },
  
  
});

const SettingsTab = createStackNavigator({
  Settings:{
    screen:Settings,
    navigationOptions:({navigation}) => {
       
      return{
          headerStyle: {
            
              borderBottomWidth: 0,
              backgroundColor: '#0187CA'
            },
            headerTintColor: 'white',
            headerTitle: () => <Header navigation={navigation} title='Settings'/>
       
      }
  }
},
Groups:{
    screen:Groups,
    navigationOptions:({navigation}) => {
       
      return{
        headerStyle: {  
            borderBottomWidth: 0,
            backgroundColor: '#0187CA'
          },
          headerTintColor: 'white',
          headerTitle: () => <Header navigation={navigation} title='Settings'/>
     
    }
    }
},
Tags:{
    screen:Tags,
    navigationOptions:({navigation}) => {
       
      return{
        headerStyle: {
          
            borderBottomWidth: 0,
            backgroundColor: '#0187CA'
          },
          headerTintColor: 'white',
          headerTitle: () => <Header navigation={navigation} title='Settings'/>
        
    }
    }
  
},
Agents:{
    screen:Agents,
    navigationOptions:({navigation}) => {
       
      return{
        headerStyle: {
          
            borderBottomWidth: 0,
            backgroundColor: '#0187CA'
          },
          headerTintColor: 'white',
          headerTitle: () => <Header navigation={navigation} title='Settings'/>
         
    }
    }
   
},
Category:{
  screen:Category,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
    
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='Category'/>
     
  }
  }

},
AddCategory:{
  screen:AddCategory,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
     
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='AddCategory'/>

  }
  }

},
AddGroup:{
  screen:AddGroup,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
     
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='AddGroup'/>
     
  }
  }

},
AddAgents:{
  screen:AddAgents,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {

          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='AddAgents'/>
        
  }
  }

},
CannedResponse:{
    screen:CannedResponse,
    navigationOptions:({navigation}) => {
       
      return{
        headerStyle: {
      
            borderBottomWidth: 0,
            backgroundColor: '#0187CA'
          },
          headerTintColor: 'white',
          headerTitle: () => <Header  navigation={navigation} title='Settings'/>
     
    }
    }
  
},
AddCannedResponse:{
  screen:AddCannedResponse,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
 
          
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='AddCannedResponse'/>

  }
  }

},
});

const Tabs = createBottomTabNavigator({
  
    Home:{  
      screen:HomeTab,  
      navigationOptions:{  
        tabBarLabel:'Home',  
        tabBarIcon:( 
            <Icon name="home" color='#c7c5c5' size={20}/>
        )  ,
        tabBarOptions: {

          style: {
             backgroundColor: '#f5f5f5',
              height: 55,
              borderTopColor: '#c7c5c5',
              borderTopWidth: 1,
              paddingRight: 10,
              paddingLeft: 10,
              borderTopWidth: 1,
            
          },
          showLabel: false,


       showIcon : true,
      },
      }  
    },
     Analytics: {
      screen:AnalyticsTab,
      navigationOptions:{
        tabBarLabel:'Profile',
        tabBarIcon:(
            <Icon name="chart" color='#c7c5c5' size={20}/>
        )  ,
        tabBarOptions: {

          style: {
             backgroundColor: '#f5f5f5',
              height: 55,
              borderTopColor: '#c7c5c5',
              borderTopWidth: 1,
              paddingRight: 10,
              paddingLeft: 10,
              borderTopWidth: 1,
            
          },
          showLabel: false,


       showIcon : true,
      },
      }
    },
     Notification: {
      screen:NotificationTab,
      navigationOptions:{
        tabBarLabel:'Notification',
        tabBarIcon:(
            <Icon name="bell" color='#c7c5c5' size={20}/>
        )  ,
        tabBarOptions: {

          style: {
              backgroundColor: '#f5f5f5',
              height: 55,
              borderTopColor: '#c7c5c5',
              borderTopWidth: 1,
              paddingRight: 10,
              paddingLeft: 10,
              borderTopWidth: 1,
             
          },
          showLabel: false,


       showIcon : true,
      },
      }
    },
    Settings: {
      screen:SettingsTab,  
      navigationOptions:{  
        tabBarLabel:'Profile',  
        tabBarIcon:(  
            <Icon name="settings" color='#c7c5c5' size={20}/>
        )  ,
        tabBarOptions: {

          style: {

              height: 55,
              borderTopColor: '#c7c5c5',
              borderTopWidth: 1,
              paddingRight: 10,
              paddingLeft: 10,
              borderTopWidth: 1,
            
          },
          showLabel: false,


       showIcon : true,
      },
      }  
    },  
    


});

export default createAppContainer(Tabs);

