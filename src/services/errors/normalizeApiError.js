/**
 * Extract a readable error message from RTK Query mutation/query errors.
 */
export function getApiErrorMessage(error, fallback = 'Something went wrong') {
  if (!error) return null

  if (typeof error.data === 'string') return error.data
  if (error.data?.message) return error.data.message

  return fallback
}
