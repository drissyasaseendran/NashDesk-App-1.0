import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from '../styles/styles' 
import { Text,TouchableOpacity, TextInput, View} from 'react-native';
import { setLogout } from "../states/login/loginAction"
import { validateEmail, validatePassword } from "../utils/validator";
import { loginCall, isAuthenticated } from "../utils/Authenticator";
  function Login({navigation}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usrErrorCode, setUsrErrorCode] = useState(0);
  const [pwdErrorCode, setPwdErrorCode] = useState(0);
  const [userError,setuserError] = useState('');
  const [pwdError, setpassError] = useState('');
  const loginStatus = useSelector((state) => state.login.status);
  useEffect(() => {
    validateForm();
  }, [username, password]);
  useEffect(() => {
  
    switch (loginStatus) {
      case "error":
      break;
      case "failed":
      break;
      case "wait":
      break;
      case "success":
      if (isAuthenticated()) {
        navigation.navigate("Dashboard")
      }
      break;
      default:
      break;
    }
  }, [loginStatus]);

  const handleSubmit = () => {
    if(usrErrorCode === 0 && pwdErrorCode === 0)
    { 
      loginCall(username, password)
      setuserError('')
      setpassError('')
    }
    else if(usrErrorCode === 1)
    {
      setuserError('Enter Valid Email id required')
    }
    else if(pwdErrorCode == 1)
    {
      setpassError("Enter Valid password")
    }
  };
  const Navigate = () =>
  {
    navigation.navigate('Signup')
  }

  const validateForm = () => {
    if(username != '')
    {
      validateEmail(username) ? setUsrErrorCode(0):setUsrErrorCode(1)
    }
    if(password != '')
    {
      validatePassword(password) ? setPwdErrorCode(0) :setPwdErrorCode(1)
    }
  }
   return (
    <View style={styles.container}>
          <View style={styles.logoContainer}>
                <Text style={styles.LoginText}>LOGIN</Text>
                {/* <Image style={styles.logo} source={require('../../images/nash_logo.svg')}/> */}
          </View>
          <View style={styles.logoContainer}>
          <TextInput
            keyboardType = 'email-address'
            placeholder='Email'
            style={styles.input}
            placeholderTextColor="#888"
            onChangeText={username => setUsername(username)}
          />
           <Text style={styles.Error} >{userError}</Text>
          </View>
      
           
         
          <View style={styles.logoContainer}>
          <TextInput
            onChangeText={password => setPassword(password)}
            placeholder='Password'
            secureTextEntry={true}
            placeholderTextColor="#888"
            style={styles.input}
          />
           <Text  style={styles.Error}>{pwdError}</Text>
          </View>
     
         
      
          <View style={styles.logoContainer}>
          <TouchableOpacity >
              <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}  onPress={handleSubmit}>
              <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity   onPress={Navigate}>
              <Text style={styles.loginSignup}>Signup</Text>
          </TouchableOpacity>
        </View>
    </View>

    );
  
}

export default Login