import {
    StyleSheet
} from 'react-native';
import {ScrollView, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    header:{
        backgroundColor: "#0187CA",
        height:200,
      },

      canvasBody: {
        width: windowWidth,
   //   height:windowHeight,
     display:'flex',
     flexDirection:'column',
      backgroundColor: "rgb(242, 242, 242)",
      borderRadius: 50,
      borderWidth: 4,
      borderColor: "rgb(242, 242, 242)",
      borderWidth: 4,
      marginBottom:10,
      alignSelf:'center',
      position: 'relative',
      top:-85
      },

       heading: {
        top: 30,
        bottom: 0,
        textAlign: 'center',
        left:130,
        position: 'absolute',
     
    },
       headingTitle:
       {
         // fontWeight:700,
         color:'#fff',
         fontSize: 30,
       },
   
       settingsBody:
       {
           display:'flex',
           flexWrap: 'wrap',
           flexDirection:'row',
           paddingTop:30,
           justifyContent: 'center',
           
       },
       settingsCardBox:
       {
        display:"flex",
        shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.01,
        shadowRadius: 1.00,
        elevation: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        backgroundColor: '#fff',
        width:120,
        height:120,
        borderColor:'red',
        borderRadius: 20,
       },
       settingsText:
       {
        color:'#888',
        fontWeight:'bold',
        textAlign:'center'
       }
  });
  export {
    styles
}