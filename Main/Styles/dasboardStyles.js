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
    }
   
});

export {
    styles
}
