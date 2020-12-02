import React, { useEffect, useState } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView
} from 'react-native';

function ModelBox (props){
  const [visible ,setVisible] = useState(true)
  const data = props.visible
	useEffect(() => {
    setVisible(data)
  },[data])
  const Close = () =>
  {
    props.EditPress()
  }
    return (
      <Modal
  animated
  animationType="fade"
  visible={visible}
  transparent
  onRequestClose={() =>handleDismiss()}>
 <View style={styles.overlay}>
  <Text>sgcygsaycgsy</Text>
 
</View>
</Modal>
    
          
      );
            }
 
export default ModelBox;
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
});