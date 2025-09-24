"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  memberCount: number
  maxMembers: number
  timeAgo: string
  author: string
}

export function ProjectCard({ title, description, tags, memberCount, maxMembers, timeAgo, author }: ProjectCardProps) {
  const { toast } = useToast()
  const [isJoining, setIsJoining] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)

  const handleJoinProject = async () => {
    if (hasJoined) return

    setIsJoining(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate successful join
    setHasJoined(true)
    setIsJoining(false)

    // Show success toast to user
    toast({
      title: "Join Request Sent!",
      description: `Your request to join "${title}" has been sent to ${author}. They'll be notified and can approve your request.`,
      duration: 5000,
    })

    // Simulate notification to project owner (in real app, this would be a backend call)
    console.log(`[v0] Notification sent to ${author}: New join request for "${title}" from current user`)
  }

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground text-balance">{title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {timeAgo}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-1" />
            <span>
              {memberCount}/{maxMembers} members
            </span>
            <span className="ml-4 text-xs">by {author}</span>
          </div>
        </div>

        <Button
          className="w-full mt-4 gradient-orange text-white font-semibold"
          onClick={handleJoinProject}
          disabled={isJoining || hasJoined}
        >
          {isJoining ? "Sending Request..." : hasJoined ? "Request Sent ✓" : "Join Project"}
        </Button>
      </CardContent>
    </Card>
  )
}
