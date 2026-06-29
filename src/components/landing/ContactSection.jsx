import { useState } from 'react'
import { SectionHeader, MailIcon, PhoneIcon, MapPinIcon } from '@/shared/ui'
import ContactInfoCard from './ContactInfoCard'
import { useSubmitContactMutation } from '@/store/api'
import { getApiErrorMessage } from '@/services/errors/normalizeApiError'

export default function ContactSection() {
  const [submitContact, { isLoading, error, reset }] = useSubmitContactMutation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    reset()

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await submitContact({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }).unwrap()

      setSubmitted(true)
      form.reset()
    } catch {
      // Error surfaced via mutation state
    }
  }

  const apiError = getApiErrorMessage(error)

  return (
    <section
      id="contact"
      className="landing-section section-block hero-gradient"
      aria-labelledby="contact-heading"
    >
      <div className="container-app">
        <SectionHeader
          label="Contact Us"
          title="Let's start a conversation"
          description="Have a question or want to collaborate? Reach out — we'd love to hear from you."
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-12">
          <div className="flex flex-col gap-4">
            <h3 id="contact-heading" className="sr-only">
              Contact information
            </h3>
            <ContactInfoCard
              icon={MailIcon}
              title="Email"
              value="hello@seproject.dev"
              href="mailto:hello@seproject.dev"
            />
            <ContactInfoCard
              icon={PhoneIcon}
              title="Phone"
              value="+1 (555) 123-4567"
              href="tel:+15551234567"
            />
            <ContactInfoCard
              icon={MapPinIcon}
              title="Location"
              value="San Francisco, CA"
            />
          </div>

          <div className="glass rounded-xl p-6 shadow-lg md:p-8">
            {submitted ? (
              <div className="py-8 text-center" role="status">
                <div
                  className="avatar-gradient mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </div>
                <h3 className="mb-2">Message sent!</h3>
                <p className="mb-6 text-text-muted">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {apiError && <div className="alert alert-error">{apiError}</div>}

                <div className="form-group">
                  <label htmlFor="landing-contact-name">Name</label>
                  <input
                    id="landing-contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="landing-contact-email">Email</label>
                  <input
                    id="landing-contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="landing-contact-message">Message</label>
                  <textarea
                    id="landing-contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
