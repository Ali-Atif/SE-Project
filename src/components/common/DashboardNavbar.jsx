import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '@/shared/ui'
import { ROUTES } from '@/shared/constants/routes'

function navLinkClass({ isActive }) {
  return `nav-link${isActive ? ' nav-link-active' : ''}`
}

export default function DashboardNavbar() {
  return (
    <nav
      className="dashboard-nav"
      aria-label="Dashboard navigation"
    >
      <ul className="m-0 flex min-w-0 flex-1 list-none flex-nowrap gap-1 p-0">
        <li>
          <NavLink to={ROUTES.DASHBOARD} className={navLinkClass}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PROFILE} className={navLinkClass}>
            Profile
          </NavLink>
        </li>
      </ul>

      <ThemeToggle className="shrink-0" />
    </nav>
  )
}
