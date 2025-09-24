import { Header } from "@/components/navigation/header"
import { SearchFilters } from "@/components/industry/search-filters"
import { StudentCard } from "@/components/industry/student-card"
import { FeaturedProjectCard } from "@/components/industry/featured-project-card"
import { Star, TrendingUp } from "lucide-react"

const topStudents = [
  {
    name: "Sarah Kim",
    level: "Senior",
    major: "Computer Science",
    rating: 4.9,
    projectsCompleted: 3,
    skills: ["React Native", "UI/UX", "Sustainability"],
    recentProjects: ["EcoTrack App", "Green Campus Initiative"],
    avatar: "SK",
  },
  {
    name: "Marcus Johnson",
    level: "Junior",
    major: "Data Science",
    rating: 4.7,
    projectsCompleted: 2,
    skills: ["Python", "Machine Learning", "Analytics"],
    recentProjects: ["StudyBuddy AI Tutor", "Campus Analytics"],
    avatar: "MJ",
  },
]

const featuredProjects = [
  {
    title: "EcoTrack Carbon Footprint App",
    description:
      "Gamified sustainability tracking for students with social challenges and environmental impact visualization.",
    tags: ["Sustainability"],
    team: ["Sarah Kim", "Mike Chen", "Lisa Johnson"],
    impact: "500+ users, 20% avg carbon reduction",
    fundingRaised: "$25K",
    status: "Market Ready",
  },
]

export default function IndustryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Industry Dashboard</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Discover exceptional student talent and innovative projects ready for industry collaboration
          </p>
        </div>

        {/* Search and Filters */}
        <SearchFilters />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Students Section */}
          <div>
            <div className="flex items-center mb-6">
              <Star className="w-5 h-5 text-orange-500 mr-2" />
              <h2 className="text-2xl font-bold text-foreground">Top Students</h2>
            </div>

            <div className="space-y-6">
              {topStudents.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
          </div>

          {/* Featured Projects Section */}
          <div>
            <div className="flex items-center mb-6">
              <TrendingUp className="w-5 h-5 text-orange-500 mr-2" />
              <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
            </div>

            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
