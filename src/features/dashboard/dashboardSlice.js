import { createSlice } from '@reduxjs/toolkit'
import {
  statsCards,
  analyticsChartData,
  revenueChartData,
  recentActivity,
} from '@/data/dashboardData'

const initialState = {
  stats: statsCards,
  analytics: analyticsChartData,
  revenue: revenueChartData,
  recentActivity,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateStats(state, action) {
      state.stats = action.payload
    },
    addActivity(state, action) {
      state.recentActivity = [action.payload, ...state.recentActivity].slice(0, 10)
    },
  },
})

export const { updateStats, addActivity } = dashboardSlice.actions
export default dashboardSlice.reducer
