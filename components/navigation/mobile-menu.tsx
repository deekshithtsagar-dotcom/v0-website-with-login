"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, Lightbulb, Building } from "lucide-react"
import Link from "next/link"
import { NotificationCenter } from "@/components/notifications/notification-center"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/innovation", icon: Lightbulb, label: "Innovation" },
    { href: "/industry", icon: Building, label: "Industry" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          <div className="flex justify-center pb-4 border-b border-border">
            <NotificationCenter />
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center space-x-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-secondary"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}

          <div className="border-t border-border pt-4 mt-6">
            <div className="flex flex-col space-y-2">
              <Link href="/login" onClick={() => setOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-foreground">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setOpen(false)}>
                <Button className="w-full gradient-orange text-white font-semibold">Sign Up</Button>
              </Link>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
