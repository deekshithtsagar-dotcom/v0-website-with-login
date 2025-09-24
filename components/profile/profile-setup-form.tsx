"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

const AVAILABLE_SKILLS = [
  "React",
  "Python",
  "Machine Learning",
  "UI/UX Design",
  "Data Analysis",
  "JavaScript",
  "Node.js",
  "Java",
  "C++",
  "Swift",
  "Kotlin",
  "Flutter",
  "Vue.js",
  "Angular",
  "Django",
  "Flask",
  "TensorFlow",
  "PyTorch",
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "Blockchain",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Docker",
  "Kubernetes",
]

const AVAILABLE_INTERESTS = [
  "Artificial Intelligence",
  "Sustainability",
  "Healthcare",
  "Education",
  "Fintech",
  "Gaming",
  "Social Impact",
  "IoT",
  "Robotics",
  "AR/VR",
  "Blockchain",
  "Cybersecurity",
  "Climate Tech",
  "Biotech",
  "Space Tech",
  "Clean Energy",
  "Smart Cities",
  "E-commerce",
  "Travel Tech",
  "Food Tech",
]

export function ProfileSetupForm() {
  const [formData, setFormData] = useState({
    academicYear: "",
    major: "",
    bio: "",
    skills: [] as string[],
    interests: [] as string[],
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate profile creation
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Profile setup:", formData)

    toast({
      title: "Profile Complete!",
      description: "Your profile has been successfully set up. Welcome to InnovatU!",
      duration: 4000,
    })

    router.push("/profile")
    setIsLoading(false)
  }

  const addSkill = (skill: string) => {
    if (!formData.skills.includes(skill)) {
      setFormData((prev) => ({ ...prev, skills: [...prev.skills, skill] }))
    }
  }

  const removeSkill = (skill: string) => {
    setFormData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }))
  }

  const addInterest = (interest: string) => {
    if (!formData.interests.includes(interest)) {
      setFormData((prev) => ({ ...prev, interests: [...prev.interests, interest] }))
    }
  }

  const removeInterest = (interest: string) => {
    setFormData((prev) => ({ ...prev, interests: prev.interests.filter((i) => i !== interest) }))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Complete Your Profile</CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Help others discover your talents and interests
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="academicYear">Academic Year</Label>
              <Input
                id="academicYear"
                placeholder="e.g., 3rd Year"
                value={formData.academicYear}
                onChange={(e) => setFormData((prev) => ({ ...prev, academicYear: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="major">Major</Label>
              <Input
                id="major"
                placeholder="e.g., Computer Science"
                value={formData.major}
                onChange={(e) => setFormData((prev) => ({ ...prev, major: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself, your passions, and what you're looking to achieve..."
              value={formData.bio}
              onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="space-y-4">
            <div>
              <Label>Skills</Label>
              <p className="text-sm text-muted-foreground mb-3">Select your technical skills</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)} className="ml-2 hover:text-destructive">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_SKILLS.filter((skill) => !formData.skills.includes(skill))
                  .slice(0, 10)
                  .map((skill) => (
                    <Button
                      key={skill}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addSkill(skill)}
                      className="text-xs"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      {skill}
                    </Button>
                  ))}
              </div>
            </div>

            <div>
              <Label>Interests</Label>
              <p className="text-sm text-muted-foreground mb-3">What areas are you passionate about?</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="bg-orange-500/10 text-orange-500">
                    {interest}
                    <button
                      type="button"
                      onClick={() => removeInterest(interest)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_INTERESTS.filter((interest) => !formData.interests.includes(interest))
                  .slice(0, 8)
                  .map((interest) => (
                    <Button
                      key={interest}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => addInterest(interest)}
                      className="text-xs"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      {interest}
                    </Button>
                  ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full gradient-orange text-white font-semibold" disabled={isLoading}>
            {isLoading ? "Setting up profile..." : "Complete Profile"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
