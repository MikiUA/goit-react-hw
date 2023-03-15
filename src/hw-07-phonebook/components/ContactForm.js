import React, { useEffect, useState } from 'react'

import { useAddContactMutation, useEditContactMutation } from 'hw-07-phonebook/redux/commentsApi';

import { FormButton, FormInput, FormLabel } from 'hw-02-phonebook/styles/AddContactForm.styled';
import Loader from 'generalComponents/Loader';
import Notification from 'generalComponents/Notification';
import { useDispatch } from 'react-redux';
import { resetItem } from 'hw-07-phonebook/redux/currentlyEditedItem';


export default function ContactForm({contact={}}) {
  //basically if there is no contact.id this function adds a contact, but if there is then edits
  const [name,setName]=useState(contact.name||'');
  const [number,setNumber]=useState(contact.number||'');
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);
  
  const dispatch=useDispatch();
  const [addContact,{isSuccess:isSuccessAdd,isLoading:isLoading1,isError:isError1,error:err1}]=useAddContactMutation();
  const [editContact,{isSuccess:isSuccessEdit,isLoading:isLoading2,isError:isError2,error:err2}]=useEditContactMutation();

  useEffect(()=>{
    if (isSuccessAdd){ 
      setName('');setNumber('');setIsLoading(false);
    }
  },[isSuccessAdd]);

  useEffect(()=>{
    if (isSuccessEdit){ 
      dispatch(resetItem());
    }
    //eslint-disable-next-line
  },[isSuccessEdit]);

  useEffect(()=>{
    if (isLoading1||isLoading2) {setIsLoading(true);}
  },[isLoading1,isLoading2]);

  useEffect(()=>{
    if (isError1){setError(err1);}
    if (isError2){setError(err2);}
  },[isError1,isError2,err1,err2]);

  function submitForm(){
    setError(null);
    if (!contact.id) return addContact({name,number})
    else return editContact({id:contact.id,name,number})
  }

  return (
    <form onSubmit={(e)=>{e.preventDefault();submitForm();}}>
      <div>
      <FormLabel htmlFor='acf-name'>Ім'я контакту</FormLabel>
      <FormInput
        id='acf-name'
        value={name}
        onChange={(event)=>(setName(event.target.value))}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </div>
      <div>
      <FormLabel htmlFor='acf-num'>Телефонний номер</FormLabel>
      <FormInput
        id='acf-num'
        value={number}
        onChange={(event)=>(setNumber(event.target.value))}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      </div>
      <FormButton disabled={isLoading} type='submit'>
        {isLoading?<Loader/>:contact.id?'Замінити':'Додати контакт'}
      </FormButton>
      {error?<Notification message={error.message}/>:''}
    </form>
  )
}
