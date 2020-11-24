import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../Styles/settingsStyles'

function SettingsBlock (props){

    return (
        <TouchableOpacity   onPress={() => props.navigate(props.destination) } >
        <View style={styles.settingsCardBox} >
          
        <View >
            <Icon  name={props.icon} size={40} color='rgb(1, 135, 202)'   type={props.type}/>
           
        </View>
        <View >
          <Text >{props.title}</Text>
        </View>
        
      </View>

      </TouchableOpacity>
  
    );

}

export default SettingsBlock;



