import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectIsAuthenticated, selectCurrentUser } from '@/redux/slices'
import { LANDING_NAV_LINKS, ROUTE_SECTIONS, isLandingPath, scrollToSection } from '@/components/landing/landingNavigation'
import { LogoIcon, MenuIcon, CloseIcon } from '@/shared/ui'
import { UserAvatar } from '@/components/common'
import { ROUTES } from '@/shared/constants/routes'

function navLinkClass({ isActive }) {
  return `nav-link${isActive ? ' nav-link-active' : ''}`
}

function NavbarProfile({ user, className = '', onClick }) {
  return (
    <Link
      to={ROUTES.PROFILE}
      className={`flex shrink-0 items-center gap-2 rounded-md px-2 py-1 text-inherit no-underline transition-colors duration-150 hover:bg-primary/10 hover:no-underline ${className}`.trim()}
      onClick={onClick}
      aria-label={`Open profile for ${user?.name ?? 'user'}`}
    >
      <UserAvatar user={user} linked={false} />
      <span className="max-w-40 truncate text-sm text-text-muted">
        Hi, <strong className="font-semibold text-text">{user?.name}</strong>
      </span>
    </Link>
  )
}

function LandingNavLinks({ onNavigate }) {
  const location = useLocation()
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  const handleSectionNavClick = (to) => {
    onNavigate()

    if (isLandingPath(location.pathname) && location.pathname === to) {
      const sectionId = ROUTE_SECTIONS[to]
      if (sectionId) {
        scrollToSection(sectionId)
      }
    }
  }

  return (
    <ul className="m-0 flex list-none flex-col items-stretch gap-1 p-0 lg:flex-row lg:items-center">
      {LANDING_NAV_LINKS.map(({ to, label }) => (
        <li key={to} className="flex w-full items-center lg:w-auto">
          <NavLink
            to={to}
            className={navLinkClass}
            onClick={() => handleSectionNavClick(to)}
          >
            {label}
          </NavLink>
        </li>
      ))}

      {isAuthenticated ? (
        <li className="flex w-full items-center lg:w-auto">
          <NavLink to={ROUTES.DASHBOARD} className={navLinkClass} onClick={onNavigate}>
            Dashboard
          </NavLink>
        </li>
      ) : (
        <>
          <li className="flex w-full items-center lg:w-auto">
            <NavLink to={ROUTES.LOGIN} className={navLinkClass} onClick={onNavigate}>
              Login
            </NavLink>
          </li>
          <li className="flex w-full items-center lg:w-auto">
            <NavLink
              to={ROUTES.REGISTER}
              className="btn btn-primary btn-sm w-full justify-center whitespace-nowrap lg:w-auto"
              onClick={onNavigate}
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </ul>
  )
}

export default function Navbar() {
  const location = useLocation()
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const user = useAppSelector(selectCurrentUser)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`landing-navbar${menuOpen ? ' bg-surface/45 shadow-lg' : ''}`}
      >
        <div className="container-app landing-navbar-inner justify-between gap-4">
          <Link
            to={ROUTES.HOME}
            className={`flex items-center gap-2 text-lg font-bold text-text no-underline transition-opacity duration-200 hover:text-primary hover:no-underline${menuOpen ? ' pointer-events-none opacity-0' : ''}`}
            aria-label="SE Project home"
            aria-hidden={menuOpen}
            tabIndex={menuOpen ? -1 : undefined}
          >
            <LogoIcon className="h-8 w-8 shrink-0" />
            <span className="navbar-brand-text whitespace-nowrap max-[360px]:hidden">SE Project</span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <nav
              className="hidden lg:flex lg:items-center"
              aria-label="Main navigation"
            >
              <LandingNavLinks onNavigate={closeMenu} />
            </nav>

            {isAuthenticated && (
              <NavbarProfile
                user={user}
                className="hidden lg:flex"
                onClick={closeMenu}
              />
            )}

            {isAuthenticated && (
              <NavbarProfile
                user={user}
                className="flex gap-1 p-1 lg:hidden [&_.user-avatar]:h-9 [&_.user-avatar]:w-9 [&_.user-avatar]:text-xs [&_span]:max-w-24"
                onClick={closeMenu}
              />
            )}

            <button
              type="button"
              className="flex h-10 w-10 min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-text transition-colors duration-150 hover:bg-primary/10 lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="landing-navbar-spacer" aria-hidden="true" />

      {menuOpen && (
        <>
          <button
            type="button"
            className="landing-mobile-overlay"
            onClick={closeMenu}
            aria-label="Close menu"
            tabIndex={-1}
          />
          <nav
            id="main-navigation"
            className="landing-mobile-drawer translate-x-0"
            aria-label="Main navigation"
          >
            <LandingNavLinks onNavigate={closeMenu} />
          </nav>
        </>
      )}
    </>
  )
}
