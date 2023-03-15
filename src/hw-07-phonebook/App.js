import { Provider } from 'react-redux'
import { store } from './redux/store'

import Section from 'generalComponents/Section'
import AddContactForm from './components/ContactForm'
import DisplayContacts from './components/DisplayContacts'

export default function App() {

  return (
    <Provider store={store}>
    <Section type='task' title='Книга контактів'>
      <Section label='Add contact'>
        <AddContactForm/>
      </Section>
      <Section label='Contact list'>
        <DisplayContacts/>
      </Section>
    </Section>
    </Provider>
  )
}
