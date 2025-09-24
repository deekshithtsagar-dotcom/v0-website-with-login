"use client"

import { Button } from "@/components/ui/button"
import { Lightbulb, Users } from "lucide-react"

interface TabNavigationProps {
  activeTab: "ideas" | "community"
  onTabChange: (tab: "ideas" | "community") => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex space-x-1 bg-muted p-1 rounded-lg">
      <Button
        variant={activeTab === "ideas" ? "default" : "ghost"}
        onClick={() => onTabChange("ideas")}
        className={`flex items-center space-x-2 ${
          activeTab === "ideas" ? "gradient-orange text-white" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Lightbulb className="w-4 h-4" />
        <span>Ideas</span>
      </Button>
      <Button
        variant={activeTab === "community" ? "default" : "ghost"}
        onClick={() => onTabChange("community")}
        className={`flex items-center space-x-2 ${
          activeTab === "community" ? "gradient-orange text-white" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Users className="w-4 h-4" />
        <span>Community</span>
      </Button>
    </div>
  )
}
