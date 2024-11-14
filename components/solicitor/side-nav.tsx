"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Scale,
  History,
  Settings,
  User,
} from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/solicitor",
    color: "text-sky-500",
  },
  {
    label: "Active Cases",
    icon: Scale,
    href: "/solicitor/cases",
    color: "text-violet-500",
  },
  {
    label: "History",
    icon: History,
    href: "/solicitor/history",
    color: "text-orange-700",
  },
  {
    label: "Profile",
    icon: User,
    href: "/solicitor/profile",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/solicitor/settings",
  },
]

export function SolicitorSideNav() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white border-r text-gray-800 shadow-md">
      <div className="px-3 py-2 flex-1">
        <Link href="/solicitor" className="flex items-center pl-3 mb-14">
          <Scale className="h-8 w-8" />
          <h1 className="text-2xl font-bold ml-2">Solicitor</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "text-primary bg-primary/10 shadow-sm" : "text-muted-foreground",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}