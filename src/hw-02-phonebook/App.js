import Section from 'generalComponents/Section';
import React, { useState } from 'react'
import AddContactForm from './AddContactForm';
import DisplayContacts from './DisplayContacts';

export function App() {
  const [contacts,setContacts]=useState(initialContacts);

  function checkContactExists(newContact){
    for (let i=0;i<contacts.length;i++){
      if (contacts[i].name.toLowerCase()===newContact.name.toLowerCase())  return true;
      if (contacts[i].number===newContact.number) return true;
    }
    return false;
  }
  function addContact(name,number){
    if (checkContactExists({name,number})) alert('You already have this contact')
    else setContacts((previous)=>(
      [...previous, {
        id:Date.now(),
        name,
        number
      }]))
  }
  return (
    <Section type='task' title='Книга контактів'>
      <Section label='Add contact'>
        <AddContactForm submitFunction={addContact}/></Section>
      <Section label='Contact list'>
        <DisplayContacts contacts={contacts}/></Section>
    </Section>
  )
}

const initialContacts=[
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
]
