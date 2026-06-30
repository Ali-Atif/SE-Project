export const env = {
  useMockApi: import.meta.env.VITE_USE_MOCK_API !== 'false',
  apiUrl: import.meta.env.VITE_API_URL || '/api',
}
