import  React from 'react';
import {Text, View,TouchableOpacity,Image } from 'react-native';
import {styles} from '../Styles/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Icon } from 'react-native-elements'
const NavigationDrawerStructure = ({navigation,title})=> {
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
            {/* <View style={styles.NavLogoView}> */}
           {/* <Text style={{padding:8}}>
              <Image
               style={{height:50,width:50}}
                source={require('../../assets/Logoone.png')}
              /></Text> */}
           {/* <Text  style={{paddingTop:25,fontSize:16}}>  {title}</Text> */}
            {/* </View>  */}
            
         
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
  export default NavigationDrawerStructure;