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

  
     
       leaderbody: {
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        backgroundColor: '#fff',
        borderColor:'red',
        borderRadius: 20,
        border:'1px solid #ccc',
        boxShadow: '0 2px 6px -2px #ccc',
        paddingBottom:'20px'
        },

        leaderContent:
        {
            flexDirection:'row',
      
            paddingTop:'20px',
            alignItems: 'center',
            
        },
        leadername:
        {
            flex: '1 1 33%',
            paddingLeft:'12px',
            fontSize:'14px',
            color:'#888'
        },  
        leadercount:
        {
           flex: '1 1 33%',
            textAlign:'center',
            fontSize:'14px',
            color:'#888'
        },
        leaderImage: {
            flex: '1 1 33%',
            width: 50,
            height: 50,
            borderRadius: 63,
      
            // borderWidth: 4,
            // borderColor: "white",
            // marginBottom:10,
            // alignSelf:'center',
            // paddingTop:'30px'
        }



























   
});

export {
    styles
}