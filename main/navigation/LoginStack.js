import { createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../views/Login'
import Signup from '../views/Signup'


const LoginStack = createStackNavigator({
  
   Login: {
        screen: Login,
        navigationOptions: {
            title: 'Home',
            header: null //this will hide the header
          },
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: 'Home',
            header: null //this will hide the header
          },
    },

  
});



export default LoginStack


