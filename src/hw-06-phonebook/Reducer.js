import { createSlice, configureStore, nanoid } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

const templateContacts=[
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ]
const initialState=templateContacts//localStorage.getItem('contactList');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState:initialState,
  reducers: {
    addContact: {
        reducer: (state,action)=>{
            // console.log('action:',action,'','state:',current(state));
            if(action.payload) state.push(action.payload);
        },
        prepare:(contact)=>{
            const id=nanoid();
            if (typeof(contact)!=='object' || !contact.name || (!contact.value && !contact.number)) return {payload:null}
            return {payload:{id,name:contact.name,number:contact.number || contact.value}}
        }
    },
    deleteContact: (state,action) => {
        // console.log(action)
        return state.filter((contact)=>contact.id!==action.payload.id);
    },
    setTemplateContacts: (state)=>{
        // console.log('setting, state before:',current(state))
        return templateContacts
    },
    deleteAllContacts:(state)=>{
        // console.log('deleting, state before:',current( state))
        return ([])
    }
  }
})

export const { addContact,deleteContact,setTemplateContacts,deleteAllContacts } = contactsSlice.actions

const store = configureStore({
  reducer: {contacts:contactsSlice.reducer}
})

export const ReduxProvider = ({children})=>(
    <Provider store={store}>
        {children}
    </Provider>
)