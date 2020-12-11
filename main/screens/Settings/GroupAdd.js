import React, { useEffect ,useState} from "react";
import { View,Text, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from '../../styles/groupStyles'
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const screenHeight = window.height;
const screenWidth = window.width;
function GroupAdd (props){
	useEffect(() => {
     
	 
		},[props.visible]);
    return (
        <View style={styles.modilecontainer}>
        <Modal
        animationType="slide"
        visible={props.visible}
        onRequestClose={() => {
            // this.closeButtonFunction()
        }}
        >
        <View
            style={{
            height: '50%',
        //    width :screenWidth,
            marginTop: 8,
            backgroundColor:'#fff'
            }}>
            <View style={styles.footer}>
            <Text style={styles.headerText}>This is Half Modal</Text>
            </View>
            <TouchableOpacity  style={styles.button}
          >
            <Text style={styles.addButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
        </Modal></View>
    );

}

export default GroupAdd;
