import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/constants/routes'

function getInitials(name) {
  if (!name) return '?'
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const avatarBase =
  'user-avatar inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/90 text-[0.8125rem] font-bold text-white shadow-sm no-underline transition-[transform,box-shadow] duration-150 hover:scale-105 hover:shadow-md hover:text-white hover:no-underline avatar-gradient'

export default function UserAvatar({ user, className = '', onClick, linked = true }) {
  const initials = getInitials(user?.name)

  const content = (
    <span className="leading-none tracking-wide" aria-hidden="true">
      {initials}
    </span>
  )

  if (!linked) {
    return (
      <span className={`${avatarBase} ${className}`.trim()} title={user?.name}>
        {content}
      </span>
    )
  }

  return (
    <Link
      to={ROUTES.PROFILE}
      className={`${avatarBase} ${className}`.trim()}
      aria-label={`Open profile for ${user?.name ?? 'user'}`}
      title={user?.name}
      onClick={onClick}
    >
      {content}
    </Link>
  )
}
