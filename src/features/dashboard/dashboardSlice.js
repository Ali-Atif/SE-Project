import { createSlice } from '@reduxjs/toolkit'
import { statsCards, analyticsChartData, recentActivity } from '@/data/dashboardData'

const initialState = {
  stats: statsCards,
  analytics: analyticsChartData,
  recentActivity,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
})

export default dashboardSlice.reducer
