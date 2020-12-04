import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    categoryView:
    {
      width: windowWidth,
      height:windowHeight,

    },
    categorytrashIcon:
    {
        fontSize:14,
        color:'red'
    },
    text:
    {
        fontSize:14,
        color:'#888'
    },
    categoryBlock:
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
    categoryBlockIcon:
    {
        color:'#0187CA',
        fontSize:28
    },
    categoryBlockView:
    {
        flex:1,
        flexDirection:'row',
        alignItems:'center'
     
      
    },
    categoryTitle:
    {
        fontSize:16,
        color:'#666',
        paddingLeft:12,
        fontWeight:'bold'
    },
    categoryTitlesub:
    {
        backgroundColor:'#86d8f7',
        fontSize:12,
        color:'#fff',
        padding:4,
        borderRadius:5,
        marginLeft:10

    },
    categoryTitleHash:
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
       categoryBlockUpdation:
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
    categorycontent:
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
    inputBtn:
    {
        display:'flex',
        flexDirection:'row'
    },
    textSend:
    {
        width:50,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:'#98bc98'
    },
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
    btnText:
    {
        textAlign:'center',
        alignContent:'center',
        justifyContent:'center',
        color:'#fff'
    },
    btnUpdate:
    {
        fontWeight: 'bold' ,
        borderWidth:1,
        borderWidth:1,
        margin:15,
        width: 350,
        height: 45,
        borderRadius:10,
        backgroundColor:'#000',
        borderColor:'#000',
        color:'#fff',
        textAlign:'center',
        bottom: 0,
        textAlign:'center',
        alignContent:'center',
        justifyContent:'center',

    },
    modlView:
    {
         display:'flex',
         flexDirection:'row',
         position: 'absolute',
         backgroundColor:'#fff',
         bottom: 0,
         paddingTop:15,
         justifyContent:'center',
         width: windowWidth,
         height:80,
         zIndex: 100,
       },
       EditFeild:
       {
       
			backgroundColor: 'white',
			padding: 15,
			height: 500,
		  
       },
       textArea:
       {
        // height: 50,
        borderColor: '#ccc',
        color:'#888',
        borderWidth: 1,
             backgroundColor:'#F5F5F6'
       }
});
export {
    styles
}