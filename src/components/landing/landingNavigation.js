import { LANDING_PATHS } from '@/shared/constants/routes'

export { LANDING_NAV_LINKS, LANDING_PATHS, ROUTE_SECTIONS } from '@/shared/constants/routes'

export function isLandingPath(pathname) {
  return LANDING_PATHS.includes(pathname)
}

export function getNavbarOffset() {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')
  const parsed = parseFloat(value)
  return Number.isFinite(parsed) ? parsed : 72
}

let activeScrollFrame = null

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (!element) return

  if (activeScrollFrame) {
    cancelAnimationFrame(activeScrollFrame)
    activeScrollFrame = null
  }

  const offset = getNavbarOffset()
  const targetTop = element.getBoundingClientRect().top + window.scrollY - offset
  const startTop = window.scrollY
  const distance = targetTop - startTop

  if (Math.abs(distance) < 2) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    window.scrollTo(0, targetTop)
    return
  }

  const duration = 420
  let startTime = null

  const step = (timestamp) => {
    if (startTime === null) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const eased = 1 - (1 - progress) ** 3

    window.scrollTo(0, startTop + distance * eased)

    if (progress < 1) {
      activeScrollFrame = requestAnimationFrame(step)
    } else {
      activeScrollFrame = null
    }
  }

  activeScrollFrame = requestAnimationFrame(step)
}

export function isSectionInView(sectionId, tolerance = 80) {
  const element = document.getElementById(sectionId)
  if (!element) return false

  const offset = getNavbarOffset()
  const { top } = element.getBoundingClientRect()
  return Math.abs(top - offset) <= tolerance
}
