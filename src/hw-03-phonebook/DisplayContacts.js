import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ContactItem, ContactList, DeleteBtn } from './styles/ContactDisplay.styled';
import { FormButton, FormInput } from './styles/AddContactForm.styled';

export default class DisplayContacts extends Component {
  static propTypes =  {
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

  state={
    filter:''
  }
  
  checkItem=(item)=>{
    if (item.name.toUpperCase().includes(this.state.filter)) return true;
    if (item.number.toString().includes(this.state.filter)) return true;
    return false;
  }

  render() {
    return (
      <div>
        <FormInput
          type='text' 
          value={this.state.filter} 
          placeholder='find a contact'
          onChange={(e)=>this.setState({filter:e.target.value.toUpperCase()})}
        />
        <div style={{display:'flex'}}>
          <FormButton onClick={()=>this.props.setTemplateContacts()}>Set template contacts</FormButton>
          <FormButton onClick={()=>this.props.removeAllContacts()}>Remove all contacts</FormButton>
        </div>
        <ContactList>
          {this.props.contacts.filter(this.checkItem).map(({id,name,number})=>(
            <ContactItem key={id}>
              {name}:  {number}
              <DeleteBtn onClick={()=>this.props.removeContact(id)}>Delete</DeleteBtn>
            </ContactItem>
          ))}
        </ContactList>
      </div>
    )
  }
}

