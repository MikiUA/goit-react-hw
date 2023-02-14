import Section from 'generalComponents/Section';
import React, { Component } from 'react'
import AddContactForm from './AddContactForm';
import DisplayContacts from './DisplayContacts';

export default class App extends Component {

  //we have no props so no constructor here
  state={
    contacts:[],
    filter:''
  }

  componentDidMount(){
    let storedContacts = JSON.parse(localStorage.getItem('contactList'));
    if (storedContacts) this.setState({contacts:storedContacts})
  }

  componentDidUpdate(){
    localStorage.setItem('contactList',JSON.stringify(this.state.contacts));
  }

  //#region contacts state functions
  checkContactExists=(newContact)=>{
    for (let i=0;i<this.state.contacts.length;i++){
      if (this.state.contacts[i].name.toLowerCase()===newContact.name.toLowerCase())  return true;
      if (this.state.contacts[i].number===newContact.number) return true;
    }
    return false;
  }

  addContact=(name,number)=>{
    if (this.checkContactExists({name,number})) alert('You already have this contact')
    else this.setState({contacts:(
      [...this.state.contacts, {
        id:Date.now(),
        name,
        number
      }])
    })
  }

  removeContact=(contactID)=>{
    this.setState({contacts:(
        this.state.contacts.filter(item=>item.id!==contactID)
      )});
  }

  removeAllContacts=()=>{this.setState({contacts:[]});}
  setTemplateContacts=()=>{this.setState({contacts:templateContacts});}
  //#endregion

  render() {
    return (
      <Section type='task' title='Книга контактів'>
        <Section label='Add contact'>
          <AddContactForm submitFunction={this.addContact}/></Section>
        <Section label='Contact list'>
          <DisplayContacts contacts={this.state.contacts} removeContact={this.removeContact} removeAllContacts={this.removeAllContacts} setTemplateContacts={this.setTemplateContacts}/></Section>
      </Section>
    )
  }

  
}

const templateContacts=[
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
]
