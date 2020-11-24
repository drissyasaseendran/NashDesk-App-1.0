import {
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';

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
































    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
  
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
    });
  


export {
    styles
}