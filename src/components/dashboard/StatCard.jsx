import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCard({ title, value, change, trend, icon: Icon, description }) {
  const isPositive = trend === 'up'

  return (
    <article className="admin-stat-card group">
      <div className="flex items-start justify-between gap-3">
        <div className="admin-stat-icon">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        {change && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
              isPositive
                ? 'badge-success'
                : 'bg-red-500/10 text-red-600 dark:text-red-400'
            }`}
          >
            {isPositive ? (
              <TrendingUp className="h-3 w-3" aria-hidden="true" />
            ) : (
              <TrendingDown className="h-3 w-3" aria-hidden="true" />
            )}
            {change}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-text-muted">{title}</p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-text md:text-3xl">
          {value}
        </p>
        {description && (
          <p className="mt-1 text-xs text-text-light">{description}</p>
        )}
      </div>
    </article>
  )
}
