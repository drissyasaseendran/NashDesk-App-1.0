import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../Styles/settingsStyles'
import SettingsBlock from './SettingsBlock'
function Settings ({navigation}){

    return (
      <ScrollView >
            <View style={styles.header}></View>
            <View style={styles.heading}>
              <Text style={styles.headingTitle}>Settings</Text>
            </View>
            <View style={styles.canvasBody}>
                  <View style={styles.settingsBody}>
                    < SettingsBlock icon="account-group" title="Groups"/>
                    < SettingsBlock icon="message-reply-text" title="Agent"/>
                    < SettingsBlock icon="account-star-outline" title="Tag"/>
                    < SettingsBlock icon="account-group" title="Canned Response"/>
                    < SettingsBlock icon="account-star-outline" title="Category"/>
                    < SettingsBlock icon="account-group" title="Profile"/>
                    </View>
               


            </View>

      </ScrollView>
    );

}

export default Settings;



