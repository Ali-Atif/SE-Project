import { baseApi } from '@/store/api/baseApi'

export function getMiddleware(getDefaultMiddleware) {
  return getDefaultMiddleware().concat(baseApi.middleware)
}
