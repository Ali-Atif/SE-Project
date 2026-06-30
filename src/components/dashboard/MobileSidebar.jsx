import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
  closeMobileSidebar,
  selectIsMobileSidebarOpen,
} from '@/features/sidebar'
import { ADMIN_NAV_ITEMS } from '@/shared/constants/navigation'
import SidebarBrand from './SidebarBrand'

function navLinkClass({ isActive }) {
  return `admin-sidebar-link${isActive ? ' admin-sidebar-link-active' : ''}`
}

export default function MobileSidebar() {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectIsMobileSidebarOpen)

  const handleClose = () => dispatch(closeMobileSidebar())

  useEffect(() => {
    if (!isOpen) return undefined

    const handleEscape = (e) => {
      if (e.key === 'Escape') dispatch(closeMobileSidebar())
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, dispatch])

  if (!isOpen) return null

  return (
    <>
      <div
        className="admin-overlay md:hidden"
        onClick={handleClose}
        aria-hidden="true"
      />
      <aside
        className="admin-mobile-sidebar md:hidden"
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <header className="admin-mobile-sidebar-header">
          <SidebarBrand
            showLabel
            onClick={handleClose}
            className="admin-mobile-sidebar-brand"
          />
        </header>

        <nav className="admin-sidebar-nav">
          <ul className="m-0 list-none p-0">
            {ADMIN_NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={navLinkClass}
                  onClick={handleClose}
                >
                  <Icon className="admin-sidebar-icon shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
