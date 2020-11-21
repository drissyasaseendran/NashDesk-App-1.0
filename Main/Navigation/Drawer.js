import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import SettingStack from '../Navigation/SettingStack'
import Home from '../Navigation/HomeStack'
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

