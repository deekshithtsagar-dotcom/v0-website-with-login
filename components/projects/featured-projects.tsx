import { ProjectCard } from "./project-card"

const featuredProjects = [
  {
    title: "Smart Campus Navigation",
    description:
      "AR-powered indoor navigation system for university campuses using computer vision and machine learning.",
    tags: ["AR", "Computer Vision", "Mobile", "Navigation"],
    memberCount: 4,
    maxMembers: 6,
    timeAgo: "3 hours ago",
    author: "Alex Chen",
  },
  {
    title: "Mental Health Companion",
    description:
      "AI chatbot providing 24/7 mental health support and resources specifically designed for college students.",
    tags: ["AI", "Mental Health", "Chatbot", "Healthcare"],
    memberCount: 2,
    maxMembers: 5,
    timeAgo: "6 hours ago",
    author: "Maya Patel",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most innovative projects from our community of student creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
