import React from 'react';
import {styles} from '../styles/SidebarStyles'
import { logout } from "../utils/Authenticator";
import { View,ScrollView ,Image} from 'react-native';
import {
    useTheme,
    Title,
    Caption,
    Drawer,

    
} from 'react-native-paper';
import {
 
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SideBar = ({navigation})=> {

      const signOut = () => {
        logout();
        navigation.navigate("Login")
      };
    
    const paperTheme = useTheme();
    return(
     
            <ScrollView>
                <View >
                    <View style={styles.SideBarProfile}>
                        <View  style={styles.SideBarProfileContent}>
                            <Image style={styles.ProfileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                        </View > 
                        <View style={styles.SideBarProfileDetails}>
                                <Title style={styles.Profilename}>Drissya</Title>
                                <Caption style={styles.profileId}>drissyasaseendran@gmail.com</Caption>
                                <View style={styles.ProfileRole}>
                                    <Icon 
                                    style={styles.profileRoleIcon}
                                    name="account-outline" 
                                    color='#FFAE42'
                                    size={20} > </Icon> 
                                    <Caption style={styles.profileRoleName}>Admin</Caption> 
                                </View >
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate('Dashboard')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="message-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Message Memo"
                            onPress={() => {navigation.navigate('MessageMemo')}}
                        />
                      
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Leader"
                            onPress={() => {navigation.navigate('Leader')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="google-analytics" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Analytics"
                            onPress={() => {navigation.navigate('Analytics')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {navigation.navigate('Settings')}}
                        />
                    </Drawer.Section>
                
                </View>
                <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
            </ScrollView>
     
    );
}

  export default SideBar;















