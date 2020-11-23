import React from 'react';
import {ScrollView,TouchableOpacity ,Text,View,Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import {Title} from 'react-native-paper';
import {styles} from '../Styles/profileStyles'
import { Dimensions } from 'react-native';

const initialLayout = { width: Dimensions.get('window').width };
function ProfileStatus (){


    return (
     
                <View style={styles.ProfileStatusContent}>
                        <Title style={styles.ProfileStatustitle}>Your plan expires on</Title>
                        <Title style={styles.ProfiletitleExpire}> 31 December 2020</Title>
                </View>
   
    );

}


export default ProfileStatus;
