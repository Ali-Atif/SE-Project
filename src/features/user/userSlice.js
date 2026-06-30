import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {
    id: 'usr_01',
    name: 'Alex Morgan',
    email: 'alex.morgan@acme.io',
    role: 'Administrator',
    avatar: null,
    department: 'Operations',
    joinedAt: '2024-03-15',
  },
  notifications: 3,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile(state, action) {
      state.profile = { ...state.profile, ...action.payload }
    },
    clearNotifications(state) {
      state.notifications = 0
    },
  },
})

export const { setUserProfile, clearNotifications } = userSlice.actions
export default userSlice.reducer
