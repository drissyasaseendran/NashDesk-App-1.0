import  React from 'react';
import {Text, View,TouchableOpacity,Image } from 'react-native';
import {styles} from '../styles/styles'

// import { Icon } from 'react-native-elements'
const GoBack = ({title})=> {
    
    return (
      <View  style={{flexDirection:'row'}}> 
        <View  style={styles.NavView}>
          <View  style={styles.NavDirection}>
            
            <View style={styles.NavLogoView}>
              {/* <Image
                style={styles.NavLogoImage}
                source={require('../../assets/Logoone.png')}
              /> */}
            
            </View> 
            
            <Text>{title}</Text>
          </View>
          </View>
          
          {/* <View style={styles.NavViewRight}> 
          <View >
            <TouchableOpacity  onPress={onClick}>
            <Icon  name='search'  type='feathericon'/>
            </TouchableOpacity>
          </View> 
          <View >
            <Icon  name='bell-o'  type='font-awesome'/>
          </View>
          
          </View> */}
        </View>
    );
  }
  export default GoBack;