import { Header } from "@/components/navigation/header"
import { HeroSection } from "@/components/landing/hero-section"
import { StatsSection } from "@/components/landing/stats-section"
import { FeaturedProjects } from "@/components/projects/featured-projects"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedProjects />
      </main>
    </div>
  )
}
