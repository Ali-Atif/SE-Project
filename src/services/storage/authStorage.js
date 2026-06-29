import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '@/shared/constants/storageKeys'

export function setAuthSession(token, user) {
  localStorage.setItem(AUTH_TOKEN_KEY, token)
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user))
}

export function getAuthSession() {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    const userData = localStorage.getItem(AUTH_USER_KEY)
    if (!token || !userData) return null
    return { token, user: JSON.parse(userData) }
  } catch {
    return null
  }
}

export function clearAuthSession() {
  localStorage.removeItem(AUTH_TOKEN_KEY)
  localStorage.removeItem(AUTH_USER_KEY)
}
