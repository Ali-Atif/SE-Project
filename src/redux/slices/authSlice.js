import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isInitialized: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { user, token } = action.payload

      if (user !== undefined) {
        state.user = user
      }

      if (token !== undefined) {
        state.token = token
      }

      state.isAuthenticated = Boolean(state.token)
    },
    clearCredentials(state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
    },
    setInitialized(state) {
      state.isInitialized = true
    },
  },
})

export const { setCredentials, clearCredentials, setInitialized } = authSlice.actions
export default authSlice.reducer
