export const ROUTES = {
  HOME: '/home',
  ABOUT: '/about',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
}

export const LANDING_NAV_LINKS = [
  { to: ROUTES.HOME, label: 'Home', sectionId: 'hero' },
  { to: ROUTES.ABOUT, label: 'About Us', sectionId: 'about' },
  { to: ROUTES.CONTACT, label: 'Contact Us', sectionId: 'contact' },
]

export const LANDING_PATHS = LANDING_NAV_LINKS.map(({ to }) => to)

export const ROUTE_SECTIONS = Object.fromEntries(
  LANDING_NAV_LINKS.map(({ to, sectionId }) => [to, sectionId])
)
