import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#FFAE42",
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
    fontWeight:700,
    color:'#fff',
    fontSize: 30,
  },

statusBody:
{
    display:'flex',
    flexWrap: 'wrap',
    flexDirection:'row'


},
statusContent:
{
    // flex:1,
    alignItems:'center',
    flexBasis:'33.233%',
},





















  textStyle:{
  paddingTop:27,
  fontSize: 14,
  color:'#504f4d'
  },
  


  
    caption:{
     paddingTop:20,
    fontSize: 14,
    },
  
    Settingscard:
      {
  //     flexDirection: 'row',
  
          justifyContent: 'center',
          alignItems: 'center',
  //        padding:5,
          margin:20,
          backgroundColor: '#fff',
          width:150,
          height:150,
  //        border:5,
  //        borderColor: "#f5f5f5",
          borderColor:'red',
          borderRadius: 20,
  //        shadowRadius:13,
  
      },
      PerformanceTitle:
      {
      padding:25,
         fontSize:24,paddingLeft:18, color:'#504f4d', justifyContent: 'center',
  //                                                  alignItems: 'center', alignSelf:'center'
      },
  
  });
export {
    styles
}
