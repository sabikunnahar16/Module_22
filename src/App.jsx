import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="site-footer">Built with React, Hooks, and curiosity.</footer>
    </div>
  )
}

export default App
