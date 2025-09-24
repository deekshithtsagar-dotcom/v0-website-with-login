"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, X, Check, User, Briefcase } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Notification {
  id: string
  type: "join_request" | "contact_request" | "interest_expressed"
  title: string
  message: string
  timestamp: string
  isRead: boolean
  actionData?: {
    projectName?: string
    userName?: string
    userProfile?: string
  }
}

// Mock notifications data
const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "join_request",
    title: "New Join Request",
    message: "Sarah Kim wants to join your EcoTrack project",
    timestamp: "2 hours ago",
    isRead: false,
    actionData: {
      projectName: "EcoTrack - Carbon Footprint App",
      userName: "Sarah Kim",
      userProfile: "Computer Science Student",
    },
  },
  {
    id: "2",
    type: "contact_request",
    title: "Industry Contact Request",
    message: "TechCorp wants to connect with you",
    timestamp: "5 hours ago",
    isRead: false,
    actionData: {
      userName: "TechCorp Recruiter",
      userProfile: "Senior Software Engineer",
    },
  },
  {
    id: "3",
    type: "interest_expressed",
    title: "Industry Interest",
    message: "GreenTech Solutions expressed interest in your project",
    timestamp: "1 day ago",
    isRead: true,
    actionData: {
      projectName: "Campus Food Waste Tracker",
      userName: "GreenTech Solutions",
    },
  },
]

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const unreadCount = notifications.filter((n) => !n.isRead).length

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const handleApprove = (notification: Notification) => {
    toast({
      title: "Request Approved!",
      description: `You've approved ${notification.actionData?.userName}'s request.`,
      duration: 3000,
    })
    markAsRead(notification.id)
  }

  const handleDecline = (notification: Notification) => {
    toast({
      title: "Request Declined",
      description: `You've declined ${notification.actionData?.userName}'s request.`,
      duration: 3000,
    })
    markAsRead(notification.id)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "join_request":
        return <User className="w-4 h-4" />
      case "contact_request":
        return <Briefcase className="w-4 h-4" />
      case "interest_expressed":
        return <Bell className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  return (
    <div className="relative">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="relative">
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange-500">
            {unreadCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <Card className="absolute right-0 top-full mt-2 w-96 max-h-96 overflow-y-auto z-50 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Notifications</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {notifications.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">No notifications</p>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg border ${
                    notification.isRead ? "bg-muted/30" : "bg-orange-500/5 border-orange-500/20"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-orange-500 mt-1">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="font-semibold text-sm">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                      </div>

                      {(notification.type === "join_request" || notification.type === "contact_request") &&
                        !notification.isRead && (
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => handleApprove(notification)}
                              className="h-7 px-3 text-xs bg-green-600 hover:bg-green-700"
                            >
                              <Check className="w-3 h-3 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDecline(notification)}
                              className="h-7 px-3 text-xs"
                            >
                              <X className="w-3 h-3 mr-1" />
                              Decline
                            </Button>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
