import { Navbar } from '@/components/navbar/navbar'
import { HeroSection } from '@/components/hero/hero'
import { TrustedBySection } from '@/components/trusted-by/trusted-by'
import { ServicesSection } from '@/components/services/services'
import { StatsSection } from '@/components/stats/stats'
import { TestimonialsSection } from '@/components/testimonials/testimonials'
import { TeamSection } from '@/components/team/team'
import { CTABannerSection } from '@/components/cta/cta-banner'
import { Footer } from '@/components/footer/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      <CTABannerSection />
      <Footer />
    </main>
  )
}
