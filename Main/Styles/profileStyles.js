import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#0187CA",
        height:200,
      },
      heading: {
          top: 0,
          bottom: 0,
          textAlign: 'center',
          right: 0,
          position: 'absolute',
          left: 0,
      },
      headingTitle:
      {
        fontWeight:700,
        color:'#fff',
        fontSize: 30,
      },

      canvasBody: {
        width: windowWidth,
        height:windowHeight,
        display:'flex',
        flexDirection:'column',
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
       ProfileBody:
       {
        paddingTop:'30px',
        paddingBottom:'30px'
       },   
       ProfileImage: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        paddingTop:'30px'
      
      
      },
      Profilename:
      {
        fontSize:15,
        color:'#888',
        textAlign:'center'
      },
      ProfileContentInside:
      {
       
        justifyContent:'center',
      },
      profileabout:
      {
        flexDirection:'row', flex:1
      },
      PrfileFileds:
      { 
           flexDirection:'row', flex:1
    },












      avatarHeading: {
        top: 0, left: 0,
        right: 0, bottom: 130,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    
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

export {
    styles
}