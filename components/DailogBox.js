import React, { useEffect,useRef, useState } from "react";
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
function DialogBox (props){
	
	useEffect(() => {
	
	},[props.DailogVisible])



	return (
	
            <Portal>
				<Dialog visible={props.DailogVisible} >
				<Dialog.Title>Alert</Dialog.Title>
				<Dialog.Content>
					<Paragraph>This is simple dialog</Paragraph>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={props.delete()}>Done</Button>
				</Dialog.Actions>
				<Dialog.Actions>
					<Button onPress={props.hideDialog()}>Cancel</Button>
				</Dialog.Actions>
				</Dialog>
			</Portal>
	
	
	  );
  
  }
  
 
  export default DialogBox;
  
