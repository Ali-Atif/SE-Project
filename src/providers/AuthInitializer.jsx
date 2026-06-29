import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
  setCredentials,
  clearCredentials,
  setInitialized,
  selectAuthToken,
  selectIsAuthInitialized,
} from '@/redux/slices'
import { useGetMeQuery } from '@/store/api'
import { getAuthSession, clearAuthSession } from '@/services/storage/authStorage'

export default function AuthInitializer({ children }) {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectAuthToken)
  const isInitialized = useAppSelector(selectIsAuthInitialized)

  const [shouldValidateStoredSession, setShouldValidateStoredSession] = useState(
    () => Boolean(getAuthSession())
  )

  useEffect(() => {
    const session = getAuthSession()

    if (session) {
      dispatch(setCredentials({ user: session.user, token: session.token }))
    } else {
      dispatch(setInitialized())
    }
  }, [dispatch])

  const { isFetching, isError, isUninitialized } = useGetMeQuery(token, {
    skip: !token || !shouldValidateStoredSession,
  })

  useEffect(() => {
    if (!shouldValidateStoredSession || !token) return
    if (isUninitialized || isFetching) return

    if (isError) {
      dispatch(clearCredentials())
      clearAuthSession()
    }

    setShouldValidateStoredSession(false)
    dispatch(setInitialized())
  }, [
    shouldValidateStoredSession,
    token,
    isFetching,
    isError,
    isUninitialized,
    dispatch,
  ])

  if (!isInitialized) {
    return (
      <div className="page-centered" aria-live="polite">
        <p className="text-text-muted">Loading…</p>
      </div>
    )
  }

  return children
}
