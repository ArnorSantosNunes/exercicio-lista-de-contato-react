import type React from 'react'
import Sidebar from '../../components/Sidebar'
import ContactList from '../../components/ContactList'
import { Container, MainContent } from '../../styles/GlobalStyles'

const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ContactList />
      </MainContent>
    </Container>
  )
}

export default Home
