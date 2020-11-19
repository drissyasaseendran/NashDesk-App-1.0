import React, { useState ,useEffect} from 'react'
import { Text,Image,TouchableOpacity, View ,Alert, Button, TextInput, StyleSheet} from 'react-native';
import { styles } from '../Styles/styles' 
  function login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    navigation.navigate("Dashboard")
  }
    return (

      <View style={styles.container}>
        {/* <Image  style={styles.image} source = {require('../../assets/Logo.png')} /> */}
         {/* <Text style={styles.login}>Login</Text> */}
         <TextInput  
           value={email}
           
           onChange={e => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
          />
        <TextInput
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder={'Password'}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={login}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
       </TouchableOpacity>
       </View>
       
    );
  
}

export default login