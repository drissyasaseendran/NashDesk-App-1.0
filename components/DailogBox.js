import React, { useEffect} from "react";
import {styles} from '../main/styles/tagStyles'
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
	
            <Portal >
				<Dialog style={{
                borderRadius: 5,
					padding:10
              
            }} visible={props.DailogVisible} >
				<Dialog.Title  style={{
               color:'#666'
              
            }} >Confirm</Dialog.Title>
				<Dialog.Content>
					<Paragraph  style={{
               color:'#888'
              
            }}>Are you sure You wanted to delete ?</Paragraph>
				</Dialog.Content>
				<Dialog.Actions>
					<Button  mode="contained"
					color={'#1a73e8'}
					contentStyle={{ height: 30 ,width:60}} onPress={()=>action()}>Yes</Button>
					<Button   color={'#888'} onPress={()=>hideDialog()}>Cancel</Button>
				</Dialog.Actions>
				</Dialog>
			</Portal>
	
	
	  );
  
  }
  
 
  export default DialogBox;
  
