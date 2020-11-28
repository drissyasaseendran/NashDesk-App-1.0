import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
 
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
    GroupTitle:
    {
        fontSize:14,
        color:'#666',
        paddingLeft:'12px'
        // fontWeight:'bold'
    },
    GroupBlockIcon:
    {
        color:'#0187CA',
        fontSize:18
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
                    flex:1,
                
                    justifyContent:'flex-end'
                  
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
                GroupAgentView:
                {
                    backgroundColor:'#fff',
                    display:'flex',
                    flexDirection:'column',
                    padding:10
                },
                GroupAgents:
                {
                        height:30,
                        padding:8
                },
                Iconcolortrash:
                {
                    color:'red'
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
                  flex:1,
                 
                },
                GroupAgentContentInside:
                {
                  padding:8
                },
                GroupAgentIcon:
                {
                    display:'flex',
                    flexDirection:'row',
                   flex:1,
                   alignItems:'center',
                   justifyContent:'flex-end'
                }
});
export {
    styles
}