import React, { useEffect ,useState} from "react";
import {ScrollView ,TouchableOpacity,Title,Text,View,Image} from 'react-native';
import {styles} from '../styles/profileStyles'
import ProfileAbout from './ProfileAbout'
import ProfileStatus from './ProfileStatus'
import {profileApiPath} from '../endpoints'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'

function Profile ({navigation}){
  const token = getAccessToken()

    useEffect(() => {
        profileView()
       
    },[]);
    const profileView = () =>
    {
        let data =
        {
          "access_token": token ,
          "request_type":"view"
        }
      
        axios.post(profileApiPath, data)
      .then((resp) => {
        alert(JSON.stringify(resp))
        if (resp.data.status === "success") {
            let res = resp.data.payload.data
          
           
          }
      
      })
      }
    return (
      <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.canvasBody}>
                <View style={styles.ProfileBody}> 
                    <Image style={styles.ProfileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <Text style={styles.Profilename} >Jenifer Lopus</Text>
                    <Text style={styles.Profilename}>Jeniferlopus@gmail.com</Text>
                </View>
                <View style={styles.ProfileAboutBody}>
                <View style={styles.ProfileContentInside}>
                <View style={styles.ProfileContent}>
                    <ProfileAbout Icon='phone' Feilds='9879794947964'/>
                    <ProfileAbout Icon='home'  Feilds='st josphp nhoi chrush bushvilla'/>
                    <ProfileAbout Icon='city'  Feilds='Amstredam'/>
                    <ProfileAbout Icon='globe-model' Feilds='Uk'/>
                    <ProfileAbout Icon='globe-model' Feilds='621577'/>
                    <TouchableOpacity style={styles.ProfileContentInside} onPress={() => navigation.navigate('ProfileUpdate')}  >
                      <Text  style={styles.ProfileBtn}>EDIT</Text>      
                    </TouchableOpacity>
                    </View>
                  
                </View>
                
              </View>
                  
                  <ProfileStatus/>
                {/* <TabView
                      renderTabBar={renderTabBar}
                      navigationState={{ index, routes }}
                      renderScene={renderScene}
                      onIndexChange={setIndex}
                      initialLayout={initialLayout}
                /> */}
     
          </View>
      </ScrollView >
    );

}


export default Profile;
