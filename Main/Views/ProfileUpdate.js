import React from 'react';
import {TouchableOpacity ,View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title} from 'react-native-paper';
import {styles} from '../Styles/profileStyles'

function ProfileUpdate (){

    return (
      <View style={styles.ProfileAboutBody}>
      <View style={styles.ProfileContentInside}>
       <View style={styles.ProfileContent}>
           <View style={styles.ProfileFileds}>
               <Icon style={styles.PrfileIcon} name='phone'   color={'#0187CA'}/>  
               <Title style={styles.Prfiletext}>98989748</Title>
           </View>
           <View style={styles.ProfileFileds}>
               <Icon style={styles.PrfileIcon} name='home'   color={'#0187CA'}/>  
               <Title  style={styles.Prfiletext}>st josphp nhoi chrush bushvilla</Title>
           </View>
           <View style={styles.ProfileFileds}>
               <Icon style={styles.PrfileIcon} name='city'   color={'#0187CA'}/>  
               <Title  style={styles.Prfiletext}>Amtredam</Title>
           </View>
           <View style={styles.ProfileFileds}>
               <Icon style={styles.PrfileIcon} name='globe-model'   color={'#0187CA'}/>  
               <Title  style={styles.Prfiletext}>Uk</Title>
           </View>
           <View style={styles.ProfileFileds}>
               <Icon style={styles.PrfileIcon} name='globe-model'   color={'#0187CA'}/>  
               <Title  style={styles.Prfiletext}>1245487</Title>
           </View>
           <TouchableOpacity style={styles.ProfileContentInside} >
          <Title  style={styles.ProfileBtn}>EDIT</Title>      
        </TouchableOpacity>
           </View>
        
       </View>
      
     </View>
    );

}


export default ProfileUpdate;
