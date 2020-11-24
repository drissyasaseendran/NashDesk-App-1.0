import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#0187CA",
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
      // fontWeight:700,
      color:'#fff',
      fontSize: 30,
    },
    canvasBody: {
      width: windowWidth,
 //   height:windowHeight,
   display:'flex',
   flexDirection:'column',
    backgroundColor: "rgb(242, 242, 242)",
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "rgb(242, 242, 242)",
    borderWidth: 4,
    marginBottom:10,
    alignSelf:'center',
    position: 'relative',
    top:-85
    },
    input: {

        borderRadius: 20,
        paddingLeft: 15,
        width: "2",
        width: 342,
        height: 43,
        margin: 12,
        borderWidth: 1,
        borderColor: '#13636485',

    },

    image: {
        width: 107,
        height: 165,

    },

    loginScreenButton: {
        width: 340,
        height: 40,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        backgroundColor: '#136364',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    login: {
        color: '#136364'
    },


    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    //-------------------
    // NAV STYLESSSS
    //-------------------
    NavView: {
        flex: 1,
        flexDirection: 'row'
    },
    NavDirection: {
        flexDirection: 'row',
        height: 80
    },
    NavCoulmn: {
        flexDirection: 'column',
        padding: 12,
        paddingTop: 20,
        height: 40,
        width: 40,
    },
    NavMenuImage: {
        height: 30,
        width: 30
    },
    NavLogoImage: {
       
    },
    NavLogoView: {
        flexDirection: 'column',
        padding: 12,
        height: 40,
        width: 40,
    },
    NavIconsRight: {

        width: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        textAlign: "right",


    },
    NavViewRight: {
        flexDirection: 'row'
    },
  
    //SPARKLINE
    SparkboxSimple: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#13636485',
        padding: 20,
        margin: 30,
        paddingTop: 15,
    },
    Sparktext: {
        fontSize: 16,
        backgroundColor: '#fff',
        padding: 10,
        margin: 20,
    },
    //Memo text


    //
    agentsContainer:
    {
        width: 400,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#13636485',
        fontSize: 16,
        padding: 20,
        margin: 10,
    },
    agentsText:{
   
       
        fontSize: 16,
        padding: 10,
       
    },
    agentsearch:
    {
        flex:1,
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#13636485',
    },
    //Settings 
    Settingscontainer:
    {
        // backgroundColor: '#fcfcf0',
        flexDirection:'row'
    },

    SettingsText:{
        paddingLeft:2,
        alignSelf:'center',
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 14,
       
    },
    //Agents
    agentsview:
    {
        padding:20,
       
    },
    agentColumn:
    {
        height: 40,
    },
    agentheading:
    {
        padding:2,
        alignSelf:'center',
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 14,
       
    },
    agentlist:{
        padding:2,
        alignSelf:'center',
        textAlign: 'center', // <-- the magic
     
        fontSize: 12,
       
    },
    // Canned Respoonse
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,

    },
    cardContent:{
        marginHorizontal:30,
        marginVertical:20,
    },
   

caption:{

    // fontWeight: 'bold',
    fontSize: 18,
    },
    title:{
        color:'orange',
        fontSize:17
    },
    content:{
      color:'#666',
      fontSize:14
  },
  appButtonContainer: {
      // elevation: 8,
      width:80,
      height:30,
      backgroundColor: "#fff",
      borderRadius: 10,
      borderColor: "#c7c5c5",
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight:2,
      // borderBottomColor: '#0f0',
      // paddingVertical: 10,
      // paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 14,
      color: "#c7c5c5",
      // fontWeight: "bold",
      alignSelf: "center",
      // textTransform: "uppercase"
    },
  
  searchSection: {
      width: 250,
      height: 40,
      borderColor: '#c7c5c5',
      borderWidth: 1,
      borderRadius: 25,
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
  },
  searchIcon: {
      color:'#c7c5c5',
      padding: 10,
  },
  input: {
      
      // flex: 1,
      padding: 8,
      // paddingRight: 10,
      // paddingBottom: 10,
      // paddingLeft: 0,
      // backgroundColor: '#fff',
      color: '#424242',
  },
});
export {
    styles
}