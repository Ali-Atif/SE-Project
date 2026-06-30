import { Navigate } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectIsAuthenticated, selectIsAuthInitialized } from '@/features/auth'
import { ROUTES } from '@/shared/constants/routes'

export default function GuestRoute({ children }) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const isInitialized = useAppSelector(selectIsAuthInitialized)

  if (!isInitialized) {
    return null
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />
  }

  return children
}
