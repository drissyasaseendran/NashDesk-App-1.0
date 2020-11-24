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

  
     
       leaderbody: {
        display:"flex",
      
        margin:20,
        backgroundColor: '#fff',
        borderColor:'red',
        borderRadius: 20,
        // border:'1px solid #ccc',
        // boxShadow: '0 2px 6px -2px #ccc',
        // paddingBottom:20
        },

        leaderContent:
        {
            display:'flex',
            flexDirection:'row',
            padding:20,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: '#ccc',
             borderBottomWidth: 1,
             marginLeft:20,
             marginRight:20
        },
        leadername:
        {
        //    fontWeight:'800',
            paddingLeft:12,
            fontSize:14,
            color:'#888'
        },  
        leadercount:
        {
          
            textAlign:'right',
            fontSize:14,
            color:'#888'
        },
        leaderImage: {
           
            width: 50,
            height: 50,
            borderRadius: 63,

        },

        leaderContentFeild:
        {
            flexGrow:1,
            justifyContent:'space-between'
        }

























   
});

export {
    styles
}