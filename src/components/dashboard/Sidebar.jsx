import { NavLink } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectIsSidebarOpen } from '@/features/sidebar'
import { ADMIN_NAV_ITEMS } from '@/shared/constants/navigation'
import SidebarBrand from './SidebarBrand'

function navLinkClass({ isActive }) {
  return `admin-sidebar-link${isActive ? ' admin-sidebar-link-active' : ''}`
}

export default function Sidebar() {
  const isOpen = useAppSelector(selectIsSidebarOpen)

  return (
    <aside
      className={`admin-sidebar hidden md:flex${isOpen ? '' : ' admin-sidebar-closed'}`}
      aria-label="Main navigation"
      aria-hidden={!isOpen}
    >
      <div className="admin-sidebar-header">
        <SidebarBrand />
      </div>

      <nav className="admin-sidebar-nav">
        <ul className="m-0 list-none p-0">
          {ADMIN_NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink to={to} className={navLinkClass}>
                <Icon className="admin-sidebar-icon shrink-0" aria-hidden="true" />
                <span className="truncate">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
