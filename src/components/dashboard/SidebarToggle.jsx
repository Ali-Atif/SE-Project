import { useEffect, useState } from 'react'
import { Menu, PanelLeftClose, PanelLeftOpen, X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import {
  toggleSidebar,
  toggleMobileSidebar,
  selectIsSidebarOpen,
  selectIsMobileSidebarOpen,
} from '@/features/sidebar'

const MOBILE_QUERY = '(max-width: 47.99rem)'

function handleSidebarToggle(dispatch, isMobile) {
  if (isMobile) {
    dispatch(toggleMobileSidebar())
  } else {
    dispatch(toggleSidebar())
  }
}

export default function SidebarToggle({ className = '' }) {
  const dispatch = useAppDispatch()
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen)
  const isMobileSidebarOpen = useAppSelector(selectIsMobileSidebarOpen)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const handleChange = (event) => setIsMobile(event.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const isOpen = isMobile ? isMobileSidebarOpen : isSidebarOpen

  const Icon = isMobile
    ? isOpen
      ? X
      : Menu
    : isOpen
      ? PanelLeftClose
      : PanelLeftOpen

  return (
    <button
      type="button"
      className={`admin-sidebar-toggle${className ? ` ${className}` : ''}`}
      onClick={() => handleSidebarToggle(dispatch, isMobile)}
      aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      aria-expanded={isOpen}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
    </button>
  )
}
