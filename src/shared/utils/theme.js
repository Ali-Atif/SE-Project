import { DASHBOARD_THEME_STORAGE_KEY } from '@/shared/constants/storageKeys'

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
}

const themeListeners = new Set()
let dashboardTheme = THEMES.LIGHT

export function subscribeTheme(listener) {
  themeListeners.add(listener)
  return () => themeListeners.delete(listener)
}

function notifyThemeListeners() {
  themeListeners.forEach((listener) => listener())
}

export function getStoredDashboardTheme() {
  if (typeof window === 'undefined') return null

  const stored = window.localStorage.getItem(DASHBOARD_THEME_STORAGE_KEY)
  return stored === THEMES.DARK || stored === THEMES.LIGHT ? stored : null
}

export function getDashboardTheme() {
  return dashboardTheme
}

export function resolveDashboardTheme() {
  return getStoredDashboardTheme() ?? THEMES.LIGHT
}

export function initDashboardTheme() {
  dashboardTheme = resolveDashboardTheme()
}

export function setTheme(theme) {
  dashboardTheme = theme
  window.localStorage.setItem(DASHBOARD_THEME_STORAGE_KEY, theme)
  notifyThemeListeners()
}

export function toggleTheme() {
  const next = dashboardTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK

  setTheme(next)
  return next
}

export function resetGlobalTheme() {
  document.documentElement.classList.remove('dark')
  document.documentElement.setAttribute('data-theme', THEMES.LIGHT)
}

initDashboardTheme()
