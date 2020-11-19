import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Views/Dashboard';
import MessageMemmo from '../Views/MessageMemmo';
import onlineAgents from '../Views/onlineAgents';
import NavigationDrawerStructure from './Navstructure'
import Task from './Task'
import Leader from './Leader'
import SettingsStack from './SettingsStack'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({ navigation }) {
  
  return (
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: "#fff", //Set Header color
            },
            headerTintColor: '#282c3f', //Set Header text color
            headerTitleStyle: {
              
              paddingBottom: 10,
              paddingLeft:30,
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="MessageMemmo"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#fff", //Set Header color
        },
        headerTintColor: '#282c3f', //Set Header text color
        headerTitleStyle: {
          
          paddingBottom: 10,
          paddingLeft:30,
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="MessageMemmo"
        component={MessageMemmo}
        options={{
          title: 'Message Memo', //Set Header Title
        }}/>
   </Stack.Navigator>
  );
}
function AgentsScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="onlineAgents"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#fff", //Set Header color
        },
        headerTintColor: '#282c3f', //Set Header text color
        headerTitleStyle: {
          
          paddingBottom: 10,
          paddingLeft:30,
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="onlineAgents "
        component={onlineAgents}
        options={{
          title: 'Online Agents', //Set Header Title
        
        }}/>
   </Stack.Navigator>
  );
}
function LeaderScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="leader"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#fff", //Set Header color
        },
        headerTintColor: '#282c3f', //Set Header text color
        headerTitleStyle: {
          
          paddingBottom: 10,
          paddingLeft:30,
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="leader "
        component={Leader}
        options={{
          title: 'Leadership Board', //Set Header Title
        
        }}/>
   </Stack.Navigator>
  );
}
function TaskScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Task"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#fff", //Set Header color
        },
        headerTintColor: '#282c3f', //Set Header text color
        headerTitleStyle: {
          
          paddingBottom: 10,
          paddingLeft:30,
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Task "
        component={Task}
        options={{
          title: 'Task', //Set Header Title
        
        }}/>
   </Stack.Navigator>
  );
}
function SettingsScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: "#fff", //Set Header color
        },
        headerTintColor: '#282c3f', //Set Header text color
        headerTitleStyle: {
          
          paddingBottom: 10,
          paddingLeft:30,
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Settings "
        component={SettingsStack}
        options={{
          title: 'Settings', //Set Header Title
        
        }}/>
   </Stack.Navigator>
  );
}
function Home() {
  return (
  
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#13636485',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Dashboard"
          options={{ drawerLabel: 'Dashboard' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="MessageMemmo"
          options={{ drawerLabel: 'Message Memo' }}
          component={secondScreenStack} />
        <Drawer.Screen
          name="onlineAgents"
          options={{ drawerLabel: 'Online Agents' }}
          component={AgentsScreenStack} />
        <Drawer.Screen
          name="Leader"
          options={{ drawerLabel: 'Leadership Board' }}
          component={LeaderScreenStack} />  
         <Drawer.Screen
          name="Task"
          options={{ drawerLabel: 'Task' }}
          component={TaskScreenStack} />  
        <Drawer.Screen
          name="Settings"
          options={{ drawerLabel: 'Settings' }}
          component={SettingsScreenStack} />  
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Home;