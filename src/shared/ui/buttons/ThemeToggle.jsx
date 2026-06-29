import { useTheme } from '@/hooks/useTheme'
import { MoonIcon, SunIcon } from '@/shared/ui/icons'

export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex h-11 min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface/80 px-3 text-text backdrop-blur-sm transition-[color,background,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_4px_16px_var(--shadow-color)] ${className}`.trim()}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  )
}
