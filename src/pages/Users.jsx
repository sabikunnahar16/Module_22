import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error('Unable to load users.')
        setUsers(await response.json())
      } catch (requestError) {
        setError(requestError.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <section className="content-page">
      <div className="page-intro"><div><p className="eyebrow">THE DIRECTORY</p><h1>Meet the people</h1><p>Browse everyone in your growing network.</p></div><span className="count-badge">{users.length || '—'} people</span></div>
      {loading && <div className="message-card">Loading your directory<span className="loading-dots">...</span></div>}
      {error && <div className="message-card error-message">{error}</div>}
      {!loading && !error && <div className="users-grid">{users.map((user) => <Link className="user-card" to={`/users/${user.id}`} key={user.id}><span className={`avatar avatar-${user.id}`}>{user.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><div><h2>{user.name}</h2><p>{user.email.toLowerCase()}</p></div><span className="arrow">↗</span></Link>)}</div>}
    </section>
  )
}

export default Users
