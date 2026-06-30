import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '@/components/common'
import ScrollToTop from '@/routes/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
