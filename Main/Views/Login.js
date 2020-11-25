import React, { useState, useEffect } from "react";
import { Text,Image,TouchableOpacity, View , TextInput} from 'react-native';
import { styles } from '../Styles/styles' 
import { loginCall, isAuthenticated } from "../utils/Authenticator";
  function Login({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const login = () => {
    navigation.navigate("Dashboard")
  }
  const signup = () => {
    navigation.navigate("Signup")
  }
  const handleChange = () =>
  {

  }
   return (

        <View style={styles.container}>
       <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../images/nash_logo.svg')}/>
      </View>
             
        <View style={styles.inputView} >
                    
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText = {handleChange}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText = {handleChange}
        />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={login}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginSignup} onPress={signup}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  
}

export default Login