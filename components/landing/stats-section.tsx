import { Card } from "@/components/ui/card"
import { Rocket, Users, TrendingUp, Star } from "lucide-react"

const stats = [
  {
    icon: Rocket,
    value: "124",
    label: "Active Projects",
  },
  {
    icon: Users,
    value: "850+",
    label: "Student Innovators",
  },
  {
    icon: TrendingUp,
    value: "89%",
    label: "Success Rate",
  },
  {
    icon: Star,
    value: "29",
    label: "Awards Won",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card border-border">
              <div className="w-12 h-12 rounded-full gradient-orange mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
