import React, { useEffect ,useState} from "react";
import {ScrollView ,TouchableOpacity,Text,View,Image} from 'react-native';
import {styles} from '../styles/profileStyles'
import ProfileAbout from './ProfileAbout'
import ProfileStatus from './ProfileStatus'
import {profileApiPath} from '../endpoints'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'

function Profile ({navigation}){
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
    return (
      <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.canvasBody}>
                <View style={styles.ProfileBody}> 
                    <Image style={styles.ProfileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <Text style={styles.Profilename} >{profileFeild.first_name}</Text>
                    <Text style={styles.Profilename}>{profileFeild.email_id}</Text>
                </View>
                <View style={styles.ProfileAboutBody}>
                <View style={styles.ProfileContentInside}>
                <View style={styles.ProfileContent}>
                    <ProfileAbout Icon='phone' Feilds={profileFeild.mobile}/>
                    <ProfileAbout Icon='home'  Feilds={profileFeild.address}/>
                    <ProfileAbout Icon='city'  Feilds={profileFeild.city}/>
                    <ProfileAbout Icon='globe-model' Feilds={profileFeild.country}/>
                    <ProfileAbout Icon='globe-model' Feilds={profileFeild.code}/>
                    <TouchableOpacity style={styles.ProfileContentInside} onPress={() => navigation.navigate('ProfileUpdate')}  >
                      <Text  style={styles.ProfileBtn}>EDIT</Text>      
                    </TouchableOpacity>
                    </View>
                  
                </View>
                
              </View>
                  
              <ProfileStatus/>
         
     
          </View>
      </ScrollView >
    );

}


export default Profile;
