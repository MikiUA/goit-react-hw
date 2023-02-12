import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ContactItem, ContactList, DeleteBtn } from './styles/ContactDisplay.styled';
import { FormButton, FormInput } from './styles/AddContactForm.styled';

function DisplayContacts({contacts, removeContact, removeAllContacts,setTemplateContacts}) {
  const [filter,setFilter]=useState('');

  function checkItem(item){
    if (item.name.toUpperCase().includes(filter)) return true;
    if (item.number.toString().includes(filter)) return true;
    return false;
  }

  return (
    <div>
      <FormInput
        type='text' 
        value={filter} 
        placeholder='find a contact'
        onChange={(e)=>setFilter(e.target.value.toUpperCase())}
      />
      <div style={{display:'flex'}}>
        <FormButton onClick={()=>setTemplateContacts()}>Set template contacts</FormButton>
        <FormButton onClick={()=>removeAllContacts()}>Remove all contacts</FormButton>
      </div>
      <ContactList>
        {contacts.filter(checkItem).map(({id,name,number})=>(
          <ContactItem key={id}>
            {name}:  {number}
            <DeleteBtn onClick={()=>removeContact(id)}>Delete</DeleteBtn>
          </ContactItem>
        ))}
      </ContactList>
    </div>
  )
}

DisplayContacts.propTypes = {
  contacts:PropTypes.arrayOf(
    PropTypes.exact({
      id:PropTypes.any,
      name:PropTypes.string,
      number:PropTypes.string
    })
  ).isRequired,
  removeContact:PropTypes.func.isRequired,
  removeAllContacts:PropTypes.func.isRequired,
  setTemplateContacts:PropTypes.func.isRequired
}

export default DisplayContacts
