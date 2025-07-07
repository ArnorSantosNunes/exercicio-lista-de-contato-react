import type React from 'react'
import { useAppSelector } from '../../hooks/redux'
import type { Contact } from '../../types/Contact'
import ContactCard from '../ContactCard'
import { ListContainer, EmptyState } from './styles'

const ContactList: React.FC = () => {
  const { contacts, filter } = useAppSelector((state) => state.contacts)

  const getFilteredContacts = (): Contact[] => {
    switch (filter) {
      case 'favoritos':
        return contacts.filter((contact) => contact.favorito)
      case 'familia':
      case 'amigos':
      case 'trabalho':
        return contacts.filter((contact) => contact.categoria === filter)
      default:
        return contacts
    }
  }

  const filteredContacts = getFilteredContacts()

  if (filteredContacts.length === 0) {
    return <EmptyState>Nenhum contato encontrado</EmptyState>
  }

  return (
    <ListContainer>
      {filteredContacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </ListContainer>
  )
}

export default ContactList
