import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ContactList } from './styles/ContactDisplay.styled';
import { FormInput } from './styles/AddContactForm.styled';

function DisplayContacts({contacts}) {
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
      <ContactList>
        {contacts.filter(checkItem).map(({id,name,number})=>(
          <li key={id}>
            {name}:  {number}
          </li>
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
  ).isRequired
}

export default DisplayContacts
