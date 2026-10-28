import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="brand" to="/">
        <span className="brand-mark">P</span>
        Peoplely
      </NavLink>
      <nav aria-label="Main navigation">
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/users">
          Users
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/about">
          About
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
