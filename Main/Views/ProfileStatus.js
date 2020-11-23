import React from 'react';
import {ScrollView,TouchableOpacity ,Text,View,Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import {Title} from 'react-native-paper';
import {styles} from '../Styles/profileStyles'
import { Dimensions } from 'react-native';
import ProfileAbout from './ProfileAbout'
import ProfilePassword from './ProfilePassword'
const initialLayout = { width: Dimensions.get('window').width };
function ProfileStatus (){


    return (
      <ScrollView>
                <View> 
                <View>
                <Title style={styles.title}>Your plan expires on</Title>
                </View>
                <View style={styles.bodyStatus}>
                    <View style={{paddingLeft:55}}>
                        <Title style={styles.titleExpire}> 31 December 2020</Title>
                    </View>
                </View>
            </View>
      </ScrollView >
    );

}


export default ProfileStatus;
