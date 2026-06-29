import HeroSection from '@/components/landing/HeroSection'
import AboutSection from '@/components/landing/AboutSection'
import ContactSection from '@/components/landing/ContactSection'
import { useLandingSectionScroll } from '@/hooks'

export default function Landing() {
  useLandingSectionScroll()

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
