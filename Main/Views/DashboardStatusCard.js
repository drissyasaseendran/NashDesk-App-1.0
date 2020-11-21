import React from 'react';
import {styles} from '../Styles/dasboardStyles'
import {Text, View} from 'react-native';
import { Icon } from 'react-native-elements'

function DashboardStatusCard (props){
    return (
      <View style={styles.statusContent}>
        <View style={styles.statusCardBox} >
          <View style={styles.statusContentinside}>
              <Icon name={props.icon} size={15} color='rgb(1, 135, 202)' size={25} style={styles.statusIcon} type={props.type}/>
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



