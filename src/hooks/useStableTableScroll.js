import { useEffect, useRef } from 'react'

const MOBILE_QUERY = '(max-width: 47.99rem)'
const AXIS_THRESHOLD = 14

export function useStableTableScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    if (!mediaQuery.matches) return undefined

    let startX = 0
    let startY = 0
    let axis = null

    const reset = () => {
      axis = null
      element.style.overflowX = ''
      element.style.touchAction = ''
    }

    const onTouchStart = (event) => {
      if (event.touches.length !== 1) return

      startX = event.touches[0].clientX
      startY = event.touches[0].clientY
      axis = null
      element.style.overflowX = ''
      element.style.touchAction = ''
    }

    const onTouchMove = (event) => {
      if (event.touches.length !== 1) return

      const deltaX = event.touches[0].clientX - startX
      const deltaY = event.touches[0].clientY - startY

      if (!axis) {
        if (Math.abs(deltaX) < AXIS_THRESHOLD && Math.abs(deltaY) < AXIS_THRESHOLD) {
          return
        }

        axis = Math.abs(deltaX) > Math.abs(deltaY) ? 'x' : 'y'
      }

      if (axis === 'y') {
        element.style.overflowX = 'hidden'
        element.style.touchAction = 'pan-y'
        return
      }

      element.style.overflowX = 'auto'
      element.style.touchAction = 'pan-x'

      const { scrollLeft, scrollWidth, clientWidth } = element
      const atLeftEdge = scrollLeft <= 0 && deltaX > 0
      const atRightEdge = scrollLeft + clientWidth >= scrollWidth - 1 && deltaX < 0

      if (atLeftEdge || atRightEdge) {
        event.preventDefault()
      }
    }

    element.addEventListener('touchstart', onTouchStart, { passive: true })
    element.addEventListener('touchmove', onTouchMove, { passive: false })
    element.addEventListener('touchend', reset, { passive: true })
    element.addEventListener('touchcancel', reset, { passive: true })

    const onBreakpointChange = () => reset()
    mediaQuery.addEventListener('change', onBreakpointChange)

    return () => {
      element.removeEventListener('touchstart', onTouchStart)
      element.removeEventListener('touchmove', onTouchMove)
      element.removeEventListener('touchend', reset)
      element.removeEventListener('touchcancel', reset)
      mediaQuery.removeEventListener('change', onBreakpointChange)
      reset()
    }
  }, [])

  return ref
}
