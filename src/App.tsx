'use client'

import type React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/GlobalStyles'
import Home from './pages/Home'
import NewContact from './pages/NewContact'

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'new'>('home')

  const handleNewContact = () => {
    setCurrentPage('new')
  }

  const handleBackToHome = () => {
    setCurrentPage('home') // Fecha o formulário
  }

  return (
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        {currentPage === 'home' ? (
          <Home onNewContact={handleNewContact} />
        ) : (
          <NewContact onBack={handleBackToHome} />
        )}
      </Provider>
    </Router>
  )
}

export default App
