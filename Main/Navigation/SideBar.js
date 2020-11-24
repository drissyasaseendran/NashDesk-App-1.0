import React from 'react';
import {styles} from '../Styles/SidebarStyles'
import { View, StyleSheet,ScrollView ,Image} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    
} from 'react-native-paper';
import {
 
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SideBar = ({navigation})=> {

    const paperTheme = useTheme();
    return(
        <View style={{flex:1}}>
            <ScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',
                                      alignItems: 'center',
                        
                        flex:1,height:200,alignContent:'center'}}>
                              <Image style={styles.ProfileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Drissya</Title>
                                <Caption style={styles.caption}>drissyasaseendran@gmail.com</Caption>
                                <Icon 
                                name="account-outline" 
                                color='#FFAE42'
                                size={50}
                              
                                > <Caption style={styles.caption}>Admin</Caption> </Icon>
                            </View>
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
                    <Drawer.Section title="Preferences">
                        <TouchableRipple 
                        // onPress={() => {toggleTheme()}}
                        >
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </ScrollView>
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
        </View>
    );
}

  export default SideBar;















