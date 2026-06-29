import { SectionHeader, FeatureCard, MissionIcon, VisionIcon, FeatureIcon } from '@/shared/ui'

const features = [
  {
    icon: MissionIcon,
    title: 'Our Mission',
    description:
      'Deliver intuitive, accessible web experiences with clean architecture and maintainable code that scales with your product.',
  },
  {
    icon: VisionIcon,
    title: 'Our Vision',
    description:
      'Empower developers to ship faster with modern tooling — React, Redux Toolkit, and component-driven design patterns.',
  },
  {
    icon: FeatureIcon,
    title: 'Key Features',
    description:
      'Mock authentication, protected routing, persistent sessions, and a fully responsive UI built with semantic HTML and Tailwind CSS.',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="landing-section section-block bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="container-app">
        <SectionHeader
          label="About Us"
          title="Crafting digital products that feel effortless"
          description="SE Project is a showcase application demonstrating best practices in frontend development — from state management to responsive design."
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 id="about-heading" className="mb-4 text-xl font-bold">
              Who we are
            </h3>
            <p className="mb-4 leading-relaxed text-text-muted">
              We build modern web applications that prioritize user experience,
              performance, and developer ergonomics. This project serves as a
              reference implementation for React + Redux Toolkit architectures.
            </p>
            <p className="mb-4 leading-relaxed text-text-muted">
              Every component is designed with accessibility in mind, using
              semantic markup, keyboard-friendly navigation, and responsive
              layouts that adapt seamlessly across devices.
            </p>

            <figure className="mt-8 overflow-hidden rounded-xl border border-border shadow-lg transition-[transform,box-shadow] duration-250ms hover:-translate-y-1 hover:shadow-glow max-md:mt-6">
              <img
                src="/images/team-group.jpg"
                alt="Our diverse team collaborating together in a modern office"
                className="block aspect-3/2 w-full object-cover object-center"
                loading="lazy"
                width={900}
                height={600}
              />
              <figcaption className="border-t border-border bg-surface px-6 py-4 text-center text-sm font-medium text-text-muted">
                Our team building great products together
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
