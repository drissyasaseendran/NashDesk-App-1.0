import React, { useState ,useEffect} from 'react'
import { Text,Image,TouchableOpacity, View ,Alert, Button, TextInput, StyleSheet} from 'react-native';
import { styles } from '../Styles/styles' 
  function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    navigation.navigate("Dashboard")
  }
  const signup = () => {
    navigation.navigate("Signup")
  }
   return (

        <View style={styles.container}>
        <View style={styles.logo}><Image source={require('../../images/nash_logo.svg')} /></View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
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