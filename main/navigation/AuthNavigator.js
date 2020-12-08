import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import AppNavigator from './AppNavigation'
const AuthNavigator = createStackNavigator(
{
Login:{screen:Login},
Signup:{screen:Signup},
Home:{screen:AppNavigator}
}
,
{
    initialRouteName:'Login',
    headerMode:'none'
  
    }
)

export default createAppContainer(AuthNavigator)

