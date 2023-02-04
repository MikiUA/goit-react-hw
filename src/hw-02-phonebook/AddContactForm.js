import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormButton, FormInput, FormLabel } from './styles/AddContactForm.styled';

function AddContactForm({submitFunction}) {
  const [name,setName]=useState('');
  const [number,setNumber]=useState('');
  //program does not need controlled inputs here, but task does
 
  return (
    <form onSubmit={(e)=>{e.preventDefault(); submitFunction(name,number)}}>
      <div>
      <FormLabel htmlFor='acf-name'>Ім'я контакту</FormLabel>
      <FormInput
        id='acf-name'
        value={name}
        onChange={(event)=>(setName(event.target.value))}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </div>
      <div>
      <FormLabel htmlFor='acf-num'>Телефонний номер</FormLabel>
      <FormInput
        id='acf-num'
        value={number}
        onChange={(event)=>(setNumber(event.target.value))}
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

AddContactForm.propTypes = {
  submitFunction:PropTypes.func
}

export default AddContactForm
