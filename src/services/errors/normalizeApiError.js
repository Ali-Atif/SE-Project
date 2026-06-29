/**
 * Extract a readable error message from RTK Query mutation/query errors.
 */
export function normalizeApiError(error, fallback = 'Something went wrong') {
  if (!error) return null

  if (typeof error.data === 'string') return error.data
  if (error.data?.message) return error.data.message

  return fallback
}

export const getApiErrorMessage = normalizeApiError
