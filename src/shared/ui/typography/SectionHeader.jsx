export default function SectionHeader({ label, title, description, align = 'center' }) {
  const alignClass =
    align === 'left'
      ? 'mx-0 mb-8 max-w-none text-left md:mb-12'
      : 'mx-auto mb-8 max-w-2xl text-center md:mb-12'

  return (
    <header className={alignClass}>
      {label && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-[0.8125rem] font-semibold tracking-widest text-primary uppercase max-[360px]:text-xs">
          {label}
        </span>
      )}
      <h2 className="mb-4 text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-text md:text-[clamp(1.75rem,4vw,2.5rem)]">
        {title}
      </h2>
      {description && (
        <p className="text-[1.0625rem] leading-relaxed text-text-muted md:text-base">
          {description}
        </p>
      )}
    </header>
  )
}
