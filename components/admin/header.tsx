"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Bell, User } from "lucide-react"
import Link from "next/link"

export function AdminHeader() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

  const notifications = [
    {
      id: 1,
      title: "New Application Submitted",
      description: "A new application has been submitted for review",
      time: "5 minutes ago"
    },
    {
      id: 2,
      title: "Review Required",
      description: "Application APP-2024-003 needs your attention",
      time: "1 hour ago"
    },
    {
      id: 3,
      title: "System Update",
      description: "System maintenance scheduled for tonight",
      time: "2 hours ago"
    }
  ]

  return (
    <div className="border-b shadow-sm">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <Sheet open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-medium">{notification.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.description}
                    </p>
                    <span className="text-xs text-muted-foreground mt-2 block">
                      {notification.time}
                    </span>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full"
              >
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Amir Farhan bin Zulkifli</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    amir.farhan@pernas.gov.my
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="/admin/profile">
                  Profile Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}