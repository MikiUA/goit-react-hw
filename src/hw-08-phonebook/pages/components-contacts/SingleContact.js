import React from 'react'
import { IconButton, ListItem, ListItemText } from '@mui/material';
import { Delete, EditOutlined,DeleteOutlineTwoTone } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { editContact } from 'hw-08-phonebook/redux/currentlyEditedItem';
import { useDeleteContactMutation } from 'hw-08-phonebook/redux/contactsApi';


export default function SingleContact({contact:{id,name,number}}) {
  const dispatch=useDispatch();
  const [deleteContact,{isLoading}]=useDeleteContactMutation();
  function handleEditItem(){
    dispatch(editContact({id,name,number}));
  };
  function handleDeleteItem(){
    deleteContact({id});
  };

  return (
    <ListItem>
            <ListItemText primary={name} secondary={number}/>
            <IconButton onClick={handleEditItem}><EditOutlined/></IconButton>
            <IconButton onClick={handleDeleteItem} disabled={isLoading}>{isLoading?<DeleteOutlineTwoTone/>:<Delete/>}</IconButton>
    </ListItem>
  )
}
