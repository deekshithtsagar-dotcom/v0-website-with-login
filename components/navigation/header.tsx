"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Lightbulb, Building } from "lucide-react"
import { MobileMenu } from "./mobile-menu"
import { NotificationCenter } from "@/components/notifications/notification-center"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-orange flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-xl font-bold text-gradient-orange">InnovatU</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/profile"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
            <Link
              href="/innovation"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Innovation</span>
            </Link>
            <Link
              href="/industry"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Building className="w-4 h-4" />
              <span>Industry</span>
            </Link>
          </div>

          {/* Desktop Auth Buttons and Notifications */}
          <div className="hidden md:flex items-center space-x-4">
            <NotificationCenter />
            <Link href="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="gradient-orange text-white font-semibold">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}
