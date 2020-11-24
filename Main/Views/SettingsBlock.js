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
        <TouchableOpacity  onPress={() => navigation.navigate('Groups')} >
        <View style={styles.settingsCardBox} >
          
        <View >
            <Icon  name={props.icon} size={40} color='rgb(1, 135, 202)'   type={props.type}/>
           
        </View>
        <View >
          <Text >{props.title}</Text>
        </View>
        
      </View>

      </TouchableOpacity>
    //     <View style={styles.settingsContent}>
    //     <TouchableOpacity  onPress={() => navigation.navigate('Groups')} >
    //       <Icon style={styles.settingsIcon}
    //                           name={props.icon}
    //                           color='#0187CA'
    //                           size={50}

    //                           />
    //       <Text >{props.title}</Text>
    //       </TouchableOpacity>
    //   </View>
    );

}

export default SettingsBlock;



