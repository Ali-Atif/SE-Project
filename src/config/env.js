export const env = {
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  useMockApi: import.meta.env.VITE_USE_MOCK_API !== 'false',
  apiUrl: import.meta.env.VITE_API_URL || '/api',
}
