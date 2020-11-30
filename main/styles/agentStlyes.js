import {
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
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
        justifyContent:'flex-end'
        
    },
    AgentContentBg:
    {
        backgroundColor:'#fff',
        shadowOffset:{  width: 2,  height: 1,  },
        shadowColor: '#ccc',
        shadowOpacity: 0.25,
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
                    fontWeight:'bold',
                    color:'#98bc98'
                },
                agentDelete:
                {
                    color:'#ff6961',
                    fontSize:15,
                    fontWeight:'bold',
                    width:50
                }
});

export {
    styles
}