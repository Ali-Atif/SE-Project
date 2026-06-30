import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import rootReducer from './rootReducer'
import { getMiddleware } from '@/store/middleware'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getMiddleware,
})

setupListeners(store.dispatch)
