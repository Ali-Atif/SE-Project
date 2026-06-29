import { env } from './env'

export const API_CONFIG = {
  baseUrl: env.apiUrl,
  useMockApi: env.useMockApi,
  reducerPath: 'api',
  tagTypes: ['User', 'Dashboard'],
}
