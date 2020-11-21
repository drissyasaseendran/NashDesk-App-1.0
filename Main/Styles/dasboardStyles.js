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
       position: 'absolute',
       marginTop:130
    },
    statusBody:
    {
        display:'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        paddingTop:'30px'
        
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
        border:'1px solid #ccc',
        boxShadow: '1px 1px 1px  #eef'
     

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
      fontWeight:700,
      color:'#888'
    },
    statusTitlebody:
    {
      paddingTop:'5px'
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
      paddingLeft:'10px',
      paddingTop:'15px',
      fontSize:25,
      fontWeight:700,
      color:'#888'
    },
    performanceBg:
    {
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        backgroundColor: '#fff',
        borderColor:'red',
        borderRadius: 20,
        border:'1px solid #ccc',
        boxShadow: '1px 1px 1px  #eef'
    }
  });
export {
    styles
}
