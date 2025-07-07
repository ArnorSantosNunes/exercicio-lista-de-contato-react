'use client'

import type React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { addContact } from '../../store/contactsSlice'
import type { Contact } from '../../types/Contact'
import ContactForm from '../../components/ContactFrom'

interface NewContactProps {
  onBack: () => void
}

const NewContact: React.FC<NewContactProps> = ({ onBack }) => {
  const dispatch = useAppDispatch()

  const handleSubmit = (contactData: Omit<Contact, 'id'>) => {
    dispatch(addContact(contactData))
    onBack() // Fecha o formulário após cadastrar
  }

  return <ContactForm onSubmit={handleSubmit} onCancel={onBack} />
}

export default NewContact
