import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormButton, FormInput, FormLabel } from './styles/AddContactForm.styled';

export default class AddContactForm extends Component {
  static propTypes = {submitFunction:PropTypes.func.isRequired}

  state={
    name:'',
    number:''
  }
  submitHandler=(e)=>{
    e.preventDefault(); 
    const { name, number } = e.target.elements;
    this.props.submitFunction(name.value,number.value)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <FormLabel htmlFor='name'>Ім'я контакту</FormLabel>
          <FormInput
            id='name'
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <FormLabel htmlFor='number'>Телефонний номер</FormLabel>
          <FormInput
            id='number'  
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <FormButton type='submit'>Додати контакт</FormButton>
      </form>
    )
  }
}