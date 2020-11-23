import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
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
       memoBody:
       {
        marginTop:50,
        margin:'28px'
       },

       memotitle:
       {
        fontSize:14,
        // paddingBottom:'5px',
        paddingLeft:'5px',
        color:'#888',
        
       },
       memoViews:
       {
        display:'flex',
        flexDirection:'row',
     
        alignItems: "center"
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
     
    
       caption:{
        paddingTop:20,
       fontSize: 14,
       },
          memoinput: {
             color: '#555555',
             paddingRight: 10,
             paddingLeft: 10,
             paddingTop: 15,
             width: 400,
             height: 100,
             borderColor: '#FFAE42',
             borderWidth: 1,
             borderRadius: 2,
             alignSelf: 'center',
             backgroundColor: '#ffffff'
         },
           sendContainer: {
             padding: 20,
     
         },
          sendLabel: {
               color: '#fff',
             paddingRight: 10,
             paddingLeft: 10,
             paddingTop: 15,
             width: 400,
             height: 80,
             borderColor: '#FFAE42',
             borderWidth: 1,
             borderRadius: 2,
             alignSelf: 'center',
             textAlign:'center',
             backgroundColor: '#FFAE42'
         },
});

export {
    styles
}