import { Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectIsAuthenticated } from '@/features/auth'
import { ROUTES } from '@/shared/constants/routes'

export default function HeroSection() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  return (
    <section
      id="hero"
      className="landing-section relative overflow-hidden py-8 hero-gradient md:py-12 md:landscape:py-10 lg:flex lg:min-h-[calc(100dvh-var(--spacing-navbar))] lg:items-center lg:py-section"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-16 h-96 w-96 rounded-full bg-primary/30 opacity-50 blur-[80px] max-md:h-64 max-md:w-64 max-md:-right-24" />
        <div className="absolute bottom-[10%] -left-20 h-72 w-72 rounded-full bg-accent/25 opacity-50 blur-[80px] max-md:h-48 max-md:w-48" />
        <div className="absolute top-[40%] right-[30%] hidden h-48 w-48 rounded-full bg-primary-light/20 opacity-50 blur-[80px] md:block" />
      </div>

      <div className="container-app relative grid grid-cols-1 items-center gap-10 md:mx-auto md:max-w-3xl md:landscape:max-w-none md:landscape:grid-cols-2 md:landscape:items-center md:landscape:gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto w-full max-w-xl text-center md:max-w-2xl md:landscape:mx-0 md:landscape:max-w-none md:landscape:text-left lg:mx-0 lg:max-w-none lg:text-left">
          <span className="mb-5 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[0.8125rem] font-semibold text-primary max-[480px]:text-xs md:mb-6">
            Modern React Application
          </span>
          <h1
            id="hero-heading"
            className="mb-5 text-[clamp(1.75rem,5.5vw,2.5rem)] leading-[1.12] font-extrabold tracking-tight text-balance md:mb-6 md:text-[clamp(2rem,4vw,2.75rem)] lg:text-[clamp(2.25rem,3.5vw,3.25rem)]"
          >
            Build smarter experiences with{' '}
            <span className="text-gradient">SE Project</span>
          </h1>
          <p className="mb-8 text-base leading-relaxed text-pretty text-text-muted md:text-lg md:leading-7 lg:max-w-xl">
            A production-ready frontend demo powered by React, Redux Toolkit, and React Router
            — featuring secure auth flows, protected routes, and a polished responsive interface.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-3 max-[480px]:w-full max-[480px]:flex-col max-[480px]:gap-3 md:gap-4 md:landscape:justify-start lg:justify-start">
            {isAuthenticated ? (
              <Link to={ROUTES.DASHBOARD} className="btn btn-primary btn-lg max-[480px]:w-full">
                Go to Dashboard
              </Link>
            ) : (
              <Link to={ROUTES.REGISTER} className="btn btn-primary btn-lg max-[480px]:w-full">
                Get Started Free
              </Link>
            )}
            <Link to={ROUTES.ABOUT} className="btn btn-glass btn-lg max-[480px]:w-full">
              Learn More
            </Link>
          </div>

          <ul
            className="m-0 flex list-none flex-wrap justify-center gap-10 p-0 max-[360px]:flex-col max-[360px]:gap-4 max-[480px]:gap-8 md:gap-14 md:landscape:justify-start lg:justify-start lg:gap-12"
            aria-label="Project highlights"
          >
            <li className="flex min-w-[4.5rem] flex-col max-[360px]:text-center">
              <strong className="text-xl font-bold text-text md:text-2xl">7+</strong>
              <span className="text-[0.8125rem] text-text-muted">Pages</span>
            </li>
            <li className="flex min-w-[4.5rem] flex-col max-[360px]:text-center">
              <strong className="text-xl font-bold text-text md:text-2xl">100%</strong>
              <span className="text-[0.8125rem] text-text-muted">Responsive</span>
            </li>
            <li className="flex min-w-[4.5rem] flex-col max-[360px]:text-center">
              <strong className="text-xl font-bold text-text md:text-2xl">Redux</strong>
              <span className="text-[0.8125rem] text-text-muted">State Mgmt</span>
            </li>
          </ul>
        </div>

        <div
          className="relative mx-auto flex w-full min-h-52 max-w-sm flex-col items-center justify-center md:min-h-60 md:max-w-md md:landscape:mx-0 md:landscape:min-h-64 md:landscape:max-w-none lg:min-h-80"
          aria-hidden="true"
        >
          <div className="glass w-full max-w-sm animate-float rounded-xl p-6 shadow-lg max-md:max-w-full max-md:animate-none md:landscape:max-w-sm lg:max-w-sm">
            <div className="mb-6 flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="code-accent h-2.5 w-[60%] rounded-sm opacity-60" />
              <div className="h-2.5 rounded-sm bg-primary/15" />
              <div className="h-2.5 w-[40%] rounded-sm bg-primary/15" />
              <div className="h-2.5 rounded-sm bg-primary/15" />
              <div className="h-2.5 w-[75%] rounded-sm bg-primary/15" />
            </div>
          </div>
          <div className="glass mt-4 flex w-fit items-center gap-2 self-center rounded-xl px-6 py-4 text-sm font-semibold text-text shadow-lg max-md:static max-md:animate-none md:landscape:absolute md:landscape:right-0 md:landscape:bottom-4 md:landscape:mt-0 md:landscape:animate-[float_6s_ease-in-out_infinite_1s] lg:absolute lg:right-0 lg:bottom-4 lg:mt-0 lg:animate-[float_6s_ease-in-out_infinite_1s]">
            <div className="avatar-gradient h-6 w-6 rounded-sm" />
            <span>Auth Ready</span>
          </div>
        </div>
      </div>
    </section>
  )
}
