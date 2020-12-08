import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const AuthNavigator = createStackNavigator(
{
Login:{screen:Login},
Signup:{screen:Signup}

}
,
{
    initialRouteName:'Login',
    headerMode:'none'
    // mjm
    }
)

export default createAppContainer(AuthNavigator)

