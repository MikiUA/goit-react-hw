import { Error } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { useAddContactMutation, useEditContactMutation } from 'hw-08-phonebook/redux/contactsApi';
import { cancelEdit, name as editedItemName } from 'hw-08-phonebook/redux/currentlyEditedItem'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/ContactFormOverlay.module.css'
export default function ContactForm() {

    const currentContact=useSelector(state=>state[editedItemName]);
    const [name,setName]=useState(currentContact && currentContact.name);
    const [number,setNumber]=useState(currentContact && currentContact.number);

    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    
    const dispatch=useDispatch();
    const [addContact,{isSuccess:isSuccess1,isLoading:isLoading1,isError:isError1,error:err1}]=useAddContactMutation();
    const [editContact,{isSuccess:isSuccess2,isLoading:isLoading2,isError:isError2,error:err2}]=useEditContactMutation();

    useEffect(()=>{
        if (isSuccess1||isSuccess2) handleCancel();
        // eslint-disable-next-line
    },[isSuccess1,isSuccess2]);

    useEffect(()=>{
        if (isLoading1||isLoading2) {setIsLoading(true);}
    },[isLoading1,isLoading2]);

    useEffect(()=>{
        if (isError1){setError(err1);}
        if (isError2){setError(err2);}
    },[isError1,isError2,err1,err2]);

    function handleSubmit(){
        setError(null);
        if (!currentContact.id) addContact({name,number});
        else editContact({id:currentContact.id,name,number});
        //we either add or edit contact here.
        //if we try adding the contact we have currentContact.id == null/undefined
        //else we edit

        //if isLoading we change submit button to disabled
        //if isSuccess we dispatch(cancelEdit())
        //if isError we console.log error and do nothing
    }
    function handleCancel(){dispatch(cancelEdit())}

    if (!currentContact) return null
    return (
        <div className={styles.wrapper}>
            <div className={styles.overlay}>
        <form onSubmit={e=>{e.preventDefault();handleSubmit()}}>
            <TextField label='name' value={name} onChange={e=>setName(e.target.value)}/>
            <TextField label='number' value={number} onChange={e=>setNumber(e.target.value)}/>
            <Button type='submit' disabled={isLoading}>{isLoading?'Please wait':'Submit'}</Button>
            <Button type='button' onClick={handleCancel}>cancel</Button>
        </form>
        {error?<Error>{error.message}</Error>:''}
        </div>
        </div>
    )
}
