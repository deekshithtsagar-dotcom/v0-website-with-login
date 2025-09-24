import { Button } from "@/components/ui/button"
import { Lightbulb, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-gradient-orange">InnovatU</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-balance leading-relaxed">
          Where student innovation comes to life. Connect with like-minded creators, join groundbreaking projects, and
          build the future together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/ideas">
            <Button size="lg" className="gradient-orange text-white font-semibold px-8 py-3 text-lg">
              <Lightbulb className="w-5 h-5 mr-2" />
              Explore Ideas
            </Button>
          </Link>
          <Link href="/community">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-border hover:bg-secondary bg-transparent"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
