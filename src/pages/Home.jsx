import { useRef, useState } from 'react'

function Home() {
  const [background, setBackground] = useState('#f6f7fb')
  const [inputValue, setInputValue] = useState('')
  const [refOutput, setRefOutput] = useState('')
  const [submittedUser, setSubmittedUser] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', age: '' })
  const [profile, setProfile] = useState({ name: 'মোঃ রাহাত হাসান', email: 'rahat.hasan@peoplely.dev' })
  const [skills, setSkills] = useState(['React', 'CSS', 'Curiosity'])
  const inputRef = useRef(null)

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedUser(form)
  }

  const resetForm = () => {
    setForm({ name: '', email: '', age: '' })
    setSubmittedUser(null)
  }

  return (
    <div className="home-page" style={{ '--page-background': background }}>
      <section className="hero">
        <div>
          <p className="eyebrow">YOUR PEOPLE, ORGANIZED · ঢাকার কমিউনিটি</p>
          <h1>A little more <em>human</em> in your directory.</h1>
          <p className="hero-copy">
            Explore a friendly collection of people while practicing the building blocks of modern React.
          </p>
          <div className="button-row">
            <button className="button primary" onClick={() => setBackground(background === '#f6f7fb' ? '#e5f5f0' : '#f6f7fb')}>
              Change page color
            </button>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="art-dot dot-one" />
          <span className="art-dot dot-two" />
          <div className="art-card">
            <span className="avatar large">রহ</span>
            <div><strong>রাহাত হাসান</strong><small>Product designer · Dhaka</small></div>
            <span className="status-dot" />
          </div>
          <div className="art-card secondary-card">
            <span className="avatar small">নু</span>
            <div><strong>নুসরাত জাহান</strong><small>Marketing lead · Chattogram</small></div>
          </div>
        </div>
      </section>

      <section className="practice-grid">
        <div className="card ref-card">
          <div className="section-heading"><span className="step">01</span><div><h2>Quick hello</h2><p>Practice useRef</p></div></div>
          <label htmlFor="quick-input">Your message · আপনার বার্তা</label>
          <div className="input-action">
            <input id="quick-input" ref={inputRef} value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="Type something..." />
            <button className="button secondary" onClick={() => setRefOutput(inputRef.current.value || 'Nothing typed yet')}>Show value</button>
          </div>
          <button className="text-button" onClick={() => inputRef.current.focus()}>Focus the input →</button>
          {refOutput && <p className="ref-output">useRef read: <strong>{refOutput}</strong></p>}
        </div>

        <div className="card skill-card">
          <div className="section-heading"><span className="step">02</span><div><h2>My toolkit</h2><p>Practice array state</p></div></div>
          <div className="skill-list">{skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div>
          <button className="text-button" onClick={() => setSkills([...skills, 'Empathy'])} disabled={skills.includes('Empathy')}>+ Add a skill →</button>
          <div className="profile-summary"><strong>{profile.name}</strong><span>{profile.email}</span><button className="text-button" onClick={() => setProfile({ ...profile, name: 'মেহেদী হাসান' })}>Update name with spread →</button></div>
        </div>
      </section>

      <section className="form-section">
        <div className="section-heading"><span className="step">03</span><div><h2>Create a user</h2><p>Practice controlled forms and object state</p></div></div>
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-field"><label htmlFor="name">Name · নাম</label><input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. মোঃ সাকিব রহমান" /></div>
          <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="sam@example.com" /></div>
          <div className="form-field"><label htmlFor="age">Age</label><input id="age" name="age" type="number" min="1" value={form.age} onChange={handleChange} required placeholder="28" /></div>
          <div className="form-actions"><button className="button primary" type="submit">Save user</button><button className="button ghost" type="button" onClick={resetForm}>Reset</button></div>
        </form>
        {submittedUser && <div className="submitted-user"><span className="avatar"> {submittedUser.name.slice(0, 2).toUpperCase()} </span><div><strong>{submittedUser.name}</strong><p>{submittedUser.email} · {submittedUser.age} years old</p></div><span className="saved-label">Saved ✓</span></div>}
      </section>
    </div>
  )
}

export default Home
