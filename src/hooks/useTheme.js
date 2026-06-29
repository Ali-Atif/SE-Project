import { useCallback, useSyncExternalStore } from 'react'
import {
  getDashboardTheme,
  setTheme as persistTheme,
  subscribeTheme,
  toggleTheme as flipTheme,
} from '@/shared/utils/theme'

function subscribe(onStoreChange) {
  const handleChange = () => onStoreChange()
  const unsubscribeTheme = subscribeTheme(handleChange)

  window.addEventListener('storage', handleChange)

  return () => {
    unsubscribeTheme()
    window.removeEventListener('storage', handleChange)
  }
}

function getThemeSnapshot() {
  return getDashboardTheme()
}

function getServerThemeSnapshot() {
  return 'light'
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot)

  const setTheme = useCallback((nextTheme) => {
    persistTheme(nextTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    flipTheme()
  }, [])

  return {
    theme,
    isDark: theme === 'dark',
    setTheme,
    toggleTheme,
  }
}
