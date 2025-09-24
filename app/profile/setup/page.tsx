import { ProfileSetupForm } from "@/components/profile/profile-setup-form"
import Link from "next/link"

export default function ProfileSetupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-orange flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-xl font-bold text-gradient-orange">InnovatU</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gradient-orange mb-2">Welcome to InnovatU!</h1>
            <p className="text-muted-foreground">Let's set up your profile to get started</p>
          </div>

          <ProfileSetupForm />
        </div>
      </main>
    </div>
  )
}
