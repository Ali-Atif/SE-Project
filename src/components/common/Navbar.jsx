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

  const handleSectionNavClick = (to) => {
    closeMenu()

    if (isLandingPath(location.pathname) && location.pathname === to) {
      const sectionId = ROUTE_SECTIONS[to]
      if (sectionId) {
        scrollToSection(sectionId)
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-200 h-navbar border-b border-border bg-surface/80 backdrop-blur-xl transition-shadow max-md:h-16 ${menuOpen ? 'shadow-lg' : ''}`}
    >
      <div className="container-app flex h-full items-center justify-between gap-4">
        <Link
          to={ROUTES.HOME}
          className="z-210 flex items-center gap-2 text-lg font-bold text-text no-underline hover:text-primary hover:no-underline"
          aria-label="SE Project home"
        >
          <LogoIcon className="h-8 w-8 shrink-0" />
          <span className="navbar-brand-text whitespace-nowrap max-[360px]:hidden">SE Project</span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <nav
            id="main-navigation"
            className={`max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:z-205 max-lg:flex max-lg:h-dvh max-lg:w-[min(20rem,88vw)] max-lg:flex-col max-lg:overflow-y-auto max-lg:border-l max-lg:border-border max-lg:bg-surface/95 max-lg:pt-[calc(var(--spacing-navbar)+1.5rem)] max-lg:pr-6 max-lg:pb-[calc(1.5rem+env(safe-area-inset-bottom))] max-lg:pl-6 max-lg:backdrop-blur-xl max-lg:transition-transform max-lg:duration-400ms max-lg:ease-cubic-bezier(0.4,0,0.2,1) lg:flex lg:items-center ${menuOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'}`}
            aria-label="Main navigation"
          >
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
                  <NavLink to={ROUTES.DASHBOARD} className={navLinkClass}>
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="flex w-full items-center lg:w-auto">
                    <NavLink to={ROUTES.LOGIN} className={navLinkClass}>
                      Login
                    </NavLink>
                  </li>
                  <li className="flex w-full items-center lg:w-auto">
                    <NavLink to={ROUTES.REGISTER} className="btn btn-primary btn-sm w-full justify-center whitespace-nowrap lg:w-auto">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
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
            className="z-210 flex h-11 w-11 min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-text transition-colors duration-150 hover:bg-primary/10 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-204 block animate-fade-in cursor-pointer border-0 bg-slate-900/45 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          tabIndex={-1}
        />
      )}
    </header>
  )
}
