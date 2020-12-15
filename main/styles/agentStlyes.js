import {
    StyleSheet
} from 'react-native';

import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    fab: {
      backgroundColor:'#1a73e8',
      color:'#fff',
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    
    },
    agentText:
    {
        fontSize:20,
        fontWeight:'bold',
        color:'#666'
    },
    Agents:
    {
            // height:30,
            padding:12
    },
    agenttextColor:
    {
        color:'#666',
        fontSize:14,
      lineHeight:20,
      fontWeight:'bold'
       
    },
    AgentContent:
    {
      
    
       display:'flex',
       flexDirection:'row',
       
     
    },
    AgentSidebtn:
    {
        display:'flex',
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'#eef',
        padding:10,
        // marginBottom:10,
        marginLeft:15,
        marginRight:15,
        // paddingBottom:10,
        justifyContent:'flex-end'
        
    },
    Content:
    {
      margin:15
    },
    AgentContentBg:
    {
       
        backgroundColor:'#fff',
        borderRadius:5,
        shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.01,
        shadowRadius: 1.00,
        elevation: 1,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        marginBottom:15
    },
    AgentContentInside:
    {
      padding:15,
      fontSize:14,
      justifyContent:'center'
    },
    agenttextColorEmail:
                {
                    color:'#666',
                    fontSize:12,
                    lineHeight:18
                
                },
  
                AgentIcon:
                {
                    display:'flex',
                    flexDirection:'row',
                   flex:1,
                   alignItems:'center',
                   justifyContent:'flex-end'
                },
                Iconcolortrash:
                {
                    color:'#ff6961',
                    fontSize:18
                }, 
                BlockIcon:
                {
                    color:'#0187CA',
                    fontSize:28
                },
                agentEdit:
                {
                    width:50,
                    fontSize:15,
                    // fontWeight:'bold',
                    color:'#218321'
                },
                agentDelete:
                {
                    color:'#E32828',
                    fontSize:15,
                    // fontWeight:'bold',
                    // width:50
                },


                // AGNET EDIT

                  canvasEditBody:
                  {
                    width: windowWidth,
                    height:windowHeight,
                  
                    display:'flex',
                  flexDirection:'column',
                   backgroundColor: "rgb(242, 242, 242)",
                   borderRadius:100,
                   borderWidth: 4,
                   borderColor: "rgb(242, 242, 242)",
                   borderWidth: 4,
                   alignSelf:'center',
              
                  },
   
                
                  editProfile:
                  {
                    margin: 15,
                    height: 50,
                    borderColor: '#7a42f4',
                    color:'#666',
                    borderWidth: 1,
                    paddingLeft:12,
                    backgroundColor:'#F5F5F6',
                    borderColor: '#eee',
                    borderWidth: 1,
                  },
            
                  EditBody:
                  {
                    
                    borderRadius:10,
                    backgroundColor:'#fff',
                   
                  },
              
                  editlabel:
                  {
                    margin: 16,
                    fontSize:11,
                    marginBottom:-12,
                    color:'#888'
                  },
                  ViewAgentEditbtn:
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
                  btnText:
                  {
                    textAlign:'center',
                    alignContent:'center',
                    color:'#fff'
                  
                         },
      
                     
                            
                               btnUpdate:
      
                               {
                                fontWeight: 'bold' ,
                               
                                borderWidth:1,
                                borderWidth:1,
                                width:400,
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