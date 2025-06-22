import { useState } from 'react'
import { supabase } from '../supabaseClient'

console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL)
console.log("Supabase Anon Key:", import.meta.env.VITE_SUPABASE_ANON_KEY)

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignup = async () => {
    console.log("Signing up with:", email)
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      console.error("Signup error:", error)
      setMessage(error.message)
    } else {
      console.log("Signup success")
      setMessage('Check your email to confirm your signup ✅')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem' }}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>{message}</p>
    </div>
  )
}

export default Signup
