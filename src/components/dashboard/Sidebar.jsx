import { useAppSelector } from '@/hooks'
import { selectIsSidebarOpen } from '@/features/sidebar'
import SidebarBrand from './SidebarBrand'
import SidebarNav from './SidebarNav'

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

      <SidebarNav />
    </aside>
  )
}
