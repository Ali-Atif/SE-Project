import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <section className="page-centered">
      <div className="container-app container-narrow">
        <Outlet />
      </div>
    </section>
  )
}
