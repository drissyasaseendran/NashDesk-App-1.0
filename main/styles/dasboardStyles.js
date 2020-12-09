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
    canvasBody:
    {
      
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
       
       position: 'relative',
      //  top:80,


      //  marginTop:130
    },
 
 
    statusBody:
    {
        display:'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        paddingTop:30
        
    },
    statusContent:
    {
        alignItems:'center',
        flexBasis:'33.233%',
    },
    statusCardBox:
    {
        display:"flex",
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        backgroundColor: '#fff',
        width:120,
        height:120,
        borderColor:'red',
        borderRadius: 20,
        shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.01,
        shadowRadius: 1.00,
        elevation: 1,

    },
    statusContentinside:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    statusIcon:
    {
      fontSize:30,
      color:'#888',
      paddingRight:10
    },
    statusText:
    {
      fontSize:30,
      color:'#888'
    },
    statusTitlebody:
    {
      paddingTop:5
    },
    statusTitle:
    {
      fontSize: 14,
      color:'#888'
    },
    performanceContent:
    { 
      
    },
    performanceText:
    {
      paddingLeft:10,
      paddingTop:15,
      fontSize:20,
      paddingBottom:20,
      color:'#888'
    },
   
    performanceBg:
    {
        display:"flex",
        paddingTop:15,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        backgroundColor: '#fff',
        shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.01,
        shadowRadius: 1.00,
        elevation: 1,
        borderColor:'red',
        borderRadius: 20,
    },
    container: {
      flex: 1,
      justifyContent: "center",

    },


    headerText: {
      color: 'white',
      fontSize: 22
    },
    item: {
      backgroundColor: '#ff9e80',
      margin: 8,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemText: {
      color: 'black',
      fontSize: 16
    },
    animatedHeaderContainer: {
      position: 'absolute',
      // top: (Platform.OS == 'ios') ? 20 : 0,
      
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white',
    },
    first: {
      backgroundColor: '#f5f5f5',
      alignSelf: 'center',
      // width: 100,
      height: 30,
      top:75,
      width: windowWidth,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      // transform: [{ scaleX: 14 }],
      zIndex: 1,
    },

 
  });
export {
    styles
}
