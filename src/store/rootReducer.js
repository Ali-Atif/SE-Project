import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from '@/redux/slices'
import { baseApi } from '@/store/api/baseApi'

// Import feature APIs so injectEndpoints runs before the store is created
import '@/store/api/authApi'
import '@/store/api/dashboardApi'
import '@/store/api/contactApi'

const rootReducer = combineReducers({
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export default rootReducer
