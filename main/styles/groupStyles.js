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
        padding:20,
       
     
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
                    backgroundColor:'green',
                    width:80,
                   
                    height:30,
                    alignItems:'center',
                    justifyContent:'center',
            
                    borderRadius:5,
                    marginRight:15
                   },
                   btnDelete:
                   {
                    backgroundColor:'red',
                    width:80,
                    height:30,
                    borderRadius:5,
                    alignItems:'center',
                    justifyContent:'center',
                   
                },
                textTitle:{
                    fontWeight:'bold',
                    fontSize:17,
                    color:'#666'
                },
                textColor:
                {
                    color:'#fff',
                    fontWeight:'bold'
                }

});
export {
    styles
}