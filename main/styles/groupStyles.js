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
        // height:80,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
        padding:23,
       
     
    },
    View:
    {
        display:'flex',
        flexDirection:'row',
    },
    GroupTitle:
    {
        fontSize:16,
        color:'#666',
       
        fontWeight:'bold'
    },
    GroupBlockView:
    {
        flex:1,
        justifyContent:'center',
      
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
                     height:80,
                 justifyContent:'center',
                   borderBottomWidth:1,
                    borderBottomColor:'#ccc'
               
                 
                },
                GroupAgentContentInside:
                {
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
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