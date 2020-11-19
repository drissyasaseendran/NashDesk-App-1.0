import { createAppContainer, } from 'react-navigation'
import { createBottomTabNavigator, } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Login from '../Views/login'
import {Button } from 'react-native';
import DrawerStack from './drawer'
import Dashboard from '../Views/Dashboard'
import Profile from '../Views/Profile'
import React from 'react'
import Settings from '../Views/Settings'
import Groups from  '../Views/Settings/Groups'
import Agents from  '../Views/Settings/Agents'
import Tags from  '../Views/Settings/Tags'
import Header from '../Views/Navstructure'
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
import GoBack from '../Views/GoBack'
// const StackNavigator = createStackNavigator(
//   {
   
//     Dashboard: {
//       screen: Dashboard,
//       navigationOptions:({navigation}) => {
//         return{
//         headerTitle: () => <Header navigation={navigation} title='Dashboard'/>
//         }
//     }
//     },
 
//     Settings:{
//       screen:Settings,
//       navigationOptions:({navigation}) => {
//           return{
//           headerTitle: () => <Header navigation={navigation} title='Settings'/>
//           }
//       }
//   },
//   Groups:{
//       screen:Groups,
//       navigationOptions:({navigation}) => {
         
//           return{
//               headerStyle: {
//                   // height: '45%',
//                   backgroundColor: '#ffae19'
//                 },
//                 headerTintColor: 'white',
//                 headerLeft: (
//                   <Button onPress={() => navigation.goBack()} title="Back" />
//                 ),
//           headerTitle: () => <GoBack navigation={navigation} title='Group'/>
//           }
//       }
//   },
//   Tags:{
//       screen:Tags,
//       // navigationOptions:({navigation}) => {
//       //     return{
//       //     headerTitle: () => <Header navigation={navigation} title='Tags' />
//       //     }
//       // }
//   },
//   Agents:{
//       screen:Agents,
//       // navigationOptions:({navigation}) => {
//       //     return{
//       //     headerTitle: () => <Header navigation={navigation} title='Agents'/>
//       //     }
//       // }
//   },
//   CannedResponse:{
//       screen:CannedResponse,
//       // navigationOptions:({navigation}) => {
//       //     return{
//       //     headerTitle: () => <Header navigation={navigation} title='CannedResponse'/>
//       //     }
//       // }
//   },
//   },
  
