import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { styles } from '../styles/loginStyles' 
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  ScrollView,
  StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { validateEmail, validatePassword } from "../utils/validator";
import { loginCall, isAuthenticated } from "../utils/Authenticator";
  function Login({navigation}) {
    const [data, setData] = React.useState({
   
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
  });
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
    if(username != '')
    {
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
  }
  else
  {
    if(username == '')
    {
      setuserError('Enter  Email id ')
    }
    else
    {
      setpassError("Enter  password")
    }
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
    <StatusBar backgroundColor='#0187CA' barStyle="light-content"/>
  <View style={styles.header}>
      <Text style={styles.text_header}>Login</Text>
  </View>
  <Animatable.View 
      animation="fadeInUpBig"
      style={styles.footer}
  >
      <ScrollView>
      <Text style={styles.text_footer}>Username</Text>
      <View style={styles.action}>
          <FontAwesome 
              name="user-o"
              color="#05375a"
              size={20}
          />
          <TextInput 
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={username => setUsername(username)}
          />
          {data.check_textInputChange ? 
          <Animatable.View
              animation="bounceIn"
          >
              <Feather 
                  name="check-circle"
                  color="green"
                  size={20}
              />
          </Animatable.View>
          : null}
      </View>
      <Text style={styles.Error} >{userError}</Text>
      <Text style={[styles.text_footer, {
          marginTop: 35
      }]}>Password</Text>
      <View style={styles.action}>
          <Feather 
              name="lock"
              color="#05375a"
              size={20}
          />
          <TextInput 
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={password => setPassword(password)}
          />
          <TouchableOpacity
           
          >
              {data.secureTextEntry ? 
              <Feather 
                  name="eye-off"
                  color="grey"
                  size={20}
              />
              :
              <Feather 
                  name="eye"
                  color="grey"
                  size={20}
              />
              }
          </TouchableOpacity>
      </View>
      <Text style={styles.Error} >{pwdError}</Text>

      <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
              By signing up you agree to our
          </Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
          <Text style={styles.color_textPrivate}>{" "}and</Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
      </View>
      <View style={styles.button}>
          <TouchableOpacity
              style={styles.signIn}
              onPress={() => {}}
          >
          <Text style={[styles.textSign, {
                  color:'#fff'
              }]}>Sign Up</Text>
           </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit}
              style={[styles.signIn, {
                  borderColor: '#0187CA',
                  borderWidth: 1,
                  marginTop: 15
              }]}
          >
              <Text style={[styles.textSign, {
                  color: '#0187CA'
              }]}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Navigate}>
          
          <Text style={styles.color_textPrivate}>
              Signup
          </Text>
          </TouchableOpacity>
         
     
      </View>
      </ScrollView>
  </Animatable.View>
</View>
);
  
}

export default Login