import { Link, useLocation } from 'react-router-dom'
import { Bell } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
  closeMobileSidebar,
  selectIsMobileSidebarOpen,
  selectIsSidebarOpen,
  setSidebarOpen,
} from '@/features/sidebar'
import { selectUserProfile, selectNotificationCount } from '@/features/user'
import { selectCurrentUser } from '@/redux/slices'
import { ThemeToggle } from '@/shared/ui'
import { UserAvatar } from '@/components/common'
import { PAGE_TITLES } from '@/shared/constants/navigation'
import { ROUTES } from '@/shared/constants/routes'
import SidebarToggle from './SidebarToggle'
import { DesktopNavbarSearch, MobileNavbarSearch } from './NavbarSearch'

export default function Navbar() {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const authUser = useAppSelector(selectCurrentUser)
  const profile = useAppSelector(selectUserProfile)
  const notificationCount = useAppSelector(selectNotificationCount)
  const isMobileSidebarOpen = useAppSelector(selectIsMobileSidebarOpen)
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen)
  const pageTitle = PAGE_TITLES[location.pathname] ?? 'Dashboard'
  const displayUser = authUser ?? profile

  const handleProfileClick = () => {
    if (isMobileSidebarOpen) {
      dispatch(closeMobileSidebar())
    }
    if (isSidebarOpen) {
      dispatch(setSidebarOpen(false))
    }
  }

  return (
    <header className="admin-navbar">
      <div className="flex min-w-0 shrink-0 items-center gap-3">
        <SidebarToggle />

        <h1 className="truncate text-lg font-semibold text-text md:text-xl">
          {pageTitle}
        </h1>
      </div>

      <DesktopNavbarSearch />

      <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
        <MobileNavbarSearch />

        <button
          type="button"
          className="admin-icon-btn relative"
          aria-label={`Notifications${notificationCount ? `, ${notificationCount} unread` : ''}`}
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
          {notificationCount > 0 && (
            <span className="admin-notification-badge" aria-hidden="true">
              {notificationCount}
            </span>
          )}
        </button>

        <ThemeToggle className="admin-icon-btn" />

        <Link
          to={ROUTES.PROFILE}
          onClick={handleProfileClick}
          className="admin-navbar-profile flex"
          aria-label={`Open profile for ${displayUser?.name ?? 'user'}`}
        >
          <div className="hidden text-right md:block">
            <p className="m-0 text-sm font-medium leading-tight text-text">
              {displayUser?.name}
            </p>
            <p className="m-0 text-xs text-text-muted">
              {profile?.role ?? 'User'}
            </p>
          </div>
          <UserAvatar user={displayUser} linked={false} className="h-9! w-9! text-xs!" />
        </Link>
      </div>
    </header>
  )
}
