import { Link, useLocation } from 'react-router-dom'
import { LogoIcon, GithubIcon, TwitterIcon, LinkedinIcon } from '@/shared/ui'
import { LANDING_NAV_LINKS, navigateToLandingSection } from '@/components/landing/landingNavigation'
import { ROUTES } from '@/shared/constants/routes'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { label: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
]

export default function Footer() {
  const location = useLocation()

  const handleSectionClick = (to) => {
    navigateToLandingSection(location.pathname, to)
  }

  return (
    <footer className="bg-bg-dark pt-6 text-slate-300 md:pt-8">
      <div className="container-app">
        <div className="grid grid-cols-1 gap-4 pb-6 md:grid-cols-2 md:gap-6 lg:grid-cols-[2fr_1fr_1fr] lg:gap-8">
          <div className="max-w-xs md:col-span-2 md:max-w-none lg:col-span-1 lg:max-w-xs">
            <Link
              to={ROUTES.HOME}
              className="mb-2 inline-flex items-center gap-2 text-lg font-bold text-white no-underline hover:text-primary-light hover:no-underline"
            >
              <LogoIcon className="h-8 w-8" />
              <span>SE Project</span>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-text-light">
              Modern React application with Redux Toolkit, routing, and responsive design.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-slate-300 no-underline transition-[background,color,transform] duration-150 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-1.125rem w-1.125rem" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {LANDING_NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-light no-underline transition-colors duration-150 hover:text-white hover:no-underline"
                    onClick={() => handleSectionClick(link.to)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Resources
            </h3>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-light no-underline transition-colors duration-150 hover:text-white hover:no-underline"
                >
                  React Docs
                </a>
              </li>
              <li>
                <a
                  href="https://redux-toolkit.js.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-light no-underline transition-colors duration-150 hover:text-white hover:no-underline"
                >
                  Redux Toolkit
                </a>
              </li>
              <li>
                <a
                  href="https://reactrouter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-light no-underline transition-colors duration-150 hover:text-white hover:no-underline"
                >
                  React Router
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center md:pb-[calc(1rem+env(safe-area-inset-bottom))]">
          <p className="m-0 text-[0.8125rem] text-text-light">
            &copy; {new Date().getFullYear()} SE Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
