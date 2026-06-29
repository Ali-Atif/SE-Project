import { baseApi } from '@/store/api/baseApi'
import { setCredentials, clearCredentials, setInitialized } from '@/redux/slices'
import { setAuthSession, clearAuthSession } from '@/services/storage/authStorage'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(_credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCredentials(data))
          setAuthSession(data.token, data.user)
          dispatch(setInitialized())
        } catch {
          // Mutation error handled by the calling component
        }
      },
      invalidatesTags: ['Dashboard'],
    }),

    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } finally {
          dispatch(clearCredentials())
          clearAuthSession()
          dispatch(baseApi.util.resetApiState())
        }
      },
      invalidatesTags: ['User', 'Dashboard'],
    }),

    getMe: builder.query({
      query: () => '/auth/me',
      providesTags: ['User'],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled
          dispatch(setCredentials({ user }))
        } catch {
          // Session validation failure handled by AuthInitializer
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetMeQuery,
} = authApi
