import Section from 'generalComponents/Section'
import { ReduxProvider } from './Reducer'
import AddContactForm from './components/AddContactForm'
import DisplayContacts from './components/DisplayContacts'

import React from 'react'

export default function App() {

  return (
    <ReduxProvider>
    <Section type='task' title='Книга контактів'>
      <Section label='Add contact'>
        <AddContactForm/>
      </Section>
      <Section label='Contact list'>
        <DisplayContacts/>
      </Section>
    </Section>
    </ReduxProvider>
  )
}
