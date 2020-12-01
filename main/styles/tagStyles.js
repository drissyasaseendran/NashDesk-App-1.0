import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    tagView:
    {
      width: windowWidth,
      height:windowHeight,

    },


    tagBlock:
    {
        backgroundColor:'#fff',
        borderRadius:5,
        marginTop:2,
        
        padding:15,
 
     
    },
    View:
    {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
   
    },
    tagBlockIcon:
    {
        color:'#0187CA',
        fontSize:28
    },
    tagBlockView:
    {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
     
      
    },
    tagTitle:
    {
        fontSize:16,
        color:'#666',
        paddingLeft:12,
        fontWeight:'bold'
    },
    tagTitlesub:
    {
        backgroundColor:'#86d8f7',
        fontSize:12,
        color:'#fff',
        padding:4,
        borderRadius:10,
        marginLeft:10

    },
    tagTitleHash:
    {
        fontSize:12,
        color:'#888',
        marginLeft:10
    },
    textColor:
    {
        color:'#fff'
    },
    BtnView:
    {
        display:'flex',
        flexDirection:'row',
        // position: 'absolute',
        // width: 50,
        // height: 50,
        // backgroundColor:'#fff',
        bottom: 0,
        // paddingTop:15,
        // justifyContent:'center',
    
       },
       tagBlockUpdation:
       {
           justifyContent:'center',
       },
       btnEdit:
       {
        backgroundColor:'#98bc98',
        width:50,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginRight:15
       },
       btnDelete:
       {
        backgroundColor:'#ff6961',
        width:50,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
       
    },
    tagcontent:
    {
        display:'flex',
        flexDirection:'column'
    } , 
    AgentContent:
    {
      
    
       display:'flex',
       flexDirection:'row',
       
     
    },
    AgentContentInside:
    {
      padding:15,
      fontSize:14,
      justifyContent:'center'
    },
    agenttextColor:
    {
        color:'#666',
        fontSize:14,
      lineHeight:20,
      fontWeight:'bold'
       
    },
});
export {
    styles
}