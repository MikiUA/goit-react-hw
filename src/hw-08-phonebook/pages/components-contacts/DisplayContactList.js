import SingleContact from './SingleContact';
import React, { useState } from 'react'
import { List, TextField } from '@mui/material';
import { useGetContactsQuery } from 'hw-08-phonebook/redux/contactsApi';
import Loader from 'generalComponents/Loader';

export default function DisplayContactList() {

  const {data:contacts,isLoading}=useGetContactsQuery();
  const [filter,setFilter]=useState('');
  
  function checkItem(item){
    if (item.name.toUpperCase().includes(filter)) return true;
    if (item.number.toString().includes(filter)) return true;
    return false;
  }

  return (
    <div>
      <TextField
    type='text' 
    value={filter} 
    placeholder='find a contact'
    onChange={(e)=>setFilter(e.target.value.toUpperCase())}
  />
    {isLoading?<Loader/>:(
      <List>   
        {contacts.filter(checkItem).map((item)=>(
          <SingleContact key={item.id} contact={item}/>
        ))}
      </List>
    )}
    </div>
  )
}
