import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
  setCredentials,
  clearCredentials,
  setInitialized,
  selectAuthToken,
  selectIsAuthInitialized,
} from '@/features/auth'
import { useGetMeQuery } from '@/store/api'
import { getAuthSession, clearAuthSession } from '@/services/storage/authStorage'

export default function AuthInitializer({ children }) {
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectAuthToken)
  const isInitialized = useAppSelector(selectIsAuthInitialized)
  const storedSession = useMemo(() => getAuthSession(), [])

  useEffect(() => {
    if (storedSession) {
      dispatch(setCredentials({ user: storedSession.user, token: storedSession.token }))
    } else {
      dispatch(setInitialized())
    }
  }, [dispatch, storedSession])

  const needsMeValidation = Boolean(token) && Boolean(storedSession) && !isInitialized

  const { isFetching, isError, isUninitialized } = useGetMeQuery(token, {
    skip: !needsMeValidation,
  })

  useEffect(() => {
    if (!needsMeValidation) return
    if (isUninitialized || isFetching) return

    if (isError) {
      dispatch(clearCredentials())
      clearAuthSession()
    }

    dispatch(setInitialized())
  }, [needsMeValidation, isFetching, isError, isUninitialized, dispatch])

  if (!isInitialized) {
    return (
      <div className="page-centered" aria-live="polite">
        <p className="text-text-muted">Loading…</p>
      </div>
    )
  }

  return children
}
