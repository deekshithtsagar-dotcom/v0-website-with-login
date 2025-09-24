"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, DollarSign, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface FeaturedProjectCardProps {
  title: string
  description: string
  tags: string[]
  team: string[]
  impact: string
  fundingRaised: string
  status: string
}

export function FeaturedProjectCard({
  title,
  description,
  tags,
  team,
  impact,
  fundingRaised,
  status,
}: FeaturedProjectCardProps) {
  const { toast } = useToast()
  const [isExpressing, setIsExpressing] = useState(false)
  const [hasExpressed, setHasExpressed] = useState(false)

  const handleExpressInterest = async () => {
    if (hasExpressed) return

    setIsExpressing(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setHasExpressed(true)
    setIsExpressing(false)

    // Show success toast to user
    toast({
      title: "Interest Expressed!",
      description: `Your interest in "${title}" has been sent to the project team. They'll review your profile and may reach out for collaboration opportunities.`,
      duration: 5000,
    })

    // Simulate notification to project team (in real app, this would be a backend call)
    console.log(
      `[v0] Notification sent to team [${team.join(", ")}]: New interest expressed for "${title}" from industry professional`,
    )
  }

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground text-balance">{title}</h3>
          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
            {status}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-orange-500/30 text-orange-400">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{description}</p>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Team</h4>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              {team.join(", ")}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Impact</h4>
            <div className="flex items-center text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4 mr-1" />
              {impact}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Funding Raised</h4>
            <div className="flex items-center text-sm font-semibold text-green-400">
              <DollarSign className="w-4 h-4 mr-1" />
              {fundingRaised}
            </div>
          </div>
        </div>

        <Button
          className="w-full gradient-orange text-white font-semibold"
          onClick={handleExpressInterest}
          disabled={isExpressing || hasExpressed}
        >
          {isExpressing ? "Expressing Interest..." : hasExpressed ? "Interest Sent ✓" : "Express Interest"}
          {!isExpressing && !hasExpressed && <ExternalLink className="w-4 h-4 ml-2" />}
        </Button>
      </CardContent>
    </Card>
  )
}
