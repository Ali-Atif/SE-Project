import { Link } from 'react-router-dom'
import { LogoIcon } from '@/shared/ui'
import { ROUTES } from '@/shared/constants/routes'

export default function SidebarBrand({ showLabel = false, onClick, className = '' }) {
  return (
    <Link
      to={ROUTES.HOME}
      className={`admin-sidebar-brand${showLabel ? ' admin-sidebar-brand-labeled' : ''}${className ? ` ${className}` : ''}`}
      aria-label="SE Project home"
      onClick={onClick}
    >
      <LogoIcon className="admin-sidebar-brand-icon" />
      {showLabel && <span className="admin-sidebar-brand-text">SE Project</span>}
    </Link>
  )
}
