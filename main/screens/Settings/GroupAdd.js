import React, { useEffect ,useState} from "react";
import { View,Text,TextInput, TouchableOpacity
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
        <Modal
        style={styles.addGroupModal}
        animationType={"slide"}
        transparent={true} 
        hasBackdrop={true}
        backdropColor="black"
        backdropOpacity= {1}
        visible={props.visible}
        onRequestClose={() => {}}>
        <TouchableOpacity
          style={styles.GroupModal}
          activeOpacity={1}
          onPressOut={() => {}}>
              <View style={styles.modelClose} >
                  <Text style={styles.modlTextAdd}>Add Group</Text>
              <Icon onPress={props.Close} style={styles.modelCloseicon}  name="close"/>
                  
              </View>
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Group Name"
               placeholderTextColor = "#888"
               autoCapitalize = "none"
              //  onChangeText = {handleEmail}
               />
                <TextInput
            placeholder="Type Comment"
            style = {styles.inputTextarea}
            // value={this.state.comment.value}
            // onChangeText={value => this.onChangeComment(value)}
            // onPress={() => this.uploadComment()}
            multiline={true}
            maxLength={200}
            numberOfLines={5}
          />
              <View style={styles.button}><Text style={styles.textcolor}>Add</Text></View>
        </TouchableOpacity>
  </Modal>
    );

}

export default GroupAdd;
