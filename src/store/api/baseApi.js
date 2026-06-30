import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_CONFIG } from '@/config/api'
import { clearCredentials } from '@/features/auth'
import { mockBaseQuery } from '@/services/mock/mockBaseQuery'

const liveBaseQuery = fetchBaseQuery({
  baseUrl: API_CONFIG.baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

async function baseQueryWithReauth(args, api, extraOptions) {
  const queryFn = API_CONFIG.useMockApi ? mockBaseQuery : liveBaseQuery
  const result = await queryFn(args, api, extraOptions)

  if (!API_CONFIG.useMockApi && result.error?.status === 401) {
    api.dispatch(clearCredentials())
  }

  return result
}

export const baseApi = createApi({
  reducerPath: API_CONFIG.reducerPath,
  baseQuery: baseQueryWithReauth,
  tagTypes: API_CONFIG.tagTypes,
  endpoints: () => ({}),
})
