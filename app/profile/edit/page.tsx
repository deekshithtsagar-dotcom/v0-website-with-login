import { Header } from "@/components/navigation/header"
import { ProfileSetupForm } from "@/components/profile/profile-setup-form"

export default function EditProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gradient-orange mb-2">Edit Profile</h1>
          <p className="text-muted-foreground">Update your information and preferences</p>
        </div>

        <ProfileSetupForm />
      </main>
    </div>
  )
}
