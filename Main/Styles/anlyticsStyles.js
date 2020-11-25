import {
    StyleSheet
} from 'react-native';


import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
  
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
  //   fontWeight: 'bold',
    fontSize: 30,
  },
    avatar: {
     width: windowWidth,
     height:'auto',
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
    marginTop:30,
       width: 800,
       padding:30,
  //    height:500,
      backgroundColor: "#fff",
      borderRadius:20,
  
      borderColor: "#c7c5c5",
      // borderWidth: 1,
  //    marginBottom:10,
      alignSelf:'center',
      // flex: 1,
      // alignItems: 'center',
      // padding:30,
    },
    caption:{
  
  //   fontWeight: 'bold',
    fontSize: 18,
    },

});

export {
    styles
}