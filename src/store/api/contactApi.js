import { baseApi } from '@/store/api/baseApi'

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitContact: builder.mutation({
      query: (contactData) => ({
        url: '/contact',
        method: 'POST',
        body: contactData,
      }),
    }),
  }),
})

export const { useSubmitContactMutation } = contactApi
