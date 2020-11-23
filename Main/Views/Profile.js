import React from 'react';
import {ScrollView ,TouchableOpacity,Title,Text,View,Image} from 'react-native';
// import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import {styles} from '../Styles/profileStyles'
import { Dimensions } from 'react-native';
import ProfileAbout from './ProfileAbout'
import ProfileStatus from './ProfileStatus'
// const initialLayout = { width: Dimensions.get('window').width };
function Profile ({navigation}){
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'About', title: 'About' },
  //   { key: 'Password', title: 'Password' },
  //   { key: 'Status', title: 'Status' },
  // ]);


  // const renderTabBar = props => (
  //   <TabBar
  //     {...props}
  //     labelStyle={{color: '#888', fontSize: 14}}
  //     indicatorStyle={{ backgroundColor: '#0187CA',color:"#888" }}
  //     style={{ backgroundColor: 'none',color:"#888" }}
  //   />
  // );
   
  // const renderScene = SceneMap({
  //   About: ProfileAbout,
  //   Password: ProfilePassword,
  //   Status:ProfileStatus
  // });
 

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
