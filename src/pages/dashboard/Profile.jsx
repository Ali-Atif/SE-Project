import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectCurrentUser } from '@/redux/slices'
import { useLogoutMutation } from '@/store/api'
import { UserAvatar } from '@/components/common'
import { ROUTES } from '@/shared/constants/routes'

export default function Profile() {
  const navigate = useNavigate()
  const user = useAppSelector(selectCurrentUser)
  const [logout, { isLoading }] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logout().unwrap()
    } catch {
      // clearCredentials runs in onQueryStarted finally block
    }
    navigate(ROUTES.LOGIN, { replace: true })
  }

  return (
    <div className="card container-narrow mx-auto">
      <div className="mb-8 flex flex-col items-center gap-4 border-b border-border pb-8 text-center sm:flex-row sm:text-left">
        <UserAvatar
          user={user}
          linked={false}
          className="h-16! w-16! text-xl! shrink-0"
        />
        <div>
          <h1 className="mb-1">{user?.name}</h1>
          <p className="m-0 text-text-muted">{user?.email}</p>
        </div>
      </div>

      <dl className="mt-0">
        <div className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[6rem_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-text-muted">Name</dt>
          <dd className="m-0 wrap-break-word">{user?.name}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[6rem_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-text-muted">Email</dt>
          <dd className="m-0 wrap-break-word">{user?.email}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[6rem_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-text-muted">User ID</dt>
          <dd className="m-0 font-mono text-sm break-all">{user?.id}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-8 max-md:flex-col">
        <Link to={ROUTES.DASHBOARD} className="btn btn-outline max-md:w-full max-md:justify-center">
          Back to Dashboard
        </Link>
        <button
          type="button"
          className="btn btn-danger max-md:w-full max-md:justify-center"
          onClick={handleLogout}
          disabled={isLoading}
        >
          {isLoading ? 'Logging out…' : 'Logout'}
        </button>
      </div>
    </div>
  )
}
