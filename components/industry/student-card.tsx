"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface StudentCardProps {
  name: string
  level: string
  major: string
  rating: number
  projectsCompleted: number
  skills: string[]
  recentProjects: string[]
  avatar: string
}

export function StudentCard({
  name,
  level,
  major,
  rating,
  projectsCompleted,
  skills,
  recentProjects,
  avatar,
}: StudentCardProps) {
  const { toast } = useToast()
  const [isContacting, setIsContacting] = useState(false)
  const [hasContacted, setHasContacted] = useState(false)

  const handleContactStudent = async () => {
    if (hasContacted) return

    setIsContacting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setHasContacted(true)
    setIsContacting(false)

    // Show success toast to industry professional
    toast({
      title: "Contact Request Sent!",
      description: `Your contact request has been sent to ${name}. They'll receive a notification and can choose to connect with you.`,
      duration: 5000,
    })

    // Simulate notification to student (in real app, this would be a backend call)
    console.log(`[v0] Notification sent to ${name}: New contact request from industry professional`)
  }

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center text-white font-bold text-lg">
            {avatar}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            <p className="text-muted-foreground">
              {level} • {major}
            </p>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="ml-1 font-semibold text-foreground">{rating}</span>
              <span className="ml-2 text-sm text-muted-foreground">{projectsCompleted} projects completed</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Recent Projects</h4>
          <ul className="space-y-1">
            {recentProjects.map((project, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {project}
              </li>
            ))}
          </ul>
        </div>

        <Button
          className="w-full gradient-orange text-white font-semibold"
          onClick={handleContactStudent}
          disabled={isContacting || hasContacted}
        >
          <Mail className="w-4 h-4 mr-2" />
          {isContacting ? "Sending Request..." : hasContacted ? "Request Sent ✓" : "Contact Student"}
        </Button>
      </CardContent>
    </Card>
  )
}
