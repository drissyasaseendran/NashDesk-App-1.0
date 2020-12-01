import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    GroupView:
    {
      width: windowWidth,
      height:windowHeight,

    },


    GroupBlock:
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
    GroupBlockIcon:
    {
        color:'#0187CA',
        fontSize:28
    },
    GroupBlockView:
    {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
     
      
    },
    GroupTitle:
    {
        fontSize:14,
        color:'#666',
        paddingLeft:12
        // fontWeight:'bold'
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
       GroupBlockAgents:
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
             
});
export {
    styles
}