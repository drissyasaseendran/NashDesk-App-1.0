import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    SideBarProfile:
    {
        margin:15,
        display:'flex',
        flexDirection:'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    ProfileImage:
    {
        width: 80,
        height: 80,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        paddingTop:30
    },
    SideBarProfileDetails:
    {
        paddingLeft:15
    },
    ProfileRole:
    {
        display:'flex',
        flexDirection:'row',
       
    },
    profileRoleIcon:
    {
        justifyContent:'center'
    },
    profileRoleName:
    {
        justifyContent:'center'
    },


  
     });
  


export {
    styles
}