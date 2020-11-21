import  React from 'react';
import { View,TouchableOpacity } from 'react-native';
import {styles} from '../Styles/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const NavigationDrawerStructure = ({navigation})=> {
    const openMenu = () => {
        navigation.openDrawer();
    };
    
    return (
      <View  style={{flexDirection:'row'}}> 
        <View  style={styles.NavView}>
          <View  style={styles.NavDirection}>
            <View style={styles.NavCoulmn}>
            <TouchableOpacity  onPress={openMenu}>
            <Icon 
                                name="menu" 
                                color='#fff'
                                size={30}
                              
                               / >
            </TouchableOpacity>
            </View> 
      
         
          </View>
          </View>
    
        </View>
    );
  }
  export default NavigationDrawerStructure;