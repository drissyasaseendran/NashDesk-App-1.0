import React from 'react';
import {TouchableOpacity ,View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title} from 'react-native-paper';
import {styles} from '../Styles/profileStyles'

function ProfileAbout (props){

    return (
                    <View style={styles.ProfileFileds}>
                        <Icon style={styles.PrfileIcon} name={props.Icon}   color={'#0187CA'}/>  
                        <Title style={styles.Prfiletext}>{props.Feilds}</Title>
                    </View>
             
    );

}


export default ProfileAbout;
