import { ProjectCard } from "./project-card"

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  memberCount: number
  maxMembers: number
  timeAgo: string
  author: string
}

interface ProjectGridProps {
  projects: Project[]
  loading?: boolean
}

export function ProjectGrid({ projects, loading = false }: ProjectGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 animate-pulse">
            <div className="h-6 bg-muted rounded mb-4"></div>
            <div className="h-4 bg-muted rounded mb-2"></div>
            <div className="h-4 bg-muted rounded mb-4 w-3/4"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-muted rounded w-16"></div>
              <div className="h-6 bg-muted rounded w-20"></div>
            </div>
            <div className="h-10 bg-muted rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
        <p className="text-muted-foreground">Try adjusting your search or check back later for new projects.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}
