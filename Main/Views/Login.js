import React, { useState, useEffect } from "react";
import { Text,Image,TouchableOpacity, View , TextInput} from 'react-native';
import { styles } from '../Styles/styles' 

  function Login({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {
        navigation.navigate("Login")
    }
    const handleSubmit = () => {
        // loginCall(username, password);
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
            value={username}
            placeholderTextColor="#003f5c"
            onChangeText={username => setUsername(username)}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            value={password}
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={password => setPassword(password)}
        />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}  onPress={handleSubmit}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginSignup}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  
}

export default Login