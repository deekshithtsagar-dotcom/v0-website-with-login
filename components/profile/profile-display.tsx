"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

// Mock user data - in a real app, this would come from your auth/database
const mockUserData = {
  name: "Alex Chen",
  email: "alex.chen@university.edu",
  academicYear: "3rd Year",
  major: "Computer Science",
  bio: "Passionate about AI, sustainable technology, and creating solutions that make a real impact. Looking to collaborate on innovative projects!",
  skills: ["React", "Python", "Machine Learning", "UI/UX Design", "Data Analysis"],
  interests: ["Artificial Intelligence", "Sustainability", "Healthcare", "Education", "Social Impact"],
}

export function ProfileDisplay() {
  const { toast } = useToast()

  const handleEditClick = () => {
    toast({
      title: "Redirecting to Edit Profile",
      description: "Taking you to the profile editing page...",
      duration: 2000,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gradient-orange">Student Profile</h1>
        <Link href="/profile/edit">
          <Button className="gradient-orange text-white font-semibold" onClick={handleEditClick}>
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </Link>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Name</h3>
              <p className="text-muted-foreground">{mockUserData.name}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">{mockUserData.email}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Academic Year & Major</h3>
            <p className="text-muted-foreground">
              {mockUserData.academicYear} {mockUserData.major}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Bio</h3>
            <p className="text-muted-foreground leading-relaxed">{mockUserData.bio}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {mockUserData.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {mockUserData.interests.map((interest) => (
                <Badge key={interest} variant="outline" className="border-orange-500/20 text-orange-500">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
