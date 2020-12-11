import { createAppContainer, } from 'react-navigation'
import { createBottomTabNavigator, } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Dashboard from '../screens/Dashboard'
import Profile from '../screens/Profile'
import React from 'react'
import Settings from '../screens/Settings'
import Groups from  '../screens/Settings/Groups'
import Agents from  '../screens/Settings/Agents'
import Tags from  '../screens/Settings/Tags'
import Header from './HeaderMenu'
import CannedResponse from '../screens/Settings/CannedResponse'
import Leader from '../screens/LeaderShip'
import MessageMemo from '../screens/MessageMemmo'
import Category from '../screens/Settings/Category'
import AgentEdit from '../screens/Settings/AgentEdit'
import GroupView from '../screens/Settings/GroupView'
import GroupAdd from "../screens/Settings/GroupAdd";
import Analytics from '../screens/Analytics'
import Notification from '../screens/Settings/Notification'
import ProfileUpdate from '../screens/ProfileUpdate'
import ProfileAbout from '../screens/ProfileAbout'
import CategoryAdd from '../screens/Settings/CategoryAdd'
import CannedResponseAdd from '../screens/Settings/CannedResponseAdd'
import sample from '../screens/sample'
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

      return {
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
            headerShown: false,
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

    ProfileAbout: {
      screen: ProfileAbout,
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
    ProfileUpdate: {
      screen: ProfileUpdate,
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
   sample: {
        screen: sample,
       
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
          
     
    }
    }
},
GroupView:{
  screen:GroupView,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
     
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        // headerTitle: () => <Header navigation={navigation} title='AddCategory'/>

  }
  }
},
GroupAdd:{
  screen:GroupAdd,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
     
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        // headerTitle: () => <Header navigation={navigation} title='AddCategory'/>

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
          
         
    }
    }
   
},
AgentEdit:{
  screen:AgentEdit,
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
Category:{
  screen:Category,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
    
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        // headerTitle: () => <Header navigation={navigation} title='Category'/>
     
  }
  }

},
CategoryAdd:{
  screen:CategoryAdd,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
    
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        // headerTitle: () => <Header navigation={navigation} title='Category'/>
     
  }
  }

},
CannedResponseAdd:
{
  screen:CannedResponseAdd,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
    
          borderBottomWidth: 0,
          backgroundColor: '#0187CA'
        },
        headerTintColor: 'white',
        // headerTitle: () => <Header navigation={navigation} title='Category'/>
     
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
          // headerTitle: () => <Header  navigation={navigation} title='Settings'/>
     
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

