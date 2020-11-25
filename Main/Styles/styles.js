import {
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoContainer:
      {
        paddingBottom:50
      },
      logo:{
        width: 501,

    height: 51,
    resizeMode: 'contain'
      },
      inputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderColor:'#0187CA',
        borderWidth:1,
        height:50,
        marginBottom:20,
        borderRadius:25,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"#0187CA"
      },
      forgot:{
        color:"#0187CA",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#0187CA",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        color:'white',
        marginBottom:10
      },
      loginText:{
        color:"#fff"
      }   ,
      loginSignup:
      {
        color:"#0187CA"
      }
});

export {
    styles
}