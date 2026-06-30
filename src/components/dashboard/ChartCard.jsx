export default function ChartCard({ title, description, children, className = '' }) {
  return (
    <article className={`admin-card ${className}`.trim()}>
      {(title || description) && (
        <header className="mb-4 border-b border-border pb-4 md:mb-6">
          {title && (
            <h2 className="text-base font-semibold text-text md:text-lg">{title}</h2>
          )}
          {description && (
            <p className="mt-0.5 text-sm text-text-muted">{description}</p>
          )}
        </header>
      )}
      <div className="min-h-0">{children}</div>
    </article>
  )
}
