import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from '@/features/auth'
import { sidebarReducer } from '@/features/sidebar'
import { userReducer } from '@/features/user'
import { dashboardReducer } from '@/features/dashboard'
import { baseApi } from '@/store/api/baseApi'

import '@/store/api/authApi'
import '@/store/api/contactApi'

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  user: userReducer,
  dashboard: dashboardReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export default rootReducer
