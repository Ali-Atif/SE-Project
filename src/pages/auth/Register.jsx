import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '@/store/api'
import { getApiErrorMessage } from '@/services/errors/normalizeApiError'
import { isValidEmail, validatePassword } from '@/shared/utils'
import { ROUTES } from '@/shared/constants/routes'

export default function Register() {
  const navigate = useNavigate()
  const [register, { isLoading, error, reset }] = useRegisterMutation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationError, setValidationError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValidationError('')
    reset()

    if (!name || !email || !password || !confirmPassword) {
      setValidationError('All fields are required')
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

    if (password !== confirmPassword) {
      setValidationError('Passwords do not match')
      return
    }

    try {
      await register({ name, email, password }).unwrap()
      navigate(ROUTES.LOGIN, { replace: true, state: { registered: true } })
    } catch {
      // Error surfaced via mutation state
    }
  }

  const displayError = validationError || getApiErrorMessage(error)

  return (
    <div className="card">
      <h1>Register</h1>
      <p className="text-text-muted">Create an account to get started.</p>

      {displayError && <div className="alert alert-error">{displayError}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

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
            placeholder="At least 6 characters"
            autoComplete="new-password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat your password"
            autoComplete="new-password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
          {isLoading ? 'Creating account…' : 'Register'}
        </button>
      </form>

      <p className="form-footer">
        Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
      </p>
    </div>
  )
}
