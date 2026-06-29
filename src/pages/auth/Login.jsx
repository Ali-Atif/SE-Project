import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLoginMutation } from '@/store/api'
import { getApiErrorMessage } from '@/services/errors/normalizeApiError'
import { isValidEmail, validatePassword } from '@/shared/utils'
import { ROUTES } from '@/shared/constants/routes'

export default function Login() {
  const location = useLocation()
  const [login, { isLoading, error, reset }] = useLoginMutation()
  const registrationSuccess = location.state?.registered

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationError, setValidationError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValidationError('')
    reset()

    if (!email || !password) {
      setValidationError('Email and password are required')
      return
    }

    if (!isValidEmail(email)) {
      setValidationError('Please enter a valid email address')
      return
    }

    const passwordError = validatePassword(password)
    if (passwordError) {
      setValidationError(passwordError)
      return
    }

    try {
      await login({ email, password }).unwrap()
    } catch {
      // Error surfaced via mutation state
    }
  }

  const displayError = validationError || getApiErrorMessage(error)

  return (
    <div className="card">
      <h1>Login</h1>
      <p className="text-text-muted">Sign in to access your dashboard.</p>

      {registrationSuccess && (
        <div className="alert border border-primary/30 bg-primary/10 text-primary">
          Account created successfully. Please sign in with your credentials.
        </div>
      )}

      {displayError && <div className="alert alert-error">{displayError}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
          {isLoading ? 'Signing in…' : 'Login'}
        </button>
      </form>

      <p className="form-footer">
        Don&apos;t have an account? <Link to={ROUTES.REGISTER}>Register</Link>
      </p>
    </div>
  )
}
