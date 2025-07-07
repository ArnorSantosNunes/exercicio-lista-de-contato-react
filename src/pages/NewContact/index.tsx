'use client'

import type React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { addContact } from '../../store/contactsSlice'
import type { Contact } from '../../types/Contact'
import ContactForm from '../../components/ContactForm'

const NewContact: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSubmit = (contactData: Omit<Contact, 'id'>) => {
    dispatch(addContact(contactData))
    navigate('/')
  }

  const handleCancel = () => {
    navigate('/')
  }

  return <ContactForm onSubmit={handleSubmit} onCancel={handleCancel} />
}

export default NewContact
