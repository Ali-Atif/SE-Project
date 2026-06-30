import { Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectIsAuthenticated } from '@/features/auth'
import { ROUTES } from '@/shared/constants/routes'

export default function HeroSection() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  return (
    <section
      id="hero"
      className="landing-section relative overflow-hidden py-12 hero-gradient sm:py-16 lg:flex lg:min-h-[calc(100dvh-var(--spacing-navbar))] lg:items-center lg:py-20 xl:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary/20 opacity-60 blur-[80px] sm:h-96 sm:w-96" />
        <div className="absolute bottom-[5%] -left-16 h-56 w-56 rounded-full bg-accent/15 opacity-60 blur-[80px] sm:bottom-[10%] sm:-left-20 sm:h-72 sm:w-72" />
        <div className="absolute top-[35%] right-[20%] hidden h-40 w-40 rounded-full bg-primary-light/15 opacity-50 blur-[80px] lg:block" />
      </div>

      <div className="container-app relative grid w-full grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
        {/* Copy */}
        <div className="mx-auto flex w-full max-w-xl flex-col text-center lg:mx-0 lg:max-w-none lg:text-left">
          <span className="mb-4 inline-block self-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[0.8125rem] font-semibold text-primary sm:mb-5 sm:text-sm lg:self-start">
            Modern React Application
          </span>

          <h1
            id="hero-heading"
            className="mb-4 text-[clamp(1.875rem,5vw,2.75rem)] leading-[1.1] font-extrabold tracking-tight text-balance sm:mb-5 lg:mb-6 lg:text-[clamp(2.25rem,3.2vw,3.5rem)] lg:leading-[1.08] xl:max-w-[16ch]"
          >
            Build smarter experiences with{' '}
            <span className="text-gradient">SE Project</span>
          </h1>

          <p className="mb-8 text-base leading-relaxed text-pretty text-text-muted sm:text-lg sm:leading-7 lg:mb-9 lg:max-w-[34rem] xl:max-w-[36rem]">
            A production-ready frontend demo powered by React, Redux Toolkit, and React Router
            — featuring secure auth flows, protected routes, and a polished responsive interface.
          </p>

          <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
            {isAuthenticated ? (
              <Link to={ROUTES.DASHBOARD} className="btn btn-primary btn-lg w-full sm:w-auto">
                Go to Dashboard
              </Link>
            ) : (
              <Link to={ROUTES.REGISTER} className="btn btn-primary btn-lg w-full sm:w-auto">
                Get Started Free
              </Link>
            )}
            <Link to={ROUTES.ABOUT} className="btn btn-glass btn-lg w-full sm:w-auto">
              Learn More
            </Link>
          </div>

          <ul
            className="m-0 grid list-none grid-cols-3 gap-4 p-0 sm:gap-8 lg:max-w-md lg:gap-10"
            aria-label="Project highlights"
          >
            {[
              { value: '7+', label: 'Pages' },
              { value: '100%', label: 'Responsive' },
              { value: 'Redux', label: 'State Mgmt' },
            ].map(({ value, label }) => (
              <li key={label} className="flex flex-col">
                <strong className="text-lg font-bold text-text sm:text-xl lg:text-2xl">{value}</strong>
                <span className="text-xs text-text-muted sm:text-[0.8125rem]">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div
          className="relative mx-auto flex w-full max-w-[22rem] items-center justify-center sm:max-w-[24rem] lg:mx-0 lg:ml-auto lg:max-w-none lg:justify-end xl:max-w-[28rem]"
          aria-hidden="true"
        >
          <div className="relative w-full">
            <div className="glass w-full animate-float rounded-2xl p-6 shadow-lg max-sm:animate-none sm:p-7 lg:p-8">
              <div className="mb-5 flex gap-1.5 sm:mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary-light" />
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="code-accent h-2.5 w-[60%] rounded-sm opacity-60 sm:h-3" />
                <div className="h-2.5 rounded-sm bg-primary/15 sm:h-3" />
                <div className="h-2.5 w-[40%] rounded-sm bg-primary/15 sm:h-3" />
                <div className="h-2.5 rounded-sm bg-primary/15 sm:h-3" />
                <div className="h-2.5 w-[75%] rounded-sm bg-primary/15 sm:h-3" />
                <div className="hidden h-2.5 w-[55%] rounded-sm bg-primary/10 sm:block sm:h-3" />
              </div>
            </div>

            <div className="glass absolute -right-2 -bottom-4 z-10 flex w-fit items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-text shadow-lg max-sm:static max-sm:mx-auto max-sm:mt-4 max-sm:animate-none sm:-right-3 sm:-bottom-5 sm:px-5 sm:py-3.5 lg:animate-[float_6s_ease-in-out_infinite_1s]">
              <div className="avatar-gradient h-5 w-5 shrink-0 rounded-sm sm:h-6 sm:w-6" />
              <span>Auth Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
