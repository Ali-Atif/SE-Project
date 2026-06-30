import { LayoutDashboard, Users, BarChart3, Settings } from 'lucide-react'
import { ROUTES } from '@/shared/constants/routes'

export const ADMIN_NAV_ITEMS = [
  { to: ROUTES.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
  { to: ROUTES.USERS, label: 'Users', icon: Users },
  { to: ROUTES.ANALYTICS, label: 'Analytics', icon: BarChart3 },
  { to: ROUTES.SETTINGS, label: 'Settings', icon: Settings },
]

export const PAGE_TITLES = {
  [ROUTES.DASHBOARD]: 'Dashboard',
  [ROUTES.USERS]: 'Users',
  [ROUTES.ANALYTICS]: 'Analytics',
  [ROUTES.SETTINGS]: 'Settings',
  [ROUTES.PROFILE]: 'Profile',
}