// )
const NotificationTab = createStackNavigator({

  Notification: {
    screen: Notification,
    navigationOptions:({navigation}) => {

      return{
          headerStyle: {
              // height: '45%',
              borderBottomWidth: 0,
              backgroundColor: '#FFAE42'
            },
            headerTintColor: 'white',
            // headerLeft: (
            //   <Button onPress={() => navigation.navigation('Home')} title="Back" />
            // ),
      // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
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
              // height: '45%',
              borderBottomWidth: 0,
              backgroundColor: '#FFAE42'
            },
            headerTintColor: 'white',
            // headerLeft: (
            //   <Button onPress={() => navigation.navigation('Home')} title="Back" />
            // ),
      // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
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
              // height: '45%',
              
              borderBottomWidth: 0,
              backgroundColor: '#FFAE42'
            },
            headerTintColor: 'white',
            headerTitle: () => <Header navigation={navigation} title='Settings'/>
            // headerLeft: (
            //   <Button onPress={() => navigation.goBack()} title="Back" />
            // ),
      // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
      }
    }
  },
    Profile: {
      screen: Profile,
      navigationOptions:({navigation}) => {
       
        return{
            headerStyle: {
                // height: '45%',
                borderBottomWidth: 0,
                backgroundColor: '#FFAE42'
              },
              headerTintColor: 'white',
              // headerLeft: (
              //   <Button onPress={() => navigation.goBack()} title="Back" />
              // ),
        // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
        }
    }
    },
      
   Analytics: {
    screen: Analytics,
    navigationOptions:({navigation}) => {

      return{
          headerStyle: {
              // height: '45%',
              borderBottomWidth: 0,
              backgroundColor: '#FFAE42'
            },
            headerTintColor: 'white',
            // headerLeft: (
            //   <Button onPress={() => navigation.goBack()} title="Back" />
            // ),
      // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
      }
  }
  },
    
   Leader: {
      screen: Leader,
      navigationOptions:({navigation}) => {

        return{
            headerStyle: {
                // height: '45%',
                borderBottomWidth: 0,
                backgroundColor: '#FFAE42'
              },
              headerTintColor: 'white',
              // headerLeft: (
              //   <Button onPress={() => navigation.goBack()} title="Back" />
              // ),
        // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
        }
    }
    },
      MessageMemo: {
      screen: MessageMemo,
      navigationOptions:({navigation}) => {

        return{
            headerStyle: {
                // height: '45%',
                borderBottomWidth: 0,
                backgroundColor: '#FFAE42'
              },
              headerTintColor: 'white',
              // headerLeft: (
              //   <Button onPress={() => navigation.goBack()} title="Back" />
              // ),
        // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
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
              // height: '45%',
              
              borderBottomWidth: 0,
              backgroundColor: '#FFAE42'
            },
            headerTintColor: 'white',
            headerTitle: () => <Header navigation={navigation} title='Settings'/>
            // headerLeft: (
            //   <Button onPress={() => navigation.goBack()} title="Back" />
            // ),
      // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
      }
  }
},
Groups:{
    screen:Groups,
    navigationOptions:({navigation}) => {
       
      return{
        headerStyle: {  
            borderBottomWidth: 0,
            backgroundColor: '#FFAE42'
          },
          headerTintColor: 'white',
          headerTitle: () => <Header navigation={navigation} title='Settings'/>
          // headerLeft: (
          //   <Button onPress={() => navigation.goBack()} title="Back" />
          // ),
    // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
    }
    }
},
Tags:{
    screen:Tags,
    navigationOptions:({navigation}) => {
       
      return{
        headerStyle: {
            // height: '45%',
            
            borderBottomWidth: 0,
            backgroundColor: '#FFAE42'
          },
          headerTintColor: 'white',
          headerTitle: () => <Header navigation={navigation} title='Settings'/>
          // headerLeft: (
          //   <Button onPress={() => navigation.goBack()} title="Back" />
          // ),
    // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
    }
    }
    // navigationOptions:({navigation}) => {
    //     return{
    //     headerTitle: () => <Header navigation={navigation} title='Tags' />
    //     }
    // }
},
Agents:{
    screen:Agents,
    navigationOptions:({navigation}) => {
       
      return{
        headerStyle: {
            // height: '45%',
            
            borderBottomWidth: 0,
            backgroundColor: '#FFAE42'
          },
          headerTintColor: 'white',
          headerTitle: () => <Header navigation={navigation} title='Settings'/>
          // headerLeft: (
          //   <Button onPress={() => navigation.goBack()} title="Back" />
          // ),
    // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
    }
    }
    // navigationOptions:({navigation}) => {
    //     return{
    //     headerTitle: () => <Header navigation={navigation} title='Agents'/>
    //     }
    // }
},
Category:{
  screen:Category,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
          // height: '45%',
          
          borderBottomWidth: 0,
          backgroundColor: '#FFAE42'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='Category'/>
        // headerLeft: (
        //   <Button onPress={() => navigation.goBack()} title="Back" />
        // ),
  // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
  }
  }
  // navigationOptions:({navigation}) => {
  //     return{
  //     headerTitle: () => <Header navigation={navigation} title='Agents'/>
  //     }
  // }
},
AddCategory:{
  screen:AddCategory,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
          // height: '45%',
          
          borderBottomWidth: 0,
          backgroundColor: '#FFAE42'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='AddCategory'/>
        // headerLeft: (
        //   <Button onPress={() => navigation.goBack()} title="Back" />
        // ),
  // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
  }
  }
  // navigationOptions:({navigation}) => {
  //     return{
  //     headerTitle: () => <Header navigation={navigation} title='Agents'/>
  //     }
  // }
},
AddGroup:{
  screen:AddGroup,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
          // height: '45%',
          
          borderBottomWidth: 0,
          backgroundColor: '#FFAE42'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='AddGroup'/>
        // headerLeft: (
        //   <Button onPress={() => navigation.goBack()} title="Back" />
        // ),
  // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
  }
  }
  // navigationOptions:({navigation}) => {
  //     return{
  //     headerTitle: () => <Header navigation={navigation} title='Agents'/>
  //     }
  // }
},
AddAgents:{
  screen:AddAgents,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
          // height: '45%',
          
          borderBottomWidth: 0,
          backgroundColor: '#FFAE42'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='AddAgents'/>
        // headerLeft: (
        //   <Button onPress={() => navigation.goBack()} title="Back" />
        // ),
  // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
  }
  }
  // navigationOptions:({navigation}) => {
  //     return{
  //     headerTitle: () => <Header navigation={navigation} title='Agents'/>
  //     }
  // }
},
CannedResponse:{
    screen:CannedResponse,
    navigationOptions:({navigation}) => {
       
      return{
        headerStyle: {
            // height: '45%',
            
            borderBottomWidth: 0,
            backgroundColor: '#FFAE42'
          },
          headerTintColor: 'white',
          headerTitle: () => <Header  navigation={navigation} title='Settings'/>
          // headerLeft: (
          //   <Button onPress={() => navigation.goBack()} title="Back" />
          // ),
    // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
    }
    }
    // navigationOptions:({navigation}) => {
    //     return{
    //     headerTitle: () => <Header navigation={navigation} title='CannedResponse'/>
    //     }
    // }
},
AddCannedResponse:{
  screen:AddCannedResponse,
  navigationOptions:({navigation}) => {
     
    return{
      headerStyle: {
          // height: '45%',
          
          borderBottomWidth: 0,
          backgroundColor: '#FFAE42'
        },
        headerTintColor: 'white',
        headerTitle: () => <Header navigation={navigation} title='AddCannedResponse'/>
        // headerLeft: (
        //   <Button onPress={() => navigation.goBack()} title="Back" />
        // ),
  // headerTitle: () => <GoBack navigation={navigation} title='Group'/>
  }
  }
  // navigationOptions:({navigation}) => {
  //     return{
  //     headerTitle: () => <Header navigation={navigation} title='Agents'/>
  //     }
  // }
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
              // borderTopColor: grayPlaceHolder
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
              // borderTopColor: grayPlaceHolder
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
              // borderTopColor: grayPlaceHolder
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
//              backgroundColor: '#FFAE42',
              height: 55,
              borderTopColor: '#c7c5c5',
              borderTopWidth: 1,
              paddingRight: 10,
              paddingLeft: 10,
              borderTopWidth: 1,
              // borderTopColor: grayPlaceHolder
          },
          showLabel: false,


       showIcon : true,
      },
      }  
    },  
    

    
  
//   Home: HomeTab,
//   Settings: SettingsTab
// }, 
// {
//   defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: () => {
//           const { routeName } = navigation.state;
//           let tabName;
//           tabName = routeName === 'Green' ? 'home' : 'grid';

//           return <Icon name={tabName} size={20} />
//       }
//   })
});

export default createAppContainer(Tabs);
// export default StackNavigator
