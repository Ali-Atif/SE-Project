import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
  closeMobileSidebar,
  selectIsMobileSidebarOpen,
} from '@/features/sidebar'
import SidebarBrand from './SidebarBrand'
import SidebarNav from './SidebarNav'

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

        <SidebarNav onNavigate={handleClose} />
      </aside>
    </>
  )
}
