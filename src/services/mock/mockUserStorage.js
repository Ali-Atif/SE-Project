import { MOCK_USERS_KEY } from '@/shared/constants/storageKeys'

export function getMockUsers() {
  try {
    const data = localStorage.getItem(MOCK_USERS_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveMockUsers(users) {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users))
}
