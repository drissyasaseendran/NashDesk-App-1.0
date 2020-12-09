import { createSwitchNavigator ,createAppContainer} from 'react-navigation';
import AuthNavigator from './AuthNavigator'
import AppNavigator from './AppNavigation'
const SwitchNavigator = createSwitchNavigator(
{
    // Auth:AuthNavigator,
    App:AppNavigator
},
{
    // initialRouteName:'Auth',
})
export default createAppContainer(SwitchNavigator)

