'use client'

import type React from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import {
  removeContact,
  toggleFavorite,
  updateContact
} from '../../store/contactsSlice'
import type { Contact } from '../../types/Contact'
import ContactForm from '../ContactForm'
import {
  CardContainer,
  ContactName,
  ContactCategory,
  ContactInfo,
  ActionsContainer,
  ActionButton,
  FavoriteIcon,
} from './styles'

interface ContactCardProps {
  contact: Contact
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const dispatch = useAppDispatch()
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este contato?')) {
      dispatch(removeContact(contact.id))
    }
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(contact.id))
  }

  const handleEdit = (updatedContact: Omit<Contact, 'id'>) => {
    dispatch(updateContact({ ...updatedContact, id: contact.id }))
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <ContactForm
        initialData={contact}
        onSubmit={handleEdit}
        onCancel={() => setIsEditing(false)}
        isEditing
      />
    )
  }

  return (
    <CardContainer>
      <ContactName>{contact.nomeCompleto}</ContactName>
      <ContactCategory>{contact.categoria}</ContactCategory>
      <ContactInfo>{contact.telefone}</ContactInfo>
      <ContactInfo>{contact.email}</ContactInfo>

      <ActionsContainer>
        <ActionButton variant="edit" onClick={() => setIsEditing(true)}>
          ✏️
        </ActionButton>
        <ActionButton variant="delete" onClick={handleDelete}>
          🗑️
        </ActionButton>
        <ActionButton variant="favorite" onClick={handleToggleFavorite}>
          <FavoriteIcon isFavorite={contact.favorito}>
            {contact.favorito ? '⭐' : '☆'}
          </FavoriteIcon>
        </ActionButton>
      </ActionsContainer>
    </CardContainer>
  )
}

export default ContactCard
