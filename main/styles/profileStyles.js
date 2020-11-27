import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
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
        // fontWeight:700,
        color:'#fff',
        fontSize: 30,
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

       ProfileBody:
       {
        paddingTop:30,
        paddingBottom:30
       },   
       ProfileImage: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        paddingTop:30
      
      
      },
      Profilename:
      {
        fontSize:14,
        paddingBottom:5,
        color:'#888',
        textAlign:'center'
      },
  
      ProfileFileds:
      {
        flexDirection: "row",
        alignItems: "center"
      },
      
      PrfileIcon:
      {
        paddingRight: 15,
        fontSize:18,
      },

      Prfiletext:
      {
        fontSize:14,
        color:'#888'
      },
      ProfileAboutBody:
      {
        // paddingTop: 12,
      },

      ProfileContentInside:
      {
        display:'flex',
      },
      ProfileFiledBtn:
      {
        paddingTop:12,
        display:'flex',
      },
      ProfileRender:
      {
        // display:'flex',
      },
      ProfileBtn:
      {
       
        textAlign:'right',
        justifyContent:'flex-end',
        fontSize:14,
        // padding: 40,
        color:'#0187CA',
        // fontWeight:'700'
      },
      ProfileContent:
      {
        // border:'1px solid #ccc',
        borderRadius:15,
        padding: 15,
      // boxShadow: '0 2px 6px -2px #ccc',
        backgroundColor:'#fff',
        margin: 28
      },

      ProfileStatusContent:
      {
        // border:'1px solid #ccc',
        borderRadius:15,
        padding:15,
      // boxShadow: '0 2px 6px -2px #ccc',
        backgroundColor:'#fff',
        margin:28
      },
      ProfileStatustitle:
      {
        fontSize:14,
        color:'#888'
      },
      ProfiletitleExpire:
      {
        fontSize:14,
        marginTop:-12,
        color:'#C42937'
      },
      editProfile:
      {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        color:'#666',
        borderWidth: 1,
        paddingLeft:12,
        backgroundColor:'#F5F5F6',
        // boxShadow: '0 2px 6px -2px #F5F5F6',
        borderColor: '#eee',
        borderWidth: 1,
      },

      EditBody:
      {
        // border:'1px solid #ccc',
        borderRadius:15,
        padding:15,
        // boxShadow: '0 2px 6px -2px #ccc',
        backgroundColor:'#fff',
        margin:28
      },
  
      editlabel:
      {
        margin: 16,
        fontSize:11,
        marginBottom:-12,
        color:'#888'
      },

      BtnView:
      {
        display:'flex',
           flexDirection:'row',
           position: 'absolute',
           // width: 50,
           // height: 50,
           backgroundColor:'#fff',
           bottom: 0,
           paddingTop:15,
           justifyContent:'center',
         
           width: windowWidth,
           height:80,
           zIndex: 100,
         },
   
            btnText:
            {
              textAlign:'center',
              alignContent:'center',
              color:'#fff'
            
                   },

                   btnCancel:

                   {
                    fontWeight: 'bold' ,
                   
                    borderWidth:1,
                    marginRight:15,
                    width: 180,
                    height: 50,
                    borderRadius:10,
                    backgroundColor:'#fff',
                    borderColor:'#888',
                    textAlign:'center',
                    alignContent:'center',
                    bottom: 0,
                
                    justifyContent:'center',


                 
                         },
                         btnTextCancel:
                         {
                          fontWeight: 'bold' ,
                          textAlign:'center',
                          alignContent:'center',
                          color:'#888'
                         },
                         btnUpdate:

                         {
                          fontWeight: 'bold' ,
                         
                          borderWidth:1,
                          borderWidth:1,
                          width: 180,
                          height: 50,
                          borderRadius:10,
                          backgroundColor:'#000',
                          borderColor:'#000',
                          color:'#fff',
                          textAlign:'center',
                          alignContent:'center',
                          bottom: 0,
                  
                          justifyContent:'center',

                               },
      
      













});

export {
    styles
}