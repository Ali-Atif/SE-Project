import { useEffect, useState } from 'react'
import { CHART_ANIMATION_DURATION } from '@/shared/constants/charts'

export function useChartAnimation() {
  const [isAnimationActive, setIsAnimationActive] = useState(true)

  useEffect(() => {
    const timer = setTimeout(
      () => setIsAnimationActive(false),
      CHART_ANIMATION_DURATION + 50,
    )
    return () => clearTimeout(timer)
  }, [])

  return {
    isAnimationActive,
    animationDuration: CHART_ANIMATION_DURATION,
    animationBegin: 0,
  }
}
