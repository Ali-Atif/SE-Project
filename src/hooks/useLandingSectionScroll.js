import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTE_SECTIONS, isLandingPath, scrollToSection, isSectionInView } from '@/components/landing/landingNavigation'

export function useLandingSectionScroll() {
  const { pathname } = useLocation()
  const lastPathRef = useRef(null)

  useEffect(() => {
    if (!isLandingPath(pathname)) return undefined

    const targetSection = ROUTE_SECTIONS[pathname]
    if (!targetSection) return undefined

    if (targetSection === 'hero' && window.scrollY <= 10) {
      lastPathRef.current = pathname
      return undefined
    }

    if (lastPathRef.current === pathname && isSectionInView(targetSection)) {
      return undefined
    }

    lastPathRef.current = pathname

    const frame = requestAnimationFrame(() => {
      scrollToSection(targetSection)
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])
}
