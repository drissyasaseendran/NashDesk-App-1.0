

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,Button,TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {

    Avatar,
    Title,
    Caption,


} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const About = () => (
  <View style={styles.bodyContent}>

  <View style={{flexDirection:'row',alignItems: 'center', flex:1,height:500}}>

              <Icon name='phone' size={40} color={'orange'}/>
                <Title style={{paddingLeft:55, flexDirection:'column',width:300}}>9874884777</Title>
               


        </View>

        <View style={{flexDirection:'row',alignItems: 'center', flex:1,height:200}}>

          <Icon name='home' size={40} color={'orange'}/>
            <Title style={{paddingLeft:55, flexDirection:'column',width:300}}>st josphp nhoi chrush bushvilla</Title>
          


          </View>

        
          <View style={{flexDirection:'row',alignItems: 'center', flex:1,height:200}}>

          <Icon name='city' size={40} color={'orange'}/>
            <Title style={{paddingLeft:55, flexDirection:'column',width:300}}>Amsterdam</Title>



          </View>
          <View style={{flexDirection:'row',alignItems: 'center', flex:1,height:200}}>

            <Icon name='city' size={40} color={'orange'}/>
              <Title style={{paddingLeft:55, flexDirection:'column',width:300}}>UK</Title>



            </View>
            <View style={{flexDirection:'row',alignItems: 'center', flex:1,height:200}}>

                        <Button
              // onPress={onPressLearnMore}
              style={{paddingLeft:50}}
              title="Edit"
              color="orange"
              accessibilityLabel="Learn more about this purple button"
            />

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
 
  const renderScene = SceneMap({
    About: About,
    Password: Password,
    Status:Status
  });
 

    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
            <View style={styles.avatarHeading}><Text style={styles.HeaderTitle}>Leadership Board</Text></View>
            <View style={styles.avatar}>

            <Image style={styles.avatarImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <View style={{ top: 0, left: 0,
            right: 0, bottom: 130,
            justifyContent: 'center',
            alignItems: 'center',padding:50}}><Text style={{fontSize:20}}>Jenifer Lopus</Text></View>
            
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                activeColor='orange'indicatorStyle={{ backgroundColor:'rgb(0,144,209)', height: 5}}
                style={{
           
                }}indicatorStyle={{ backgroundColor: 'orange' }}
                // style={{ backgroundColor: 'pink' }}
                
                onIndexChange={setIndex}
                initialLayout={initialLayout}
              />
           
        </View>
      </View>
    );

}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#FFAE42",
    height:200,
  },
  avatarHeading: {
    top: 0, left: 0,
    right: 0, bottom: 130,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',

},
HeaderTitle:
{

  color:'#fff',
  // fontWeight: 'bold',
  fontSize: 30,
},
  avatar: {
   width: windowWidth,
   height:windowHeight,
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#f5f5f5",
    borderWidth: 4,
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },

  bodyContent: {
  marginTop:100,
     width: 500,
   height:500,
    // backgroundColor: "#fff",
    // borderRadius:20,

    // borderColor: "#c7c5c5",
    // borderWidth: 1,
//    marginBottom:10,
    alignSelf:'center',
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  bodyStatus:{
    marginTop:30,
    width: 400,

   backgroundColor: "#fff",
   borderRadius:20,

   borderColor: "#c7c5c5",
   borderWidth: 1,
   marginBottom:10,
   alignSelf:'center',
  //  flex: 1,
   alignItems: 'center',
   padding:30,
  },
  caption:{

  // fontWeight: 'bold',
  fontSize: 18,
  },
    avatarImage: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    marginTop:50
  
  
  },
  titleExpire:{
    fontSize:25,
    color:'red'
  },
  title:{
    marginTop:100,
    width: 400,

  //  backgroundColor: "#fff",
  //  borderRadius:20,

  //  borderColor: "#c7c5c5",
  //  borderWidth: 1,
  //  marginBottom:10,/
   alignSelf:'center',
  //  flex: 1,
   alignItems: 'center',
  //  padding:30,
  },
  scene: {
    flex: 1,
  },
  memoinput: {
    color: '#555555',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 15,
    width: 500,
    height: 100,
    borderColor: '#FFAE42',
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
},
});
export default Profile;
