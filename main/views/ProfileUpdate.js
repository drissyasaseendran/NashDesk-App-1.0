import React, { useEffect ,useState} from "react";
import {TextInput , Modal, Text,Image,ScrollView,View} from 'react-native';
import {styles} from '../styles/profileStyles'
import {profileApiPath} from '../endpoints'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'
function ProfileUpdate (props){
    const token = getAccessToken()
    const [profileFeild,setprofileFeild] = useState({
      address: "",
      image:"",
      city: "",
      code: "",
      country: "",
      email_id: "",
      first_name: "",
      mobile: "",
        
    
        })
      useEffect(() => {
          profileView()
         
      },[]);
      const onProfileChange = (e,name, value) =>
      {
          setprofileFeild({ ...profileFeild, [e.target.name]: e.target.value });
         
          if (e.target.value !== "" && e.target.value !== '') {
          if (!Feilds.hasOwnProperty(e.target.value)) {
              setFeilds({ 
               ...Feilds,
               [e.target.name]:e.target.value
            }); 
          }
            else if (Feilds.hasOwnProperty(e.target.name)) {
              if (Feilds[e.target.name] === e.target.value) {
      
                delete Feilds[e.target.name]
              }
              else {
                  Feilds[e.target.name] = e.target.value
              }
            }
          }
          else if (Feilds.hasOwnProperty(e.target.name)) {
            delete Feilds[e.target.name]
      
          }
      }
      const profileView = () =>
      {
          let data =
          {
            "access_token": token ,
            "request_type":"view"
          }
        
          axios.post(profileApiPath, data)
        .then((resp) => {
      
          if (resp.data.status === "success") {
              let res = resp.data.payload.data
              setprofileFeild({ ...profileFeild,image:res[0].image,
              email_id:res[0].email_id,first_name:res[0].first_name, 
              mobile:res[0].mobile,address:res[0].address, city:res[0].city ,
              code: res[0].code,country:res[0].country,group:res[0].group_name,
              agent_type:res[0].agent_type
            });
            }
        
        })
        }
        const ProfileUpdate = () =>
        {
            let data =  {
                "access_token":token,
                "agt_sett_id":'',      
                "fields": Feilds,   
                "request_type":"update"   
            }
           
            axios.post(profileApiPath, data)
            .then((resp) => {
          
              if (resp.data.status === "success") {
                alert("sucess")
                }
            
            })
        }
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
               name="first_name"
               value={profileFeild.first_name} 
               autoCapitalize = "none"
               onChangeText = {onProfileChange}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Home</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               name="address"
               value={profileFeild.address} 
               autoCapitalize = "none"
               onChangeText = {onProfileChange}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >City</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               name="city"
               value={profileFeild.city} 
               autoCapitalize = "none"
               onChangeText = {onProfileChange}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Country</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               name="country"
               value={profileFeild.country} 
               autoCapitalize = "none"
               onChangeText = {onProfileChange}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Code</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               name="code"
               value={profileFeild.code}  
               autoCapitalize = "none"
               onChangeText = {onProfileChange}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Password</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               name="password"
               value={profileFeild.password}  
               autoCapitalize = "none"
               onChangeText = {onProfileChange}
               
        />
        </View>
        </View>    
             
      
     </View>
     </ScrollView>
    );

}


export default ProfileUpdate;
