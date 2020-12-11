import React, { useEffect ,useState} from "react";
import { View,Text, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from '../../styles/groupStyles'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const window = Dimensions.get('window');
const screenHeight = window.height;
const screenWidth = window.width;
function GroupAdd (props){
	useEffect(() => {
     
	 
		},[props.visible]);
    return (
        <Modal style={styles.addGroupModal}
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {}}>
        <TouchableOpacity
          style={styles.GroupModal}
          activeOpacity={1}
          onPressOut={() => {}}>
              <View style={styles.modelClose} >
                  <Text style={styles.modlTextAdd}>Add Group</Text>
              <Icon style={styles.modelCloseicon}  name="close"/>
                  
              </View>
              <View style={styles.button}><Text style={styles.textcolor}>Add</Text></View>
        </TouchableOpacity>
  </Modal>
    );

}

export default GroupAdd;
