import React, {  useState } from 'react'
import Loader from 'generalComponents/Loader';
import { ContactList } from 'hw-02-phonebook/styles/ContactDisplay.styled';
import { FormInput } from 'hw-02-phonebook/styles/AddContactForm.styled';

import { useGetContactsQuery } from 'hw-07-phonebook/redux/commentsApi';
import SingleContact from './SingleContact';


export default function DisplayContacts() {
  const [filter,setFilter]=useState('');
  const {data:contacts,isLoading}=useGetContactsQuery();
  
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
        {isLoading?<Loader/>:(
          contacts.filter(checkItem).map((item)=>(
            <SingleContact key={item.id} contact={item}/>
          ))
        )}
      </ContactList>
    </div>
  )
}