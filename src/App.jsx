import AuthInitializer from '@/providers/AuthInitializer'
import AppRoutes from '@/routes/routeConfig'

export default function App() {
  return (
    <AuthInitializer>
      <AppRoutes />
    </AuthInitializer>
  )
}
