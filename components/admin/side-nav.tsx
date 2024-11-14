"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Files,
  Settings,
  Users,
  ClipboardList,
  Scale,
  FileText,
} from "lucide-react"

const routes = [
  {
    label: "Overview",
    icon: BarChart3,
    href: "/admin",
    color: "text-sky-500",
  },
  {
    label: "Applications",
    icon: Files,
    href: "/admin/applications",
    color: "text-violet-500",
  },
  {
    label: "Reviews",
    icon: ClipboardList,
    href: "/admin/reviews",
    color: "text-pink-700",
  },
  {
    label: "Legal Approvals",
    icon: Scale,
    href: "/admin/approvals",
    color: "text-indigo-600",
  },
  {
    label: "Users",
    icon: Users,
    href: "/admin/users",
    color: "text-orange-700",
  },
  {
    label: "Templates",
    icon: FileText,
    href: "/admin/templates",
    color: "text-emerald-500",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
    color: "text-yellow-600",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
]

export function SideNav() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white border-r text-gray-800 shadow-md">
      <div className="px-3 py-2 flex-1">
        <Link href="/admin" className="flex items-center pl-3 mb-14">
          <Scale className="h-8 w-8" />
          <h1 className="text-2xl font-bold ml-2">Admin</h1>
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