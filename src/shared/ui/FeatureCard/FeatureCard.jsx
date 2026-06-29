export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-lg border border-border bg-bg p-6 transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:border-primary/30 hover:shadow-md md:p-8">
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary"
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-[1.0625rem] font-bold">{title}</h3>
      <p className="m-0 text-[0.9375rem] leading-relaxed text-text-muted">{description}</p>
    </article>
  )
}
