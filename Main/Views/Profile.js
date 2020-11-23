import React from 'react';
import {ScrollView,TouchableOpacity ,Text,View,Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import {Title} from 'react-native-paper';
import {styles} from '../Styles/profileStyles'
import { Dimensions } from 'react-native';
import ProfileAbout from './ProfileAbout'
import ProfilePassword from './ProfilePassword'
import ProfileStatus from './ProfileStatus'
const initialLayout = { width: Dimensions.get('window').width };
function Profile (){
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'About', title: 'About' },
    { key: 'Password', title: 'Password' },
    { key: 'Status', title: 'Status' },
  ]);


  const renderTabBar = props => (
    <TabBar
      {...props}
      labelStyle={{color: '#888', fontSize: 14}}
      indicatorStyle={{ backgroundColor: '#0187CA',color:"#888" }}
      style={{ backgroundColor: 'none',color:"#888" }}
    />
  );
   
  const renderScene = SceneMap({
    About: ProfileAbout,
    Password: ProfilePassword,
    Status:ProfileStatus
  });
 

    return (
      <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.canvasBody}>
                <View style={styles.ProfileBody}> 
                    <Image style={styles.ProfileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <Text style={styles.Profilename}>Jenifer Lopus</Text>
                </View>
                <View  style={styles.ProfileRender}>
                <TabView
                      renderTabBar={renderTabBar}
                      navigationState={{ index, routes }}
                      renderScene={renderScene}
                      onIndexChange={setIndex}
                      initialLayout={initialLayout}
                />
           </View>
          </View>
      </ScrollView >
    );

}


export default Profile;
