import { Link } from 'react-router-dom'
import { Bell, Shield, Palette, User } from 'lucide-react'
import { useAppSelector } from '@/hooks'
import { selectUserProfile } from '@/features/user'
import { selectCurrentUser } from '@/features/auth'
import { PageHeader } from '@/components/dashboard'
import { ROUTES } from '@/shared/constants/routes'

const settingsSections = [
  {
    icon: User,
    title: 'Profile',
    description: 'Manage your personal information and account details.',
    action: 'View Profile',
    to: ROUTES.PROFILE,
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Configure email and push notification preferences.',
    action: 'Configure',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Update password, enable 2FA, and manage sessions.',
    action: 'Manage',
  },
  {
    icon: Palette,
    title: 'Appearance',
    description: 'Customize theme and display preferences.',
    action: 'Customize',
  },
]

export default function Settings() {
  const authUser = useAppSelector(selectCurrentUser)
  const profile = useAppSelector(selectUserProfile)
  const displayUser = authUser ?? profile

  return (
    <div className="admin-page">
      <PageHeader
        title="Settings"
        description="Manage your account and application preferences."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {settingsSections.map(({ icon: Icon, title, description, action, to }) => (
          <article key={title} className="admin-card">
            <div className="flex items-start gap-4">
              <div className="admin-stat-icon shrink-0">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base font-semibold text-text">{title}</h2>
                <p className="mt-1 text-sm text-text-muted">{description}</p>
                {to ? (
                  <Link to={to} className="btn btn-outline btn-sm mt-4">
                    {action}
                  </Link>
                ) : (
                  <button type="button" className="btn btn-outline btn-sm mt-4">
                    {action}
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="admin-card mt-4">
        <h2 className="text-base font-semibold text-text">Account Information</h2>
        <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-text-muted">Name</dt>
            <dd className="mt-0.5 font-medium text-text">{displayUser?.name}</dd>
          </div>
          <div>
            <dt className="text-sm text-text-muted">Email</dt>
            <dd className="mt-0.5 font-medium text-text">{displayUser?.email}</dd>
          </div>
          <div>
            <dt className="text-sm text-text-muted">Role</dt>
            <dd className="mt-0.5 font-medium text-text">{profile?.role}</dd>
          </div>
          <div>
            <dt className="text-sm text-text-muted">Department</dt>
            <dd className="mt-0.5 font-medium text-text">{profile?.department}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
