import React from 'react';
import {TextInput ,Text,Image,ScrollView,View} from 'react-native';
import {styles} from '../styles/profileStyles'

function ProfileUpdate (props){

    return (
        <ScrollView>
        <View style={styles.header}></View>
        <View style={styles.canvasBody}>
        <View style={styles.ProfileBody}> 
                    <Image style={styles.ProfileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                   
        </View>
        <View style={styles.EditBody}> 
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Name</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               value="Jenifer" 
               autoCapitalize = "none"
            //    onChangeText = {this.handleEmail}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Home</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               value="St plbcx ahgd" 
               autoCapitalize = "none"
            //    onChangeText = {this.handleEmail}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >City</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               value="Amtredam" 
               autoCapitalize = "none"
            //    onChangeText = {this.handleEmail}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Country</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               value="Uk" 
               autoCapitalize = "none"
            //    onChangeText = {this.handleEmail}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Code</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               value="48586" 
               autoCapitalize = "none"
            //    onChangeText = {this.handleEmail}
               
        />
        </View>
        </View>    
             
      
     </View>
     </ScrollView>
    );

}


export default ProfileUpdate;
