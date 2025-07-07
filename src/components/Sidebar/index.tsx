'use client'

import type React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setFilter } from '../../store/contactsSlice'
import type { ContactCategory } from '../../types/Contact'
import {
  SidebarContainer,
  SidebarItem,
  CategoryCount,
  NewContactButton
} from './styles'

interface SidebarProps {
  onNewContact?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onNewContact }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { contacts, filter } = useAppSelector((state) => state.contacts)

  const getCategoryCount = (category: ContactCategory): number => {
    switch (category) {
      case 'todos':
        return contacts.length
      case 'favoritos':
        return contacts.filter((contact) => contact.favorito).length
      case 'familia':
        return contacts.filter((contact) => contact.categoria === 'familia')
          .length
      case 'amigos':
        return contacts.filter((contact) => contact.categoria === 'amigos')
          .length
      case 'trabalho':
        return contacts.filter((contact) => contact.categoria === 'trabalho')
          .length
      default:
        return 0
    }
  }

  const handleFilterChange = (category: ContactCategory) => {
    dispatch(setFilter(category))
  }

  const categories = [
    { key: 'todos' as ContactCategory, label: 'Todos', icon: '📋' },
    { key: 'favoritos' as ContactCategory, label: 'Favoritos', icon: '⭐' },
    { key: 'familia' as ContactCategory, label: 'Família', icon: '❤️' },
    { key: 'amigos' as ContactCategory, label: 'Amigos', icon: '🗑️' },
    { key: 'trabalho' as ContactCategory, label: 'Trabalho', icon: '🍊' }
  ]

  const handleNewContactClick = () => {
    if (onNewContact) {
      onNewContact() // Usa a prop se existir
    } else {
      navigate('/novo') // Fallback para navegação padrão
    }
  }

  return (
    <SidebarContainer>
      {categories.map((category) => (
        <SidebarItem
          key={category.key}
          active={filter === category.key}
          onClick={() => handleFilterChange(category.key)}
        >
          <span>{category.icon}</span>
          <span>{category.label}</span>
          <CategoryCount>{getCategoryCount(category.key)}</CategoryCount>
        </SidebarItem>
      ))}
      <NewContactButton onClick={handleNewContactClick}>
        Novo Contato
      </NewContactButton>
    </SidebarContainer>
  )
}

export default Sidebar
