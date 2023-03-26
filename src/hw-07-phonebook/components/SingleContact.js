import React, { useEffect, useState } from 'react'
import Notification from 'generalComponents/Notification';
import { ContactItem, DeleteBtn } from 'hw-02-phonebook/styles/ContactDisplay.styled';
import AddContactForm from './ContactForm';

import { useDispatch, useSelector } from 'react-redux';
import { useDeleteContactMutation, useEditContactMutation } from 'hw-07-phonebook/redux/commentsApi';
import { resetItem, selectItem } from 'hw-07-phonebook/redux/currentlyEditedItem';


export default function SingleContact({contact:{id,name,number}}) {
    const currentlyEditedItem=useSelector(state=>state.currentlyEditedItem);
    const dispatch=useDispatch();
    const [isEditMode,setMode]=useState(false);

    const [deleteContact,{isLoading:isDelLoading,isError:isDelErr,error:delErr}]=useDeleteContactMutation();
    const [,{isLoading:isEditLoading}]=useEditContactMutation();
    
    function deleteContactLocal(id){deleteContact({id})}

    useEffect(()=>{
        if (currentlyEditedItem===id) setMode(true);
        else setMode(false);
    },[currentlyEditedItem,id])

  return (
    <ContactItem>
            {isEditMode?
                <AddContactForm contact={{id,name,number}}/>
            :(
                <>{name} :  {number}</>
            )}
            
            {isDelLoading?<DeleteBtn> Loading... </DeleteBtn>:
            <DeleteBtn onClick={()=>deleteContactLocal(id)}>Delete</DeleteBtn>
            }
            {isEditLoading?
                <DeleteBtn> Loading... </DeleteBtn>
            :(!isEditMode)?
                <DeleteBtn onClick={()=>dispatch(selectItem(id))}>Edit contact</DeleteBtn>

            :   <DeleteBtn onClick={()=>dispatch(resetItem())}>Cancel</DeleteBtn>
            }
            {isDelErr?<Notification title='deletion error' message={delErr && delErr.message}/>:''}
    </ContactItem>
  )
}