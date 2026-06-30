import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/DashboardLayout'
import ProtectedRoute from '@/routes/ProtectedRoute'
import GuestRoute from '@/routes/GuestRoute'
import Landing from '@/pages/Landing'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Dashboard from '@/pages/dashboard/Dashboard'
import Users from '@/pages/dashboard/Users'
import Analytics from '@/pages/dashboard/Analytics'
import Settings from '@/pages/dashboard/Settings'
import Profile from '@/pages/dashboard/Profile'
import { ROUTES } from '@/shared/constants/routes'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route
          path={ROUTES.DASHBOARD.slice(1)}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.USERS.slice(1)}
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.ANALYTICS.slice(1)}
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.SETTINGS.slice(1)}
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PROFILE.slice(1)}
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route element={<MainLayout />}>
        <Route index element={<Navigate to={ROUTES.HOME} replace />} />
        <Route path={ROUTES.HOME.slice(1)} element={<Landing />} />
        <Route path={ROUTES.ABOUT.slice(1)} element={<Landing />} />
        <Route path={ROUTES.CONTACT.slice(1)} element={<Landing />} />

        <Route element={<AuthLayout />}>
          <Route
            path={ROUTES.LOGIN.slice(1)}
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
          <Route
            path={ROUTES.REGISTER.slice(1)}
            element={
              <GuestRoute>
                <Register />
              </GuestRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}
