import React, { useEffect ,useState} from "react";
import {TextInput , TouchableOpacity,Modal, Text,Image,ScrollView,View} from 'react-native';
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
      const [Feilds, setFeilds] = useState({});
      useEffect(() => {
          profileView()
         
      },[]);
      const onProfileChange = (text ,stateProp) =>
      {
    
      
          setprofileFeild({ ...profileFeild, [stateProp]: text });
      
        
          if (text !== "" && text !== '') {
          if (!Feilds.hasOwnProperty(text)) {
              setFeilds({ 
               ...Feilds,
               [stateProp]:text
            }); 
          }
            else if (Feilds.hasOwnProperty(stateProp)) {
              if (Feilds[stateProp] === text) {
      
                delete Feilds[stateProp]
              }
              else {
                  Feilds[stateProp] = text
              }
            }
          }
          else if (Feilds.hasOwnProperty(stateProp)) {
            delete Feilds[stateProp]
      
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
               placeholder = "Name"
               name="first_name"
               value={profileFeild.first_name} 
               autoCapitalize = "none"
               onChangeText={(text)=>onProfileChange(text, 'first_name')}
    
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Home</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Home"
               name="address"
               value={profileFeild.address} 
               autoCapitalize = "none"
               onChangeText={(text)=>onProfileChange(text, 'address')}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >City</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "City"
               name="city"
               value={profileFeild.city} 
               autoCapitalize = "none"    
               onChangeText={(text)=>onProfileChange(text, 'city')}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Country</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Country"
               name="country"
               value={profileFeild.country} 
               autoCapitalize = "none"
               onChangeText={(text)=>onProfileChange(text, 'country')}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Code</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Code"
               name="code"
               value={profileFeild.code}  
               autoCapitalize = "none"
               onChangeText={(text)=>onProfileChange(text, 'code')}
               
        />
        </View>
        <View style={styles.EditField}> 
        <Text style={styles.editlabel} >Password</Text>
        <TextInput style = {styles.editProfile}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               name="password"
               value={profileFeild.password}  
               autoCapitalize = "none"
               onChangeText={(text)=>onProfileChange(text, 'password')}
               
        />
        </View>
        </View>    
             
        <TouchableOpacity  onPress={() => ProfileUpdate()}  >
                      <Text  >EDIT</Text>      
                    </TouchableOpacity>
     </View>
     </ScrollView>
    );

}


export default ProfileUpdate;
