import {
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
 
      logoContainer:
      {
        paddingBottom:25
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      logo:{
        width: 501,
        height: 51,
        resizeMode: 'contain'
      },
      LoginText:
      {

        fontSize:28,
        fontWeight:'bold',
      
        color:"#0187CA"
       
      },
      titleText:{
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        alignItems: 'center',
        backgroundColor: 'powderblue',
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        marginBottom: 10,
      },
      buttonText:{
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        width:"80%",
        borderRadius:20,
        height:55,
        fontSize: 14,
        paddingLeft: 20,
        backgroundColor:"#fff",
        borderColor:'#0187CA',
        borderWidth: 1,
        borderRadius:20,
        marginVertical: 10,
      },
      logo:{
        width: 501,
        height: 51,
        resizeMode: 'contain'
      },
  
      forgot:{
        color:"#0187CA",
        paddingBottom:20
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#0187CA",
        borderRadius:20,
        height:55,
        alignItems:"center",
        justifyContent:"center",
        color:'white',
        marginBottom:10
      },
      loginText:{
        color:"#fff",
        fontWeight:'bold'

      }   ,
      loginSignup:
      {
        color:"#0187CA"
      }
});

export {
    styles
}