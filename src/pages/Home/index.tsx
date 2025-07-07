// src/pages/Home/index.tsx
import type React from 'react'
import Sidebar from '../../components/Sidebar'
import ContactList from '../../components/ContactList'
import { Container, MainContent } from '../../styles/GlobalStyles'

// Adicione esta interface
interface HomeProps {
  onNewContact?: () => void
}

const Home: React.FC<HomeProps> = ({ onNewContact }) => {
  return (
    <Container>
      {/* Passe a prop para o Sidebar */}
      <Sidebar onNewContact={onNewContact} />
      <MainContent>
        <ContactList />
      </MainContent>
    </Container>
  )
}

export default Home
