import { Link, useParams } from 'react-router-dom'

function UserDetails() {
  const { id } = useParams()
  return <section className="content-page detail-page"><Link className="back-link" to="/users">← Back to users</Link><div className="detail-card"><span className="avatar large avatar-4">#{id}</span><p className="eyebrow">USER PROFILE</p><h1>User details</h1><p className="detail-id">You are viewing the profile with ID <strong>{id}</strong>.</p><p>This dynamic route was created with React Router using <code>/users/:id</code>.</p></div></section>
}

export default UserDetails
