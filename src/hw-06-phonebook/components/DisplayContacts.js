import React, {  useState } from 'react'
import { deleteAllContacts, deleteContact, setTemplateContacts } from 'hw-06-phonebook/Reducer';
import { useDispatch, useSelector } from 'react-redux';

import { ContactItem, ContactList, DeleteBtn } from 'hw-02-phonebook/styles/ContactDisplay.styled';
import { FormButton, FormInput } from 'hw-02-phonebook/styles/AddContactForm.styled';

export default function DisplayContacts() {
  const [filter,setFilter]=useState('');
  const dispatch=useDispatch();
  // let contacts=[];
  function checkItem(item){
    if (item.name.toUpperCase().includes(filter)) return true;
    if (item.number.toString().includes(filter)) return true;
    return false;
  }
  function setTemplateContactsLocal(){dispatch(setTemplateContacts());}
  function deleteContactLocal(id){dispatch(deleteContact({id:id}))}
  function deleteAllContactsLocal(){dispatch(deleteAllContacts())}
  
  let contacts=useSelector(state=>state.contacts);
  // console.log(st);
  return (
    <div>
      <FormInput
        type='text' 
        value={filter} 
        placeholder='find a contact'
        onChange={(e)=>setFilter(e.target.value.toUpperCase())}
      />
      <div style={{display:'flex'}}>
        <FormButton onClick={setTemplateContactsLocal}>Set template contacts</FormButton>
        <FormButton onClick={deleteAllContactsLocal}>Remove all contacts</FormButton>
      </div>
      <ContactList>
        {contacts.filter(checkItem).map(({id,name,number})=>(
          <ContactItem key={id}>
            {name}:  {number}
            <DeleteBtn onClick={()=>deleteContactLocal(id)}>Delete</DeleteBtn>
          </ContactItem>
        ))}
      </ContactList>
    </div>
  )
}