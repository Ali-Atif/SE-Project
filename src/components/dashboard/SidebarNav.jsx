import { NavLink } from 'react-router-dom'
import { ADMIN_NAV_ITEMS } from '@/shared/constants/navigation'

function navLinkClass({ isActive }) {
  return `admin-sidebar-link${isActive ? ' admin-sidebar-link-active' : ''}`
}

export default function SidebarNav({ onNavigate }) {
  return (
    <nav className="admin-sidebar-nav">
      <ul className="m-0 list-none p-0">
        {ADMIN_NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink to={to} className={navLinkClass} onClick={onNavigate}>
              <Icon className="admin-sidebar-icon shrink-0" aria-hidden="true" />
              <span className="truncate">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
