import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from '../styles/styles' 
import { Text, Image,TouchableOpacity, TextInput, View} from 'react-native';
import { setLogout } from "../states/login/loginAction"
import { validateEmail, validatePassword } from "../utils/validator";
import { loginCall, isAuthenticated } from "../utils/Authenticator";
  function Login({navigation}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginStatus = useSelector((state) => state.login.status);
  useEffect(() => {
     dispatch(setLogout());
  }, [dispatch]);
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
  
      loginCall(username, password);
   
  };

  const Navigate = () =>
  {
    navigation.navigate('Signup')
  }
   return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
            <Text style={styles.LoginText}>LOGIN</Text>
            {/* <Image style={styles.logo} source={require('../../images/nash_logo.svg')}/> */}
      </View>
      <TextInput
        keyboardType = 'email-address'
        placeholder='Email'
        style={styles.input}
        placeholderTextColor="#888"
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        onChangeText={password => setPassword(password)}
        placeholder='Password'
        secureTextEntry={true}
        placeholderTextColor="#888"
        style={styles.input}
      />
      <TouchableOpacity>
           <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}  onPress={handleSubmit}>
           <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Navigate}>
           <Text style={styles.loginSignup}>Signup</Text>
      </TouchableOpacity>
    </View>

    );
  
}

export default Login