import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'

function useSearchPlaceholder() {
  const [placeholder, setPlaceholder] = useState('Search...')

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 47.99rem)')
    const largeQuery = window.matchMedia('(min-width: 64rem)')

    const updatePlaceholder = () => {
      if (mobileQuery.matches) {
        setPlaceholder('Search')
        return
      }

      if (largeQuery.matches) {
        setPlaceholder('Search dashboard...')
        return
      }

      setPlaceholder('Search...')
    }

    updatePlaceholder()
    mobileQuery.addEventListener('change', updatePlaceholder)
    largeQuery.addEventListener('change', updatePlaceholder)

    return () => {
      mobileQuery.removeEventListener('change', updatePlaceholder)
      largeQuery.removeEventListener('change', updatePlaceholder)
    }
  }, [])

  return placeholder
}

function SearchField({ inputRef, onClose, placeholder }) {
  return (
    <div className="admin-search">
      <Search className="admin-search-icon" aria-hidden="true" />
      <input
        ref={inputRef}
        type="search"
        enterKeyHint="search"
        placeholder={placeholder}
        className="admin-search-input"
        aria-label="Search dashboard"
      />
      {onClose && (
        <button
          type="button"
          className="admin-search-close"
          onClick={onClose}
          aria-label="Close search"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export function DesktopNavbarSearch() {
  const placeholder = useSearchPlaceholder()

  return (
    <div className="admin-search-desktop">
      <SearchField placeholder={placeholder} />
    </div>
  )
}

export function MobileNavbarSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef(null)
  const toggleRef = useRef(null)
  const inputRef = useRef(null)
  const placeholder = useSearchPlaceholder()

  useEffect(() => {
    if (!isOpen) return undefined

    inputRef.current?.focus()

    const handlePointerDown = (event) => {
      if (panelRef.current?.contains(event.target)) return
      if (toggleRef.current?.contains(event.target)) return
      setIsOpen(false)
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="admin-search-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close search' : 'Open search'}
        aria-expanded={isOpen}
      >
        <Search className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div ref={panelRef} className="admin-search-mobile-panel">
          <SearchField
            inputRef={inputRef}
            placeholder={placeholder}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  )
}
