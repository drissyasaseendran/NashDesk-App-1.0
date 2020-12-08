import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import SettingStack from '../navigation/SettingStack'
import Home from '../navigation/HomeStack'
import Sidebar from './SideBar'
const AppNavigator = createDrawerNavigator({
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
export default createAppContainer(AppNavigator)

