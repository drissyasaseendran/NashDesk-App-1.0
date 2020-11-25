import React, { useEffect ,useState} from "react";
import {broadcastApiPath} from '../endpoints'
import axios from 'axios'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/messegemomoStyles'
import {
  Title,

} from 'react-native-paper';
import {getAccessToken} from '../utils/Authenticator'

function Memo (){
  
  const [Message, setMessage] = useState("");
  const token = getAccessToken()
  useEffect(() => {
       
    messageMemo()
  
   
  },[]);
  const messageMemo = () =>
  {
 
      let data = {
        "access_token":token,
        "request_type": "view"
        }
        console.log(JSON.stringify(data))
        axios.post(broadcastApiPath, data)
      .then((resp) => {
      
      if (resp.data.status === "success") {
          let res = resp.data.payload.data
          alert(JSON.stringify(res))
          setMessage(res)
    }
  
    })
    
  
  }
    return (
      <ScrollView>
          <View style={styles.header}></View>
              <View style={styles.canvasBody}>
       {  Message && Message.map((msg)  =>
        {  <View style={styles.memoBodyContainer}>
                <View style={styles.memoBody}>
                  <View  style={styles.memoViews}>
                    <Icon size={15} color='#888' name="checkbox-blank-circle-outline"/> 
                    <Title style={styles.memotitle}>Some guy tried to change label style manually, the maintainer reponse:   </Title>
                  </View>
                  <View  style={styles.memoViewsdate}>
                    <Title style={styles.memotitle}>12/05/2001  </Title>
                    <Icon   name="delete" color={'#888'}/>
                  </View>
              </View>
              <View style={styles.memoBody}>
                  <View  style={styles.memoViews}>
                    <Icon size={15} color='#888' name="checkbox-blank-circle-outline"/> 
                    <Title style={styles.memotitle}>Some guy tried to change labe   </Title>
                  </View>
                  <View  style={styles.memoViewsdate}>
                    <Title style={styles.memotitle}>12/05/2001  </Title>
                    <Icon   name="delete" color={'#888'}/>
                  </View>
              </View>
              <View style={styles.memoBody}>
                  <View  style={styles.memoViews}>
                    <Icon size={15} color='#888' name="checkbox-blank-circle-outline"/> 
                    <Title style={styles.memotitle}>You can pass fontSize via style prop. However it will affect both label and input text. There is no way to change only one of them.  </Title>
                  </View>
                  <View  style={styles.memoViewsdate}>
                    <Title style={styles.memotitle}>12/05/2001  </Title>
                    <Icon   name="delete" color={'#888'}/>
                  </View>
              </View>               

              
               </View>})
}
          


      
               <View style={styles.memobtnContainer}>
            <TextInput
                  multiline={true}

                  style={styles.memoinput}
                  placeholder="Type a message here"
                  onChange={e => setMessage(e.target.value)}
                  underlineColorAndroid='rgba(0,0,0,0)' />
             
                <TouchableOpacity
                  underlayColor={'#4e4273'}
                 
                  >
                  <Text style={styles.sendLabel}>SEND</Text>
                </TouchableOpacity>
              </View> 
        </View>
      </ScrollView>
    );

}


export default Memo;
