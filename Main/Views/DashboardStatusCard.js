import React from 'react';
import {styles} from '../Styles/dasboardStyles'
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function DashboardStatusCard (props){
    return (
      <View style={styles.statusContent}>
        <View style={styles.statusCardBox} >
        <Icon
        style={{paddingTop:4,}}
                            name="group"
                            color='#FFAE42'
                            size={20}

                            />
                             <Text style={{fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
                              alignItems: 'center', alignSelf:'center'}}>80</Text>
        <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    </View>
    );

}


export default DashboardStatusCard;



