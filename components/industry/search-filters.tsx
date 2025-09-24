"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input placeholder="Search students, skills, or projects..." className="pl-10 bg-background border-border" />
      </div>

      <div className="flex gap-2">
        <Select defaultValue="all-skills">
          <SelectTrigger className="w-[140px] bg-background border-border">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-skills">All Skills</SelectItem>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="ai-ml">AI/ML</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-categories">
          <SelectTrigger className="w-[160px] bg-background border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-categories">All Categories</SelectItem>
            <SelectItem value="sustainability">Sustainability</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="fintech">FinTech</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
