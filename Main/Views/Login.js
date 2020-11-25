import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text,Image,TouchableOpacity, View , TextInput} from 'react-native';
import { styles } from '../Styles/styles' 
import { setLogout } from "../states/login/loginAction"
import { loginCall, isAuthenticated } from "../utils/Authenticator";
  function Login({navigation}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fresh, setFresh] = useState({
    username: true,
    password: true,
  });
  const [usrErrorCode, setUsrErrorCode] = useState(0);
  const [pwdErrorCode, setPwdErrorCode] = useState(0);
  const loginStatus = useSelector((state) => state.login.status);

  useEffect(() => {
   
    dispatch(setLogout());
  }, [dispatch]);
  useEffect(() => {
    
    switch (loginStatus) {
      case "error":
        setPwdErrorCode(0);
        setLoading(false);
        setNetworkErrorCode(1);
        break;
      case "failed":
        setPwdErrorCode(2);
      
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