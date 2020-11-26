import React, { useEffect ,useState} from "react";
import {styles} from '../styles/leadershipStyles'
import {ScrollView ,Text,View,Image} from 'react-native';
import {leadershipApiPath} from '../endpoints'
import {getAccessToken} from '../utils/Authenticator'
import axios from 'axios'
function Leader (){
    const token = getAccessToken()
    const [state , setState] = useState({
        name : "",
        count : ""
    })
    const [image,setImage] = useState('')
    useEffect(() => {
        leadershipView()
       
    },[]);
    const leadershipView = () =>
    {
        let data =
        {
          "access_token": token ,
          "request_type":"view"
        }
      
        axios.post(leadershipApiPath, data)
      .then((resp) => {
       
        if (resp.data.status === "success") {
            let res = resp.data.payload.data
         
           
          }
      
      })
      }
    return (
      <ScrollView>
      <View style={styles.header}></View>
      <View style={styles.canvasBody}>
             <View style={styles.leaderbody}>
                <View style={styles.leaderContent}>
                    <View style={styles.leaderContentFeildImage}>
                       <Image style={styles.leaderImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    </View>
                    <View style={styles.leaderContentFeild}>
                       <Text style={styles.leadername} >Jenifer Lopus</Text>
                    </View>
                    <View >
                        <Text style={styles.leadercount}>80</Text>
                    </View>
                </View>
                <View style={styles.leaderContent}>
                    <View style={styles.leaderContentFeildImage}>
                       <Image style={styles.leaderImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    </View>
                    <View style={styles.leaderContentFeild} >
                       <Text style={styles.leadername} >Jenifer Lopus</Text>
                    </View>
                    <View >
                        <Text style={styles.leadercount}>8.588</Text>
                    </View>
                </View>
                <View style={styles.leaderContent}>
                    <View style={styles.leaderContentFeildImage}>
                       <Image style={styles.leaderImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    </View>
                    <View style={styles.leaderContentFeild}>
                       <Text style={styles.leadername} >Jenifer Lopus</Text>
                    </View>
                    <View >
                        <Text style={styles.leadercount}>889</Text>
                    </View>
                </View>
            </View>
      </View>
      </ScrollView>
    );

}

export default Leader;
