import { Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks'
import { selectIsAuthenticated } from '@/redux/slices'

export default function HeroSection() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  return (
    <section
      id="hero"
      className="landing-section relative flex min-h-[calc(100dvh-var(--spacing-navbar))] items-center overflow-hidden py-section hero-gradient max-md:min-h-0 max-md:py-8"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-16 h-96 w-96 rounded-full bg-primary/30 opacity-50 blur-[80px] max-md:-right-24 max-md:h-64 max-md:w-64" />
        <div className="absolute bottom-[10%] -left-20 h-72 w-72 rounded-full bg-accent/25 opacity-50 blur-[80px] max-md:h-48 max-md:w-48" />
        <div className="absolute top-[40%] right-[30%] hidden h-48 w-48 rounded-full bg-primary-light/20 opacity-50 blur-[80px] md:block" />
      </div>

      <div className="container-app relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl text-center lg:max-w-none lg:text-left">
          <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[0.8125rem] font-semibold text-primary max-[480px]:text-xs">
            Modern React Application
          </span>
          <h1
            id="hero-heading"
            className="mb-6 text-[clamp(1.75rem,7vw,3.25rem)] leading-[1.1] font-extrabold tracking-tight max-md:text-[clamp(1.75rem,7vw,2.5rem)]"
          >
            Build smarter experiences with{' '}
            <span className="text-gradient">SE Project</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-text-muted max-md:text-base">
            A production-ready frontend demo powered by React, Redux Toolkit, and
            React Router — featuring secure auth flows, protected routes, and a
            polished responsive interface.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4 max-[480px]:w-full max-[480px]:flex-col lg:justify-start">
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn btn-primary btn-lg max-[480px]:w-full">
                Go to Dashboard
              </Link>
            ) : (
              <Link to="/register" className="btn btn-primary btn-lg max-[480px]:w-full">
                Get Started Free
              </Link>
            )}
            <Link to="/about" className="btn btn-glass btn-lg max-[480px]:w-full">
              Learn More
            </Link>
          </div>

          <ul
            className="m-0 flex list-none flex-wrap justify-center gap-8 p-0 max-[480px]:flex-row max-[480px]:justify-center max-[480px]:gap-6 max-[360px]:flex-col max-[360px]:gap-4 lg:justify-start"
            aria-label="Project highlights"
          >
            <li className="flex flex-col max-[480px]:min-w-navbar max-[480px]:text-center max-[360px]:text-center">
              <strong className="text-xl font-bold text-text">7+</strong>
              <span className="text-[0.8125rem] text-text-muted">Pages</span>
            </li>
            <li className="flex flex-col max-[480px]:min-w-navbar max-[480px]:text-center max-[360px]:text-center">
              <strong className="text-xl font-bold text-text">100%</strong>
              <span className="text-[0.8125rem] text-text-muted">Responsive</span>
            </li>
            <li className="flex flex-col max-[480px]:min-w-navbar max-[480px]:text-center max-[360px]:text-center">
              <strong className="text-xl font-bold text-text">Redux</strong>
              <span className="text-[0.8125rem] text-text-muted">State Mgmt</span>
            </li>
          </ul>
        </div>

        <div
          className="relative flex min-h-56 w-full max-w-sm flex-col items-center justify-center mx-auto lg:min-h-80 lg:max-w-none"
          aria-hidden="true"
        >
          <div className="glass w-full max-w-sm animate-float rounded-xl p-6 shadow-lg max-md:max-w-full max-md:animate-none">
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
          <div className="glass absolute right-0 bottom-4 flex animate-[float_6s_ease-in-out_infinite_1s] items-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-text shadow-lg max-md:static max-md:mt-4 max-md:w-fit max-md:self-center max-md:animate-none">
            <div className="avatar-gradient h-6 w-6 rounded-sm" />
            <span>Auth Ready</span>
          </div>
        </div>
      </div>
    </section>
  )
}
