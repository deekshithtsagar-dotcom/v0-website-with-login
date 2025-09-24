import { Header } from "@/components/navigation/header"
import { ProfileDisplay } from "@/components/profile/profile-display"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProfileDisplay />
      </main>
    </div>
  )
}
