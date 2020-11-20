import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    header:{
      backgroundColor: "#FFAE42",
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
    canvasBody:
    {
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
    statusBody:
    {
        display:'flex',
        flexWrap: 'wrap',
        flexDirection:'row'
        
    },
    statusContent:
    {
        alignItems:'center',
        flexBasis:'33.233%',
    },
    statusCardBox:
    {

        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        backgroundColor: '#fff',
        width:150,
        height:150,
        borderColor:'red',
        borderRadius: 20,

    },




















  textStyle:{
  paddingTop:27,
  fontSize: 14,
  color:'#504f4d'
  },
  


  
    caption:{
     paddingTop:20,
    fontSize: 14,
    },
  
 
      PerformanceTitle:
      {
      padding:25,
         fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
  //                                                  alignItems: 'center', alignSelf:'center'
      },
  
  });
export {
    styles
}
