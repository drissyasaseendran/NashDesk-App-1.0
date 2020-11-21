import React from 'react';
import {StyleSheet,Title,View,Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function ProfileAbout () {
return ( <View style={styles.bodyContent}>

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
export default ProfileAbout;
