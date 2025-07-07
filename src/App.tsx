import type React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/GlobalStyles'
import Home from './pages/Home'
import NewContact from './pages/NewContact'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<NewContact />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
