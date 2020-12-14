import React, { useEffect} from "react";
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
function DialogBox (props){
	
	useEffect(() => {
	
	},[props.DailogVisible])
	const hideDialog = () =>
	{
		props.hideDialog()
	}
	const action = () =>
	{
		props.delete()
	}
	return (
	
            <Portal>
				<Dialog visible={props.DailogVisible} >
				<Dialog.Title>Confirm</Dialog.Title>
				<Dialog.Content>
					<Paragraph>Are you sure You wanted to delete ?</Paragraph>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={()=>action()}>Done</Button>
				</Dialog.Actions>
				<Dialog.Actions>
					<Button onPress={()=>hideDialog()}>Cancel</Button>
				</Dialog.Actions>
				</Dialog>
			</Portal>
	
	
	  );
  
  }
  
 
  export default DialogBox;
  
