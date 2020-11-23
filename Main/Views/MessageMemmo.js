import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../Styles/messegemomoStyles'
import { Dimensions } from 'react-native';
import {

    Avatar,
    Title,
    Caption,


} from 'react-native-paper';

function Memo (){

    return (
      <ScrollView>
          <View style={styles.header}></View>
              <View style={styles.canvasBody}>
                <View style={styles.memoBody}>
                <View  style={styles.memoViews}>
                <Icon size={15} color='#888' name="checkbox-blank-circle-outline"/> 
                <Title style={styles.memotitle}>acxxxxxxxxx   </Title>
                </View>
                     
                                    
                                                <Caption style={styles.caption}>12/88/45</Caption>
                                              <Icon   name="trash" color={'#FFAE42'}/>
                                            </View>

                                            <View
                                              style={{
                                                borderBottomColor: '#c7c5c5',
                                                borderBottomWidth: 1,
                                                marginLeft: 5,
                                                marginRight: 5
                                              }}
                                            >
                    </View>


            <View>
            <TextInput
                  multiline={true}

                  style={styles.memoinput}
                  placeholder="Type a message here"
                  onChange={e => setMessage(e.target.value)}
                  underlineColorAndroid='rgba(0,0,0,0)' />
              <View style={styles.sendContainer}>
                <TouchableOpacity
                  underlayColor={'#4e4273'}
                 
                  >
                  <Text style={styles.sendLabel}>SEND</Text>
                </TouchableOpacity>
              </View>
             </View>

        </View>
      </ScrollView>
    );

}


export default Memo;
