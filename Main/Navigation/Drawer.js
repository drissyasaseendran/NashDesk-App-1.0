import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import SettingStack from '../Navigation/SettingStack'
import Home from '../Navigation/HomeStack'
import Login from './LoginStack'
import Sidebar from './SideBar'
const DrawNavigator = createDrawerNavigator({
  //  Login:
  //  {
  //   screen:Login,
  //  },
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

