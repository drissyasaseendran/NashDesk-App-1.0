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
      // fontWeight:700,
      color:'#fff',
      fontSize: 30,
    },
      canvasBody: {
        width: windowWidth,
        // height:windowHeight,
        display:'flex',
        flexDirection:'column',
         backgroundColor: "#f5f5f5",
         borderRadius: 50,
         borderWidth: 4,
         borderColor: "#f5f5f5",
         borderWidth: 4,
         marginBottom:10,
         alignSelf:'center',
         position: 'relative',
         top:-85
       },
       memoBody:
       {
        marginBottom:50,
        borderBottomColor: '#c7c5c5',
        borderBottomWidth: 1,
      
       },
       memoBodyContainer:
       {
            marginTop:50,
            margin:30,
         
            paddingBottom:15
       },
       memotitle:
       {
        fontSize:14,
        // paddingBottom'5,
        paddingLeft:10,
        color:'#888',
        
       },
       memoViews:
       {
        display:'flex',
        flexDirection:'row',
        paddingLeft:8,
        // paddingBottom:10,
        alignItems: "center"
       },
       memoViewsdate:
       {
        display:'flex',
        flexDirection:'row',
        alignItems: "center",
        justifyContent:'space-between'
       },



          memoinput: {
             color: '#555555',
             paddingRight: 10,
             paddingLeft: 10,
             paddingTop: 15,
             width: '100%',
             height: 100,
             borderColor: '#0187CA',
             borderWidth: 1,
             borderRadius: 10,
             alignSelf: 'center',
             backgroundColor: '#ffffff',
             marginBottom:20
         },
         memobtnContainer:
         {
            display:'flex',
            width:'100%'
         },
           sendContainer: {
            
     
         },
          sendLabel: {
            color: '#fff',
           padding:10,
            width: '100%',
            height: 40,
            borderColor: '#0187CA',
            borderWidth: 1,
            borderRadius: 10,
            alignSelf: 'center',
            textAlign:'center',
            backgroundColor: '#0187CA'
         },
});

export {
    styles
}