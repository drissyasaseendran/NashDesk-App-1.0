import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
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
        // backgroundColor:'#fff',
        borderRadius:5,
        // marginTop:2,
        borderBottomWidth:1,
        borderBottomColor:'#E0E0E0',
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
        color:'#1a73e8',
        
        fontSize:18
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
        // fontWeight:'bold'
    },
    tagTitlesub:
    {
        backgroundColor:'#F8F8F8',
        fontSize:12,
        color:'#666',
        padding:5,
        width:110,
        borderRadius:5,
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
    editProfile:
    {
    //   margin: 15,
    margin:15,
      height: 50,
      borderColor: '#7a42f4',
      color:'#666',
      borderWidth: 1,
      paddingLeft:12,
      backgroundColor:'#F5F5F6',
      // boxShadow: '0 2px 6px -2px #F5F5F6',
      borderColor: '#eee',
      borderWidth: 1,
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
       addtagModal:
       {
         margin: 0,
       
         
       },
       fab: {
        backgroundColor:'#1a73e8',
        color:'#fff',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
       
      },
       tagModal:
       {
           top:200,
           borderTopRightRadius:30,
           borderTopLeftRadius:30,
           shadowOffset: {
             width: 0,
             height: 0,
             },
             shadowOpacity: 0.1,
             shadowRadius: 6,
             elevation: 1,
           backgroundColor:'#fff',
           height:'40%'
       },
       input: {
         margin: 15,
         height: 50,
         padding:10,
         borderColor: '#ccc',
         borderWidth: 1,  
         borderRadius: 6,
      },
      inputTextarea:{
       margin: 15,
       borderRadius: 6,
       height: 100,
       padding:10,
       borderColor: '#ccc',
       borderWidth: 1
      },
      Error:{
        fontSize:10,
        color:'red',
        marginLeft: 15,
      },
      modelCloseicon:
      {
            color:'grey',
            fontSize:20
      },
      modlTextAdd:
      {
        flexGrow:1,
        fontSize:18,
        color:'#888',
        fontWeight:'bold'
      },
      modelClose:
      {
        display:'flex',
        flexDirection:'row',
        padding:20,
        paddingTop:28
      },
      button: {
                        
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: '#1a73e8',
        shadowColor: '#1a73e8',
        shadowOpacity: 1.28,
        shadowOffset: { 
          height: 19, 
          width: 0 
        },
        shadowRadius: 55,
        margin: 15,
        height: 50,
        padding:10,
        borderColor: '#ccc',
        borderWidth: 1
      }, 
      textcolor:
      {
            color:'#fff',
            fontSize:20
      },
      tagView:
      {
        width: windowWidth,
        height:windowHeight,
  
      },
      btn:
      {
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
      },
      IconcolorEdit:
      {
        fontSize:16,
        padding:5,
        color:'#77DD77'
      },
      Iconcolortrash:
      {
        padding:5,
        fontSize:14,
          color:'#ff6961'
      }, 
});
export {
    styles
}