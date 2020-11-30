import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    View:
    {
        width:windowWidth,
    },
    GroupBlock:
    {
        backgroundColor:'#fff',
        borderRadius:5,
        marginTop:20,
        shadowOffset:{  width: 2,  height: 1,  },
        shadowColor: '#ccc',
        shadowOpacity: 0.25,
        elevation: 11,
        padding:23,
 
     
    },
    View:
    {
        display:'flex',
        flexDirection:'row',
       
    },
    editlabel:
    {
        margin: 10,
        fontSize:11,
        marginBottom:-5,
        color:'#888'
    },
    groupProfile:
    {
      margin: 10,
      height: 50,
      borderColor: '#7a42f4',
      color:'#666',
      borderWidth: 1,
      paddingLeft:12,
      fontSize: 14,
      backgroundColor:'#F5F5F6',
      // boxShadow: '0 2px 6px -2px #F5F5F6',
      borderColor: '#eee',
      borderWidth: 1,
    },
    groupProfileTextarea:
    
    {
      paddingTop:15,
      margin: 10,
      height: 150,
      borderColor: '#7a42f4',
      color:'#666',
      borderWidth: 1,
      paddingLeft:12,
      backgroundColor:'#F5F5F6',
      // boxShadow: '0 2px 6px -2px #F5F5F6',
      borderColor: '#eee',
      borderWidth: 1,
},
    GroupTitle:
    {
        fontSize:14,
        color:'#666',
        paddingLeft:12
        // fontWeight:'bold'
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
        // justifyContent:'center',
      
    },
    GroupBlockAgents:
    {
        justifyContent:'center',
    },
    Groupcount:
    {
        fontSize:12,
        color:'rgb(64, 166, 209);'
    },
    GroupDescription:
    {
        fontSize:12,
        color:'#888'
    },

    AftrePresView:
    {
      display:'flex',
      flexDirection:'row',
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
                    paddingTop:15,
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
                textTitle:{
                    fontWeight:'bold',
                    fontSize:14,
                    color:'#666'
                },
                textColor:
                {
                    color:'#fff',
                    fontWeight:'bold'
                },
                agenttextColor:
                {
                    color:'#666',
                    fontSize:14,
                  lineHeight:18
                   
                },
                agenttextColorEmail:
                {
                    color:'#666',
                    fontSize:12,
                },
                GroupAgentView:
                {
                    width: windowWidth,
                     height:windowHeight,
                    backgroundColor:'#fff',
                    display:'flex',
                    flexDirection:'column',
                    padding:10
                },
                GroupView:
                {
                  width: windowWidth,
                  height:windowHeight,
            
                },
                GroupAgents:
                {
                        height:30,
                        padding:12
                },
                Iconcolortrash:
                {
                    color:'#ff6961'
                },  
                agentText:
                {
                    color:'#666',
                    fontWeight:'bold',
                    fontSize:16
                },
                GroupAgentContent:
                {
                  
                   justifyContent:'center',
                   borderBottomWidth:1,
                   borderBottomColor:'#ccc',
                   display:'flex',
                   flexDirection:'row',
                   paddingTop:12,
                   paddingBottom:12
                //   flex:1,
                 
                },
                GroupAgentContentInside:
                {
                  padding:8,
                  fontSize:14,
                  justifyContent:'center'
                },
                GroupAgentIcon:
                {
                    display:'flex',
                    flexDirection:'row',
                   flex:1,
                   alignItems:'center',
                   justifyContent:'flex-end'
                },
                BtnViewEdit:
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

                btnText:
                   {
                    textAlign:'center',
                    alignContent:'center',
                    color:'#fff'
                         
                   },
             
             
});
export {
    styles
}