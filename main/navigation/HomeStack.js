import { createAppContainer, } from 'react-navigation'
import { createBottomTabNavigator, } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import Profile from '../views/Profile'
import React from 'react'
import Settings from '../views/Settings'
import Groups from  '../views/Settings/Groups'
import Agents from  '../views/Settings/Agents'
import Tags from  '../views/Settings/Tags'
import Header from './HeaderMenu'
import CannedResponse from '../views/Settings/CannedResponse'
import Leader from '../views/LeaderShip'
import MessageMemo from '../views/MessageMemmo'
import Category from '../views/Settings/Category'
import AgentEdit from '../views/Settings/AgentEdit'
import GroupView from '../views/Settings/GroupView'
import Analytics from '../views/Analytics'
import Notification from '../views/Settings/Notification'
import ProfileUpdate from '../views/ProfileUpdate'
import ProfileAbout from '../views/ProfileAbout'
import CategoryAdd from '../views/Settings/CategoryAdd'
import CannedResponseAdd from '../views/Settings/CannedResponseAdd'

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
    // Login: {
    //     screen: Login,
    //     navigationOptions: {
    //         title: 'Home',
    //         header: null //this will hide the header
    //       },
    // },
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
          // headerTitle: () => <Header navigation={navigation} title='Settings'/>
     
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
          // headerTitle: () => <Header navigation={navigation} title='Settings'/>
        
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
          // headerTitle: () => <Header navigation={navigation} title='Settings'/>
         
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
        // headerTitle: () => <Header navigation={navigation} title='Settings'/>
       
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

