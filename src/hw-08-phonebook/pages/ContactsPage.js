import Section from 'generalComponents/Section';
import React from 'react'
import ContactForm from './components-contacts/ContactForm';
import DisplayContactList from './components-contacts/DisplayContactList'
import TitleBar from './components-contacts/TitleBar';

export default function ContactsPage() {
  return (
    <Section type='task' title={<TitleBar/>}>
      <DisplayContactList/>
      <ContactForm/>{/* state of it (including isOpened) is handled by redux context */}
    </Section>
  )
}
