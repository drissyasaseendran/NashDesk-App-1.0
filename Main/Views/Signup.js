import React from 'react'
import { Text,Image,TouchableOpacity, View , TextInput} from 'react-native';
import { styles } from '../Styles/styles' 
  function Signup({navigation}) {
 
  const login = () => {
    navigation.navigate("Dashboard")
  }
  const signup = () => {
    navigation.navigate("Signup")
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
            />
        </View>
               
        <View style={styles.inputView} >
                    
          <TextInput  
            style={styles.inputText}
            placeholder="Company Name" 
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
          <Text style={styles.forgot}>Already have an account?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={login}>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginSignup} onPress={signup}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  
}

export default Signup