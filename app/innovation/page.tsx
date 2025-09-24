"use client"

import { useState } from "react"
import { Header } from "@/components/navigation/header"
import { ProjectCard } from "@/components/projects/project-card"
import { SearchBar } from "@/components/innovation-hub/search-bar"
import { TabNavigation } from "@/components/innovation-hub/tab-navigation"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const mockProjects = [
  {
    title: "EcoTrack - Carbon Footprint App",
    description:
      "A mobile app to help students track and reduce their carbon footprint through gamification and social challenges.",
    tags: ["Sustainability", "Mobile App", "React Native", "Environmental"],
    memberCount: 2,
    maxMembers: 5,
    timeAgo: "2 hours ago",
    author: "Sarah Kim",
  },
  {
    title: "StudyBuddy AI Tutor",
    description: "AI-powered personalized learning assistant that adapts to individual learning styles and pace.",
    tags: ["AI", "Education", "Machine Learning", "Python"],
    memberCount: 3,
    maxMembers: 4,
    timeAgo: "5 hours ago",
    author: "Marcus Johnson",
  },
  {
    title: "Campus Food Waste Tracker",
    description: "Platform to connect students with surplus food from campus dining, reducing waste and saving money.",
    tags: ["Social Impact", "Sustainability", "Web App", "Food"],
    memberCount: 1,
    maxMembers: 6,
    timeAgo: "1 day ago",
    author: "Elena Rodriguez",
  },
  {
    title: "Mental Health Check-in Bot",
    description: "AI-powered chatbot to provide daily mental health check-ins and resources for students.",
    tags: ["Mental Health", "AI", "Chatbot", "Wellness"],
    memberCount: 2,
    maxMembers: 4,
    timeAgo: "2 days ago",
    author: "Alex Chen",
  },
  {
    title: "AR Campus Navigation",
    description: "Augmented reality app to help new students navigate campus buildings and find resources.",
    tags: ["AR", "Mobile App", "Navigation", "Unity"],
    memberCount: 3,
    maxMembers: 5,
    timeAgo: "3 days ago",
    author: "Jordan Smith",
  },
  {
    title: "Blockchain Academic Credits",
    description: "Secure blockchain system for storing and verifying academic achievements and certifications.",
    tags: ["Blockchain", "Education", "Security", "Web3"],
    memberCount: 4,
    maxMembers: 6,
    timeAgo: "1 week ago",
    author: "Taylor Kim",
  },
]

export default function InnovationPage() {
  const [activeTab, setActiveTab] = useState<"ideas" | "community">("ideas")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Innovation Hub</h1>
          <p className="text-muted-foreground text-lg">
            Discover ideas, join projects, and stay connected with the community
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between mb-6">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <Button className="gradient-orange text-white font-semibold">
            <Plus className="w-4 h-4 mr-2" />
            Post New Idea
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Projects Grid */}
        {activeTab === "ideas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}

        {activeTab === "community" && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">Community Features Coming Soon</h3>
            <p className="text-muted-foreground">Connect with fellow innovators and build your network.</p>
          </div>
        )}
      </main>
    </div>
  )
}
