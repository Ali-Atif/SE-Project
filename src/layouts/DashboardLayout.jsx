import { Outlet } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectIsSidebarOpen } from '@/features/sidebar'
import { Sidebar, MobileSidebar, Navbar } from '@/components/dashboard'
import ScrollToTop from '@/routes/ScrollToTop'
import { useTheme } from '@/hooks/useTheme'

export default function DashboardLayout() {
  const { theme, isDark } = useTheme()
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen)

  return (
    <div
      className={`dashboard-theme admin-layout${isSidebarOpen ? '' : ' admin-layout-sidebar-closed'}${isDark ? ' dark' : ''}`}
      data-theme={theme}
    >
      <ScrollToTop />
      <Sidebar />
      <MobileSidebar />

      <div className="admin-shell">
        <Navbar />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
