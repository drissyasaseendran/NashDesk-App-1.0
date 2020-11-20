import React from 'react';
import {styles} from '../Styles/dasboardStyles'
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function DashboardStatusCard (props){
    return (
      <View style={styles.statusContent}>
        <View style={styles.statusCardBox} >
          <View style={styles.statusContentinside}>
              <Icon name={props.icon} style={styles.statusIcon}/>
              <Text style={styles.statusText}>{props.count}</Text>
          </View>
          <View style={styles.statusTitlebody}>
            <Text style={styles.statusTitle}>{props.title}</Text>
          </View>
         
        </View>
    </View>
    );

}


export default DashboardStatusCard;



