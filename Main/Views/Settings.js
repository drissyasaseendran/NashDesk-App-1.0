import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../Styles/settingsStyles'
import SettingsBlock from './SettingsBlock'
function Settings ({navigation}){

    return (
      <View >
            <View style={styles.header}></View>
            <View style={styles.heading}>
              <Text style={styles.headingTitle}>Settings</Text>
            </View>
            <View style={styles.canvasBody}>
                  <View style={styles.settingsBody}>
                    < SettingsBlock icon="account-group" title="Groups" destination="Groups"  navigate={navigation.navigate} />
                    < SettingsBlock icon="message-reply-text" title="Agent" destination="Agents"  navigate={navigation.navigate} />
                    < SettingsBlock icon="account-star-outline" title="Tag" destination="Tag"  navigate={navigation.navigate} />
                    < SettingsBlock icon="account-group" title="Canned Response" destination="cannedresponse"  navigate={navigation.navigate} />
                    < SettingsBlock icon="account-star-outline" title="Category" destination="category" navigate={navigation.navigate}/>
                    < SettingsBlock icon="account-group" title="Profile" destination="Profile" navigate={navigation.navigate}/>
                    </View>
               


            </View>

      </View>
    );

}

export default Settings;



