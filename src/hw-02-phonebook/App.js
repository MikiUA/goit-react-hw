import Section from 'generalComponents/Section';
import React, { useEffect, useState } from 'react'
import AddContactForm from './AddContactForm';
import DisplayContacts from './DisplayContacts';

export function App() {
  const [contacts,setContacts]=useState([]);
  const componentDidMount=React.useRef(false)

  useEffect(()=>{
    //on component mount check local storage 
    //setState (contacts) to those stored in users storage
    //then set componentDidMount to true
    
    let storedContacts = JSON.parse(localStorage.getItem('contactList'));
    if (storedContacts){
      setContacts_then_return_componentDidMount_true(storedContacts);
    }

    async function setContacts_then_return_componentDidMount_true(contactList){
      await setContacts(contactList);
      componentDidMount.current=true;
    }
  },[]);

  useEffect(()=>{
    //on component update (contacts state is actually the only value that can update it) we store our state in local storage
    //should not affect user expirience or rerender, could even be asyncronous

    if(componentDidMount.current) {
      localStorage.setItem('contactList',JSON.stringify(contacts));
    }
  },[contacts])

  return (
    <Section type='task' title='Книга контактів'>
      <div style={{display:'flex',flexWrap:'wrap'}}>
      <Section label='Add contact'>
        <AddContactForm submitFunction={addContact}/></Section>
      <Section label='Contact list'>
        <DisplayContacts contacts={contacts} removeContact={removeContact} removeAllContacts={removeAllContacts} setTemplateContacts={setTemplateContacts}/></Section>
        </div>    </Section>
  )

  //#region contacts state functions
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

  function removeContact(contactID){
    setContacts(prevState=>(prevState.filter(item=>item.id!==contactID)))
  }

  function removeAllContacts(){setContacts([]);}
  function setTemplateContacts(){setContacts(initialContacts);}
  //#endregion
  
}

const initialContacts=[
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
]
