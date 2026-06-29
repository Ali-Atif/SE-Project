import { Outlet } from 'react-router-dom'
import { DashboardNavbar } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'

export default function DashboardLayout() {
  const { theme, isDark } = useTheme()

  return (
    <div
      className={`dashboard-theme w-full min-h-full${isDark ? ' dark' : ''}`}
      data-theme={theme}
    >
      <section className="page-section">
        <div className="container-app">
          <DashboardNavbar />
          <Outlet />
        </div>
      </section>
    </div>
  )
}
