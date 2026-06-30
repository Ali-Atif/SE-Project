export default function ContactInfoCard({ icon: Icon, title, value, href }) {
  const baseClass =
    'flex items-start gap-4 rounded-lg border border-border bg-surface p-4 transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-0.5 hover:shadow-md md:p-6'

  const content = (
    <>
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="mb-1 text-[0.8125rem] font-semibold tracking-wide text-text-muted uppercase">
          {title}
        </h3>
        <p className="m-0 text-[0.9375rem] font-medium wrap-break-words text-text">{value}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${baseClass} text-inherit no-underline hover:no-underline`}>
        {content}
      </a>
    )
  }

  return <div className={baseClass}>{content}</div>
}
