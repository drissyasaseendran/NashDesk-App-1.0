import React from 'react';
import {styles} from '../main/styles/dasboardStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {  TouchableOpacity,Text, View, Animated, } from 'react-native';

const AnimatedHeader = ({ navigation,offset }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const HEADER_MIN_HEIGHT = 100;
  const HEADER_MAX_HEIGHT = 200;
  const headerHeight = offset.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    });

  const headerBackgroundColor = offset.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: ['#0187CA', '#0187CA'],
      extrapolate: 'clamp'
    });
  return (
    <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
      
            <TouchableOpacity  style={styles.NavCoulmn} onPress={openMenu}>
            <Icon name="menu" color='#fff' size={30}                        
                               / >
            </TouchableOpacity>
            
      
    <Text style={styles.headerText}>Dashboard</Text>
       <View style={styles.Animatedcontainer}>
    <View style={styles.first} />
    <View  style={{flexDirection:'row'}}> 
        <View  style={styles.NavView}>
          <View  style={styles.NavDirection}>
          
         
          </View>
          </View>
    
        </View>
  </View>
 </Animated.View>
  );
};

export default AnimatedHeader;