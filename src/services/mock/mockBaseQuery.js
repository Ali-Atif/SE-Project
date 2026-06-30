import { getMockUsers, saveMockUsers } from '@/services/mock/mockUserStorage'
import {
  setAuthSession,
  getAuthSession,
  clearAuthSession,
} from '@/services/storage/authStorage'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function generateToken() {
  return `mock_token_${Date.now()}_${Math.random().toString(36).slice(2)}`
}

function apiError(status, message) {
  return { error: { status, data: { message } } }
}

const handlers = {
  'POST /auth/login': async (body) => {
    await delay(500)

    const users = getMockUsers()
    const user = users.find(
      (u) => u.email === body.email && u.password === body.password
    )

    if (!user) {
      return apiError(401, 'Invalid email or password')
    }

    const token = generateToken()
    const { password, ...safeUser } = user
    void password
    setAuthSession(token, safeUser)

    return { data: { token, user: safeUser } }
  },

  'POST /auth/register': async (body) => {
    await delay(500)

    const users = getMockUsers()

    if (users.some((u) => u.email === body.email)) {
      return apiError(409, 'An account with this email already exists')
    }

    const newUser = {
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      password: body.password,
    }

    users.push(newUser)
    saveMockUsers(users)

    return { data: { message: 'Account created successfully' } }
  },

  'POST /auth/logout': async () => {
    await delay(200)
    clearAuthSession()
    return { data: null }
  },

  'GET /auth/me': async () => {
    await delay(300)

    const session = getAuthSession()
    if (!session) {
      return apiError(401, 'Session expired')
    }

    return { data: session.user }
  },

  'POST /contact': async (body) => {
    await delay(600)

    if (!body?.name || !body?.email || !body?.message) {
      return apiError(400, 'All fields are required')
    }

    return { data: { success: true } }
  },
}

export async function mockBaseQuery({ url, method = 'GET', body }) {
  const key = `${method} ${url}`
  const handler = handlers[key]

  if (!handler) {
    return apiError(404, `No mock handler for ${key}`)
  }

  return handler(body)
}
