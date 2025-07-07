import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Contact, ContactCategory } from '../types/Contact'

interface ContactsState {
  contacts: Contact[]
  filter: ContactCategory
}

const initialState: ContactsState = {
  contacts: [
    {
      id: '1',
      nomeCompleto: 'Bianca',
      email: 'teste1@teste.com',
      telefone: '(11) 9 9999-9999',
      categoria: 'familia',
      favorito: true
    },
    {
      id: '2',
      nomeCompleto: 'Mae',
      email: 'teste2@teste.com',
      telefone: '(11) 9 9999-8888',
      categoria: 'familia',
      favorito: true
    },
    {
      id: '3',
      nomeCompleto: 'Rafael',
      email: 'teste3@teste.com',
      telefone: '(11) 9 9999-7777',
      categoria: 'trabalho',
      favorito: false
    },
    {
      id: '4',
      nomeCompleto: 'Sergio',
      email: 'teste4@teste.com',
      telefone: '(11) 9 9999-6666',
      categoria: 'trabalho',
      favorito: false
    },
    {
      id: '5',
      nomeCompleto: 'Gui',
      email: 'teste5@teste.com',
      telefone: '(11) 9 9999-5555',
      categoria: 'amigos',
      favorito: false
    },
    {
      id: '6',
      nomeCompleto: 'Chris',
      email: 'teste6@teste.com',
      telefone: '(11) 9 9999-4444',
      categoria: 'amigos',
      favorito: false
    }
  ],
  filter: 'todos'
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const newContact: Contact = {
        ...action.payload,
        id: Date.now().toString()
      }
      state.contacts.push(newContact)
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state.contacts[index] = action.payload
      }
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const contact = state.contacts.find(
        (contact) => contact.id === action.payload
      )
      if (contact) {
        contact.favorito = !contact.favorito
      }
    },
    setFilter: (state, action: PayloadAction<ContactCategory>) => {
      state.filter = action.payload
    }
  }
})

export const {
  addContact,
  removeContact,
  updateContact,
  toggleFavorite,
  setFilter
} = contactsSlice.actions
export default contactsSlice.reducer
