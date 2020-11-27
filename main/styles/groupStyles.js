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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
        padding:20,
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
    }
});
export {
    styles
}