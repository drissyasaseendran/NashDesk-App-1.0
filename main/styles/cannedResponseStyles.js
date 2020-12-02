import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

   cannedView:
    {
      width: windowWidth,
      height:windowHeight,

    },


   cannedBlock:
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
   cannedBlockIcon:
    {
        color:'#0187CA',
        fontSize:28
    },
   cannedBlockView:
    {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
     
      
    },
   cannedTitle:
    {
        fontSize:16,
        color:'#666',
        paddingLeft:12,
        fontWeight:'bold'
    },
   cannedTitlesub:
    {
        backgroundColor:'#86d8f7',
        fontSize:12,
        color:'#fff',
        padding:4,
        borderRadius:5,
        marginLeft:10

    },
   cannedTitleHash:
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
      cannedBlockUpdation:
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
   cannedcontent:
    {
        display:'flex',
        flexDirection:'column'
    } , 
   






























    inputFeildLabel:
    {
        flex:1
    },  
    categoryLabel:
    {
        
        height: 50,
        borderColor: '#ccc',
        color:'#666',
        borderWidth: 1,
     
        paddingLeft:12,
        backgroundColor:'#F5F5F6',
    },
    CategoryInput:
    {
      
   
        height: 50,
        borderColor: '#ccc',
        color:'#666',
        borderWidth: 1,
     
        paddingLeft:12,
        backgroundColor:'#F5F5F6',
    },
    textlabel:
    {
        color:'#fff',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    clustername:
    {
      
        fontSize:15,
        fontWeight:'bold',
        color:'#888',
    },
    center:{
         height:50,

        //  alignItems:'center',
         justifyContent:'center',
    },

 
});
export {
    styles
}