import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: true,
  isMobileOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isOpen = !state.isOpen
    },
    setSidebarOpen(state, action) {
      state.isOpen = action.payload
    },
    openMobileSidebar(state) {
      state.isMobileOpen = true
    },
    closeMobileSidebar(state) {
      state.isMobileOpen = false
    },
    toggleMobileSidebar(state) {
      state.isMobileOpen = !state.isMobileOpen
    },
  },
})

export const {
  toggleSidebar,
  setSidebarOpen,
  openMobileSidebar,
  closeMobileSidebar,
  toggleMobileSidebar,
} = sidebarSlice.actions

export default sidebarSlice.reducer
