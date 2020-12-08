import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import SettingStack from '../navigation/SettingStack'
import Home from '../navigation/HomeStack'
import Login from './LoginStack'
import Sidebar from './SideBar'
const DrawNavigator = createDrawerNavigator({
 
    Home:
      {
          screen:Home,
          
      },
  
      Settings:
    {
        screen:SettingStack
    },
    
},
{
    contentComponent: Sidebar,
    drawerWidth: 300
  }

)

export default createAppContainer(DrawNavigator)

