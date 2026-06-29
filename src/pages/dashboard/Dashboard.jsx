import { Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectCurrentUser } from '@/redux/slices'
import { useGetDashboardStatsQuery } from '@/store/api'
import { ROUTES } from '@/shared/constants/routes'

export default function Dashboard() {
  const user = useAppSelector(selectCurrentUser)
  const { data: stats, isLoading, isError } = useGetDashboardStatsQuery()

  const accountStatus = stats?.accountStatus ?? '—'
  const sessionStatus = stats?.sessionStatus ?? '—'
  const profileStatus = stats?.profileStatus ?? '—'

  return (
    <div className="card">
      <h1>Dashboard</h1>
      <p className="lead">Welcome back, {user?.name}!</p>

      <div
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
        aria-label="Account overview"
      >
        <div className="stat-card">
          <span className="stat-value">
            {isLoading ? '…' : isError ? '—' : accountStatus}
          </span>
          <span className="text-[0.8125rem] text-text-muted">Account</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">
            {isLoading ? '…' : isError ? '—' : sessionStatus}
          </span>
          <span className="text-[0.8125rem] text-text-muted">Session</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">
            {isLoading ? '…' : isError ? '—' : profileStatus}
          </span>
          <span className="text-[0.8125rem] text-text-muted">Profile</span>
        </div>
      </div>

      <p className="mt-8 text-text-muted">
        You are logged in. This page is protected and only visible to authenticated users.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 max-lg:flex-col">
        <Link to={ROUTES.PROFILE} className="btn btn-primary max-lg:w-full max-lg:justify-center">
          View Profile
        </Link>
        <Link to={ROUTES.HOME} className="btn btn-outline max-lg:w-full max-lg:justify-center">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
