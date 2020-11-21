import React from 'react';
import {StyleSheet, ScrollView ,Text,View,Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import {Title} from 'react-native-paper';
import {styles} from '../Styles/profileStyles'
import { Dimensions } from 'react-native';
const About = () => (
  <View style={styles.ProfileAboutBody}>
  
    <View style={styles.ProfileContentInside}>
        <View style={styles.PrfileFileds}>
           
            <Icon style={styles.PrfileIcon} name='phone'   color={'#0187CA'}/>  
           
             
            <Title style={styles.Prfiletext}>98989748</Title>
         
        </View>
        <View style={styles.PrfileFileds}>
           
            <Icon style={styles.PrfileIcon} name='home'   color={'#0187CA'}/>  
         
             
            <Title  style={styles.Prfiletext}>st josphp nhoi chrush bushvilla</Title>
          
        </View>
        <View style={styles.PrfileFileds}>
           
            <Icon style={styles.PrfileIcon} name='city'   color={'#0187CA'}/>  
          
             
            <Title  style={styles.Prfiletext}>Amtredam</Title>
            
        </View>
        <View style={styles.PrfileFileds}>
           
            <Icon style={styles.PrfileIcon} name='globe-model'   color={'#0187CA'}/>  
         
          
            <Title  style={styles.Prfiletext}>Uk</Title>
          
        </View>
   
            <View style={styles.PrfileFileds}>

                        <Button
              // onPress={onPressLearnMore}
              style={{paddingLeft:50}}
              title="Edit"
              color="orange"
              accessibilityLabel="Learn more about this purple button"
            />

            </View>
    </View>
    </View>
);
 
const Password = () => (
  <View> 
   
   <Button
              // onPress={onPressLearnMore}
              style={{paddingLeft:50}}
              title="Change Password"
              color="orange"
              accessibilityLabel="Learn more about this purple button"
            />
</View>
);
const Status = () => (
  // <View style={{flexDirection:'row',alignItems: 'center', flex:1,height:200,alignContent:'center'}}>
 <View> 
   <View><Title style={styles.title}>Your plan expires on</Title></View>
   
 <View style={styles.bodyStatus}>
  <View style={{paddingLeft:55}}>
      <Title style={styles.titleExpire}> 31 December 2020</Title>
    
    

  </View>
  </View>
</View>
);
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
    About: About,
    Password: Password,
    Status:Status
  });
 

    return (
      <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.canvasBody}>
                <View style={styles.ProfileBody}> 
                    <Image style={styles.ProfileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <Text style={styles.Profilename}>Jenifer Lopus</Text>
                </View>
                <TabView
                      renderTabBar={renderTabBar}
                      navigationState={{ index, routes }}
                      renderScene={renderScene}
                      onIndexChange={setIndex}
                      initialLayout={initialLayout}
                />
           
          </View>
      </ScrollView >
    );

}


export default Profile;
